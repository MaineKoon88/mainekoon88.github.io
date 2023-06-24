// Obtener elementos del DOM
var cookiePolicyLink = document.getElementById("cookiePolicyLink");
var cookieModal = document.getElementById("cookieModal");
var closeModal = document.getElementsByClassName("close")[0];

// Abrir la ventana modal al hacer clic en el enlace
cookiePolicyLink.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que se siga el enlace

  cookieModal.style.display = "block";
});

// Cerrar la ventana modal al hacer clic en el botón de cierre
closeModal.addEventListener("click", function() {
  cookieModal.style.display = "none";
});

// Cerrar la ventana modal al hacer clic fuera de ella
window.addEventListener("click", function(event) {
  if (event.target == cookieModal) {
    cookieModal.style.display = "none";
  }
});
