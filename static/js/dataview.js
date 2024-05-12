const DATAVIEW_CANVAS = document.getElementById("dataview-canvas");

const HANDSONTABLE_JS_URL =
  "https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.js";
const HANDSONTABLE_CSS_URL =
  "https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css";
const PAPAPARSE_URL =
  "https://cdn.jsdelivr.net/npm/papaparse@5.4/papaparse.min.js";

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
  write_to_canvas(render_files(files));
}

async function get_files(pdc_url) {
  const response = await fetch(pdc_url + ".json");
  const metadata = await response.json();
  return metadata.files;
}

function render_files(files) {
  return el("table", {}, [
    el(
      "thead",
      {},
      el("tr", {}, [
        el("th", { scope: "col" }, "Filename"),
        el("th", { scope: "col" }, "Description"),
        el("th", { scope: "col" }, "Size"),
      ]),
    ),
    el("tbody", {}, files.map(render_file_row)),
  ]);
}

function render_file_row(file) {
  const row = document.createElement("tr");
  row.append(
    el("td", {}, render_filename_from_file(file)),
    el("td", {}, file.description),
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

init_dataview();
