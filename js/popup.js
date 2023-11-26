document.addEventListener("DOMContentLoaded", function() {
    // Crea una capa para el fondo oscuro
    var fondoOscuro = document.createElement('div');
    fondoOscuro.id = 'fondoOscuro';
    fondoOscuro.style.position = 'fixed';
    fondoOscuro.style.top = '0';
    fondoOscuro.style.left = '0';
    fondoOscuro.style.width = '100%';
    fondoOscuro.style.height = '100%';
    fondoOscuro.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'; // Fondo oscuro
    fondoOscuro.style.filter = 'blur(5px)'; // Efecto de desenfoque
    document.body.appendChild(fondoOscuro);

    // Muestra el popup después de que la página se haya cargado
    document.getElementById('popup').style.display = 'block';
});

function cerrarPopup() {
    // Quita el fondo oscuro y oculta el popup al hacer clic en el botón de cerrar
    document.getElementById('fondoOscuro').remove();
    document.getElementById('popup').style.display = 'none';
}
