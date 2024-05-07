const SEARCH_OPTIONS = {
  bool: "AND",
  fields: {
    title: { boost: 2 },
    body: { boost: 1 },
  },
  expand: true,
};

async function get_index() {
  const index_promise = new Promise((resolve, _) => {
    const index_interval = setInterval(() => {
      if (window.searchIndex !== undefined) {
        clearInterval(index_interval);
        // load serialized data
        const index = elasticlunr.Index.load(window.searchIndex);
        resolve(index);
      }
    }, 100);
  });

  return await index_promise;
}

function render_result(result) {
  const result_div = document.createElement("a");
  result_div.href = result.doc.id;
  result_div.classList.add("search-result");

  const result_heading = document.createElement("h3");
  result_heading.appendChild(document.createTextNode(result.doc.title));

  const result_preview = document.createElement("p");
  const preview_text = result.doc.body.split(" ", 50).join(" ");
  result_preview.appendChild(document.createTextNode(preview_text));

  result_div.appendChild(result_heading);
  result_div.appendChild(result_preview);

  return result_div;
}

document.addEventListener("DOMContentLoaded", async () => {
  const index = await get_index();

  const results_div = document.getElementById("search-results");

  document.getElementById("search-bar")?.addEventListener("input", (event) => {
    const search_term = event.target.value;
    const rendered_results = index
      .search(search_term, SEARCH_OPTIONS)
      .map(render_result);

    if (rendered_results.length === 0) {
      results_div.replaceChildren(document.createTextNode("No results found."));
    } else {
      results_div.replaceChildren(...rendered_results);
    }
  });
});
