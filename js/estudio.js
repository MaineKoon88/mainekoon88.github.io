document.addEventListener("DOMContentLoaded", function() {
    var elementoAnimado = document.querySelector('.tracking-in-expand-fwd-bottom');
  
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Si el elemento es visible en el viewport, aplica la animación
          elementoAnimado.style.opacity = '1';
          elementoAnimado.style.visibility = 'visible';
          observer.unobserve(entry.target); // Deja de observar una vez que se ha mostrado
        }
      });
    }, { threshold: 0.5 }); // Puedes ajustar el valor del umbral según tus necesidades
  
    observer.observe(elementoAnimado);
  });