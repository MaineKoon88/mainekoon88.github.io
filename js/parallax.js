document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden, .hidden2, .aneu1, .aneu2, .container5c, .container5c1, .label, .animation');
  hiddenElements.forEach((el) => observer.observe(el));
});
