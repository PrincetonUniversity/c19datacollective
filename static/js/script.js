function el(el_name, attrs, content) {
  const element = document.createElement(el_name);
  for (key in attrs) {
    if (key === "click" || key === "change") {
      element.addEventListener(key, attrs[key]);
    } else if (key === "class") {
      if (Array.isArray(attrs[key])) {
        attrs[key].forEach((class_name) => element.classList.add(class_name));
      } else {
        element.classList.add(attrs[key]);
      }
    } else {
      element.setAttribute(key, attrs[key]);
    }
  }
  if (typeof content === "string") {
    element.append(document.createTextNode(content));
  } else if (Array.isArray(content)) {
    element.append(...content);
  } else {
    element.append(content);
  }
  return element;
}

function debounce(proc, wait) {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      proc(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

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
