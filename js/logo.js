document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('.header');
    var logo1 = document.querySelector('.logo1');
    var logo2 = document.querySelector('.logo2');
    var logo3 = document.querySelector('.logo3');
    var isLogo1Visible = true;
    var hasResized = false;
    var isAnimating = false; // Controla si hay una animación en curso
  
    async function cambiarLogo() {
      if (isAnimating) return; // Evitar cambios rápidos durante la animación
      isAnimating = true; // Marcar que una animación está en curso
  
      if (window.innerWidth >= 768) {
        if (window.scrollY > 0 && isLogo1Visible) {
          header.style.background = '#fff';
          await animateCSS('.logo1', 'fadeOut');
          logo1.style.display = 'none';
          logo2.style.display = 'none';
          logo3.style.display = 'block';
          await animateCSS('.logo3', 'fadeIn');
          isLogo1Visible = false;
        } else if (window.scrollY === 0 && !isLogo1Visible && !hasResized) {
          header.style.background = '#fff';
          await animateCSS('.logo3', 'fadeOut');
          logo1.style.display = 'block';
          logo2.style.display = 'none';
          logo3.style.display = 'none';
          await animateCSS('.logo1', 'fadeIn');
          isLogo1Visible = true;
        }
        // Restablecer el estado después de cambiar el tamaño de la pantalla
        if (hasResized) {
          hasResized = false;
          isLogo1Visible = true;
          logo1.style.display = 'block';
          logo2.style.display = 'none';
          logo3.style.display = 'none';
        }
      } else if (window.innerWidth >= 450) {
        if (window.scrollY === 0 && !isLogo1Visible) {
          header.style.background = '#fff';
          await animateCSS('.logo2', 'fadeOut');
          logo1.style.display = 'block';
          logo2.style.display = 'none';
          logo3.style.display = 'none';
          await animateCSS('.logo1', 'fadeIn');
          isLogo1Visible = true;
        }
        header.style.background = '#fff';
        logo1.style.display = 'none';
        logo2.style.display = 'block';
        logo3.style.display = 'none';
      } else {
        header.style.background = '#fff';
        if (window.scrollY === 0 && !isLogo1Visible) {
          header.style.background = '#fff';
          await animateCSS('.logo2', 'fadeOut');
          logo1.style.display = 'block';
          logo2.style.display = 'none';
          logo3.style.display = 'none';
          await animateCSS('.logo1', 'fadeIn');
          isLogo1Visible = true;
        }
        logo1.style.display = 'none';
        logo2.style.display = 'block';
        logo3.style.display = 'none';
        // Indicar que hemos cambiado el tamaño de la pantalla
        hasResized = true;
      }
  
      isAnimating = false; // Marcar que la animación ha terminado
    }
  
    // Observar el logotipo 1
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && window.scrollY === 0) {
            if (!isLogo1Visible) {
              animateLogoChange(logo3, logo1);
              isLogo1Visible = true;
            }
          }
        });
      },
      { threshold: 0 } // El observador se activa cuando el elemento es completamente visible
    );
  
    observer.observe(logo1);
  
    window.addEventListener('scroll', cambiarLogo);
    window.addEventListener('resize', cambiarLogo);
  });
  
  const animateCSS = (element, animation, prefix = 'animate__') =>
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);
  
      node.classList.add(`${prefix}animated`, animationName);
  
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }
  
      node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });
  