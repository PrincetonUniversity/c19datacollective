async function render_dataview() {
  const dataview_el = document.getElementById("dataview-body");

  // PDC_URL loaded through template
  const files = await get_files(PDC_URL);
  dataview_el.replaceChildren(...files.map(file_to_html_row));
}

async function get_files(pdc_url) {
  console.log(`Getting files from: {pdc_url}`);
  const response = await fetch(pdc_url + ".json");
  const metadata = await response.json();
  return metadata.files;
}

function file_to_html_row(file) {
  const row = document.createElement("tr");
  row.append(
    wrap("td", {}, wrap("a", { href: file.download_url }, file.name)),
    wrap("td", {}, file.description),
    wrap("td", {}, format_bytes(file.size)),
  );
  return row;
}

function wrap(el_name, attrs, content) {
  const el = document.createElement(el_name);
  for (key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (typeof content === "string") {
    el.append(document.createTextNode(content));
  } else {
    el.append(content);
  }
  return el;
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

render_dataview();
