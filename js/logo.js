document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('.header');
    var logo1 = document.querySelector('.logo1');
    var logo2 = document.querySelector('.logo2');
    var logo3 = document.querySelector('.logo3');

    function cambiarLogo() {
        if (window.innerWidth >= 768) {
            if (window.scrollY > 0) {
                header.style.background = '#fff';
                logo1.style.display = 'none';
                logo2.style.display = 'none';
                logo3.style.display = 'block';
            } else {
                header.style.background = '#fff';
                logo1.style.display = 'block';
                logo2.style.display = 'none';
                logo3.style.display = 'none';
            }
        } else if (window.innerWidth >= 450) {
            header.style.background = '#fff';
            logo1.style.display = 'none';
            logo2.style.display = 'block';
            logo3.style.display = 'none';
        } else {
            header.style.background = '#fff';
            logo1.style.display = 'block';
            logo2.style.display = 'none';
            logo3.style.display = 'none';
        }
    }

    cambiarLogo();

    window.addEventListener('scroll', cambiarLogo);
    window.addEventListener('resize', cambiarLogo);
});
