const DATAVIEW_CANVAS = document.getElementById("dataview-canvas");

const HANDSONTABLE_JS_URL =
  "https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.js";
const HANDSONTABLE_CSS_URL =
  "https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css";
const PAPAPARSE_URL =
  "https://cdn.jsdelivr.net/npm/papaparse@5.4/papaparse.min.js";

const HANDSONTABLE_OPTS = {
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
};

let model = {
  files: undefined,
  page_num: 1,
  items_per_page: 10,
  mode: "file",
  filename: undefined,
  url: undefined,
  libraries_loaded: false,

  get max_pages() {
    if (this.files === undefined) {
      throw new ReferenceError("files is not defined for the current model.");
    }
    return Math.ceil(this.files.length / this.items_per_page);
  },

  get length() {
    if (this.files === undefined) {
      throw new ReferenceError("files is not defined for the current model.");
    }
    return this.files.length;
  },

  get start_i() {
    return (this.page_num - 1) * this.items_per_page;
  },

  get end_i() {
    return this.page_num * this.items_per_page;
  },
};

function render(model) {
  if (model.files === undefined) {
    load_files();
    return [el("p", {}, "Loading files ...")];
  }
  switch (model.mode) {
    case "file":
      return render_files(model);

    case "csv":
      return render_csv(model);

    default:
      return [el("p", {}, "Hmm, something went wrong. Try again?")];
  }
}

async function load_files() {
  model.files = await get_files(PDC_URL);
  model.page_num = 1;
  model.items_per_page = 10;
  model.mode = "file";
  write_to_canvas(...render(model));
}

async function load_libraries() {
  document.head.appendChild(
    el("link", { rel: "stylesheet", href: HANDSONTABLE_CSS_URL }, []),
  );
  await Promise.all([load_js(HANDSONTABLE_JS_URL), load_js(PAPAPARSE_URL)]);

  model.libraries_loaded = true;
  write_to_canvas(...render(model));
}

function to_file_mode() {
  model.mode = "file";
  write_to_canvas(...render(model));
}

function to_csv_mode(filename, url) {
  model.mode = "csv";
  model.filename = filename;
  model.url = url;
  write_to_canvas(...render(model));
}

function goto_page(page_num) {
  model.page_num = clamp(page_num, 1, model.max_pages);
  write_to_canvas(...render(model));
}

function change_items_per_page(items_per_page) {
  model.page_num = 1;
  model.items_per_page = items_per_page;
  model.mode = "file";
  write_to_canvas(...render(model));
}

function write_to_canvas(...elements) {
  if (elements.length === 1 && Array.isArray(elements[0])) {
    DATAVIEW_CANVAS.replaceChildren(...elements[0]);
  } else {
    DATAVIEW_CANVAS.replaceChildren(...elements);
  }
}

function render_files(model) {
  return [
    el("div", { class: "paginate" }, [
      render_entries_toolbar(model),
      render_pagination(model),
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
      el(
        "tbody",
        {},
        model.files.slice(model.start_i, model.end_i).map(render_file_row),
      ),
    ]),
  ];
}

function render_entries_toolbar(model) {
  let options = [10, 25, 50, 100].map((n) => {
    return el(
      "option",
      model.items_per_page === n ? { selected: "selected" } : {},
      n.toString(),
    );
  });
  return el("div", { class: "entries-toolbar" }, [
    el(
      "span",
      {},
      `Showing ${model.start_i + 1} to ${Math.min(model.end_i, model.length)} of ${model.length} entries;`,
    ),
    el("span", {}, [
      el(
        "select",
        {
          id: "items-per-page",
          change: (e) => change_items_per_page(parseInt(e.target.value)),
        },
        options,
      ),
      "entries per page.",
    ]),
  ]);
}

function render_pagination(model) {
  return el("div", { class: "paginate-btns" }, [
    el(
      "button",
      {
        class: ["paginate-btn", "paginate-prev-next"],
        click: (_) => goto_page(model.page_num - 1),
      },
      "Previous",
    ),
    ...render_paginate_btns(model),
    el(
      "button",
      {
        class: ["paginate-btn", "paginate-prev-next"],
        click: (_) => goto_page(model.page_num + 1),
      },
      "Next",
    ),
  ]);
}

function render_paginate_btns(model) {
  let elements = [render_paginate_btn(1, model.page_num)];

  if (model.page_num - 2 > 2) {
    elements.push(el("span", { class: "paginate-ellipses" }, "..."));
  }

  for (
    i = Math.min(
      Math.max(model.page_num - 2, 2),
      Math.max(model.max_pages - 5, 2),
    );
    i <=
    Math.max(
      Math.min(model.page_num + 2, model.max_pages - 1),
      Math.min(6, model.max_pages - 1),
    );
    i++
  ) {
    elements.push(render_paginate_btn(i, model.page_num));
  }

  if (i + 1 < model.max_pages) {
    elements.push(el("span", { class: "paginate-ellipses" }, "..."));
  }

  if (model.page_num <= model.max_pages) {
    elements.push(render_paginate_btn(model.max_pages, model.page_num));
  }

  return elements;
}

function render_paginate_btn(page_num, current_page) {
  if (current_page === page_num) {
    return el("span", { class: "paginate-btn" }, page_num.toString());
  }
  return el(
    "button",
    {
      class: "paginate-btn",
      click: (_) => goto_page(page_num),
    },
    page_num.toString(),
  );
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
            click: (e) => {
              e.preventDefault();
              to_csv_mode(file.name, file.download_url);
            },
          },
          file.name,
        );
      }

    default:
      return el("a", { href: file.download_url }, file.name);
  }
}

function render_csv(model) {
  if (!model.libraries_loaded) {
    load_libraries();
    return [el("p", {}, "Waiting for CSV libraries ...")];
  }

  const return_el = el("p", { class: "return" }, [
    "You are viewing ",
    el("code", {}, model.filename),
    ". ",
    el("a", { href: model.url }, "Download this file"),
    ", or ",
    el(
      "a",
      {
        href: "#dataview",
        click: async (e) => {
          e.preventDefault();
          to_file_mode();
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

  Papa.parse(model.url, {
    download: true,
    skipEmptyLines: true,
    complete: (result) => {
      const header = result.data.shift();
      const table = new Handsontable(table_el, {
        data: result.data,
        colHeaders: header,
        ...HANDSONTABLE_OPTS,
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

async function get_files(pdc_url) {
  const response = await fetch(pdc_url + ".json");
  const metadata = await response.json();
  return metadata.files.sort();
}

function load_js(url) {
  return new Promise((resolve, reject) => {
    let script = el("script", { type: "text/javascript" }, []);
    // make sure that onload event fires
    document.head.appendChild(script);
    script.onload = () => {
      resolve();
    };
    script.onerror = reject;
    script.src = url;
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

write_to_canvas(render(model));
