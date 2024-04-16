function setResponsiveToc(toc_element) {
  if (window.innerWidth < 800) {
    // mobile windows default to hiding the ToC
    return toc_element.classList.replace("toc-show", "toc-hide");
  } else {
    // reset ToC if windows get bigger
    return toc_element.classList.replace("toc-hide", "toc-show");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const toc_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.intersectionRatio > 0) {
        document
          .querySelector(".toc a[href$=" + id + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".toc a[href$=" + id + "]")
          .classList.remove("active");
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll(".has-toc h2[id],h3[id]").forEach((section) => {
    toc_observer.observe(section);
  });

  const title_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const toc_header = document.querySelector(".toc > h2");
      if (toc_header !== null) {
        if (entry.intersectionRatio > 0) {
          toc_header.textContent = "Table of Contents";
        } else {
          toc_header.textContent = entry.target.textContent;
        }
      }
    });
  });

  const title = document.querySelector(".has-toc h1");
  if (title !== null) {
    title_observer.observe(title);
  }

  const toc_element = document.querySelector(".toc");

  document.querySelector(".toc > h2")?.addEventListener("click", () => {
    if (toc_element.classList.contains("toc-show")) {
      return toc_element.classList.replace("toc-show", "toc-hide");
    } else {
      return toc_element.classList.replace("toc-hide", "toc-show");
    }
  });

  setResponsiveToc(toc_element);
  window.addEventListener("resize", () => setResponsiveToc(toc_element));
});
