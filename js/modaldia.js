// Obtener todos los botones de información
var infoButtons = document.querySelectorAll(".info-button");

// Agregar un evento de clic a cada botón
infoButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var modalId = this.getAttribute("data-modal"); // Obtener el ID del modal asociado

    // Mostrar el modal correspondiente
    var modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Agregar evento de clic al botón "Cerrar" del modal
    var closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", function() {
      modal.style.display = "none"; // Cerrar el modal
    });
  });
});
