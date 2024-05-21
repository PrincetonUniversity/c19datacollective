const DATAVIEW_CANVAS = document.getElementById("dataview-canvas");

const HANDSONTABLE_JS_URL =
  "https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.js";
const HANDSONTABLE_CSS_URL =
  "https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css";
const PAPAPARSE_URL =
  "https://cdn.jsdelivr.net/npm/papaparse@5.4/papaparse.min.js";

const ITEMS_PER_PAGE = 10;

let libraries_loaded = new Set();

function write_to_canvas(...elements) {
  if (elements.length === 1 && Array.isArray(elements[0])) {
    DATAVIEW_CANVAS.replaceChildren(...elements[0]);
  } else {
    DATAVIEW_CANVAS.replaceChildren(...elements);
  }
}

async function init_dataview() {
  // PDC_URL loaded through template
  const files = await get_files(PDC_URL);
  write_to_canvas(render_files(files, 1, 10));
}

async function get_files(pdc_url) {
  const response = await fetch(pdc_url + ".json");
  const metadata = await response.json();
  return metadata.files.sort();
}

function render_files(files, page_num) {
  let start_i = (page_num - 1) * ITEMS_PER_PAGE;
  let end_i = start_i + ITEMS_PER_PAGE;

  return [
    el("p", { class: "paginate" }, [
      el(
        "span",
        {},
        `Showing ${start_i + 1} to ${Math.min(end_i, files.length)} of ${files.length} entries.`,
      ),
      render_pagination(files.length, page_num),
    ]),
    el("table", {}, [
      el(
        "thead",
        {},
        el("tr", {}, [
          el("th", { scope: "col" }, "Filename"),
          el("th", { scope: "col" }, "Description"),
          el("th", { scope: "col" }, "Size"),
        ]),
      ),
      el("tbody", {}, files.slice(start_i, end_i).map(render_file_row)),
    ]),
  ];
}

function render_pagination(length, page_num) {
  let max_pages = Math.ceil(length / ITEMS_PER_PAGE);

  return el("span", { class: "paginate-btns" }, [
    el(
      "a",
      {
        class: "previous-btn",
        href: "#dataview",
        click: paginate_onclick(page_num - 1, max_pages),
      },
      "Previous",
    ),
    ...render_paginate_btns(length, page_num),
    el(
      "a",
      {
        class: "next-btn",
        href: "#dataview",
        click: paginate_onclick(page_num + 1, max_pages),
      },
      "Next",
    ),
  ]);
}

function render_paginate_btns(length, page_num) {
  let max_pages = Math.ceil(length / ITEMS_PER_PAGE);
  let elements = [render_paginate_btn(1, max_pages)];

  if (page_num > 2) {
    elements.push(el("span", { class: "paginate-ellipses" }, "..."));
  }

  for (
    let i = Math.max(page_num - 2, 2);
    i <= Math.min(page_num + 2, max_pages - 1);
    i++
  ) {
    elements.push(render_paginate_btn(i, max_pages));
  }

  if (page_num + 2 < max_pages) {
    elements.push(el("span", { class: "paginate-ellipses" }, "..."));
  }

  if (page_num <= max_pages) {
    elements.push(render_paginate_btn(max_pages, max_pages));
  }

  return elements;
}

function render_paginate_btn(page_num, max_pages) {
  return el(
    "a",
    {
      class: "paginate-btn",
      href: "#dataview",
      click: paginate_onclick(page_num, max_pages),
    },
    page_num.toString(),
  );
}

function paginate_onclick(page_num, max_pages) {
  return async (event) => {
    event.preventDefault();
    const files = await get_files(PDC_URL);
    write_to_canvas(render_files(files, clamp(page_num, 1, max_pages)));
  };
}

function render_file_row(file) {
  const row = document.createElement("tr");
  row.append(
    el("td", {}, render_filename_from_file(file)),
    el("td", {}, file.description || ""),
    el("td", {}, format_bytes(file.size)),
  );
  return row;
}

function render_filename_from_file(file) {
  switch (file.extension) {
    case "csv":
      if (file.source !== "dataspace") {
        return el(
          "a",
          {
            href: "#dataview",
            click: async (e) => {
              e.preventDefault();
              write_to_canvas(await render_csv(file.name, file.download_url));
            },
          },
          file.name,
        );
      }

    default:
      return el("a", { href: file.download_url }, file.name);
  }
}

async function render_csv(name, url) {
  await load_libraries();

  const return_el = el("p", { class: "return" }, [
    "You are viewing ",
    el("code", {}, name),
    ". ",
    el("a", { href: url }, "Download this file"),
    ", or ",
    el(
      "a",
      {
        href: "#dataview",
        click: (e) => {
          e.preventDefault();
          init_dataview();
        },
      },
      "click here to return to file list.",
    ),
  ]);

  const search_el = el(
    "input",
    {
      type: "search",
      placeholder: "Search in CSV ...",
    },
    [],
  );

  const table_el = el(
    "div",
    {},
    el(
      "p",
      {},
      "Loading data ... (If your file is large, this might take a long time!)",
    ),
  );

  Papa.parse(url, {
    download: true,
    skipEmptyLines: true,
    complete: (result) => {
      const header = result.data.shift();
      const table = new Handsontable(table_el, {
        data: result.data,
        colHeaders: header,
        readOnly: true,
        autoWrapRow: true,
        autoWrapCol: true,
        dropdownMenu: true,
        hiddenColumns: {
          indicators: true,
        },
        multiColumnSorting: true,
        manualColumnResize: true,
        manualRowMove: true,
        manualColumnMove: true,
        search: true,
        filters: true,
        rowHeaders: true,
        autoWrapCol: true,
        autoWrapRow: true,
        colWidths: 200,
        height: "80vh",
        licenseKey: "non-commercial-and-evaluation",
      });

      search_el.addEventListener(
        "input",
        debounce((e) => {
          console.log("search");
          table.getPlugin("search").query(e.target.value);
          table.render();
        }, 250),
      );
    },
  });

  return [return_el, search_el, table_el];
}

async function load_libraries() {
  if (!libraries_loaded.has(HANDSONTABLE_CSS_URL)) {
    document.head.appendChild(
      el("link", { rel: "stylesheet", href: HANDSONTABLE_CSS_URL }, []),
    );
    libraries_loaded.add(HANDSONTABLE_CSS_URL);
  }

  await Promise.all([load_js(HANDSONTABLE_JS_URL), load_js(PAPAPARSE_URL)]);
}

function load_js(url) {
  return new Promise((resolve, reject) => {
    if (libraries_loaded.has(url)) {
      resolve();
    } else {
      let script = el("script", { type: "text/javascript" }, []);
      // make sure that onload event fires
      document.head.appendChild(script);
      script.onload = () => {
        libraries_loaded.add(url);
        resolve();
      };
      script.onerror = reject;
      script.src = url;
    }
  });
}

function parse_csv(url, start, n_items, step_proc) {
  return Papa.parse(url, {
    download: true,
    skipEmptyLines: true,
    worker: true,
    step: (result, parser) => {
      if (start > 0) {
        // skip lines until the `start` index
        start--;
      } else if (n_items > 0) {
        // parse `n_items` number of lines
        step_proc(result.data);
        n_items--;
      } else {
        // ignore the rest
        parser.abort();
      }
    },
  });
}

function format_bytes(x) {
  const units = [
    "bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];
  let l = 0,
    n = parseInt(x, 10) || 0;
  while (n >= 1024 && ++l) {
    n = n / 1024;
  }
  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

init_dataview();
