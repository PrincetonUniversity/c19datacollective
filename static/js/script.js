window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".footnote-definition > p").forEach((p) => {
    let span = document.createElement("a");
    span.addEventListener("click", () => {
      document
        .querySelector('a[href="#' + p.parentElement.id + '"]')
        ?.scrollIntoView({ block: "center" });
    });
    span.classList.add("footnote-back-button");
    span.textContent = "Go Back";
    p.appendChild(span);
  });
});
