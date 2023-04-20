window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector('.toc a[href$=' + id + ']').classList.add('active')
      } else {
        document.querySelector('.toc a[href$=' + id + ']').classList.remove('active')
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('.has-toc h2[id],h3[id]').forEach((section) => {
    observer.observe(section);
  });
  
});
