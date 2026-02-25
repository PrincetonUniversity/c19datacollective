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

function search_site(index, search_term) {
  const results_div = document.getElementById("search-results");

  const rendered_results = index
    .search(search_term, SEARCH_OPTIONS)
    .map(render_result);

  if (rendered_results.length === 0) {
    results_div.replaceChildren(document.createTextNode("No results found."));
  } else {
    results_div.replaceChildren(...rendered_results);
  }
}

function render_result(result) {
  let preview = result.doc.body.split(" ", 50).join(" ");
  if (preview === "") {
    preview = "[No preview available.]";
  }
  return el("a", { href: result.doc.id, class: "search-result" }, [
    el("h3", {}, result.doc.title),
    el("p", {}, preview),
  ]);
}

document.addEventListener("DOMContentLoaded", async () => {
  const index = await get_index();

  document.getElementById("search-bar")?.addEventListener(
    "input",
    debounce((e) => {
      search_site(index, e.target.value);
    }, 250),
  );
});
