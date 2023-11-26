document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar .nav-item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY;

        sections.forEach((section, index) => {
            let link = links[index];

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});