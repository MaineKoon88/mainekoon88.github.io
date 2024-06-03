document.getElementById('btn').addEventListener('click', function(event) {
  // Evitar el envío del formulario por defecto
  event.preventDefault();

  var name = document.getElementById('Nombre').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('Asunto').value;
  var message = document.getElementById('Mensaje').value;

  var inputs = document.getElementsByClassName('input100');
  var isValid = true;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  Array.prototype.forEach.call(inputs, function(input) {
    if (input.name === 'email') {
      if (input.value.match(emailRegex)) {
        input.parentNode.classList.remove('alert-validate');
      } else {
        input.parentNode.classList.add('alert-validate');
        isValid = false;
      }
    } else {
      if (input.checkValidity()) {
        input.parentNode.classList.remove('alert-validate');
      } else {
        input.parentNode.classList.add('alert-validate');
        isValid = false;
      }
    }
  });

  var errorMessage = document.getElementById('errorMessage');
  var btn = document.getElementById("btn");
  var originalColor = btn.style.color; // Almacenar el color original del botón

  if (isValid && email.match(emailRegex)) {
    // Reemplazar el texto del botón por la animación mientras se envía el mensaje
    btn.innerHTML = '<span><i class="fa-solid fa-circle-notch fa-spin"></i></span>';
    btn.style.backgroundColor = originalColor; // Restablecer el color original del botón

    var body = 'Nombre: ' + name + '<br/> email: ' + email + '<br/> Asunto: ' + subject + '<br/> Mensaje: ' + message;

    Email.send({
      SecureToken: "77199b6c-ed29-4201-b58b-636dec47c574",
      To: 'consultas@inasmed.com.ar',
      From: "inasmedinfo@gmail.com",
      Subject: "Mensaje de contacto",
      Body: body
    }).then(function(message) {
      // ... Código para manejar el envío del mensaje ...

      // Reemplazar el texto del botón por el mensaje "Mensaje Enviado!" y cambiar el color
      btn.innerHTML = 'Mensaje Enviado!';
      btn.style.backgroundColor = '#2ecc71';

      resetForm();

      // Volver a establecer el texto original del botón y color después de 3 segundos
      setTimeout(function() {
        btn.innerHTML = '<span>Enviar <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i></span>';
        btn.style.backgroundColor = originalColor; // Restablecer el color original del botón
      }, 3000);
    });
  } else {
    errorMessage.textContent = 'Complete el formulario!';

    // Cambiar el color del botón en caso de error
    btn.style.backgroundColor = '#922b21';

    // Guardar el contenido original del botón
    var originalContent = btn.innerHTML;

    // Mostrar el mensaje de error dentro del botón
    btn.innerHTML = '<span style="color: white;">' + errorMessage.textContent + '</span>';

    // Ocultar el mensaje de error después de 3 segundos
    setTimeout(function() {
      btn.innerHTML = originalContent; // Restablecer el contenido original del botón
      btn.style.backgroundColor = originalColor; // Restablecer el color original del botón
    }, 3000);
  }
});

function resetForm() {
  document.getElementById('Nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('Asunto').value = '';
  document.getElementById('Mensaje').value = '';
  document.getElementById('errorMessage').style.display = 'none';
}
