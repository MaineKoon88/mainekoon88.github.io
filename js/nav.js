const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remover la clase 'active' de todos los elementos
    navItems.forEach(navItem => {
      navItem.classList.remove('active');
    });

    // Agregar la clase 'active' al elemento seleccionado
    item.classList.add('active');
  });
});
