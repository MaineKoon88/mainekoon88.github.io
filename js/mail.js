document.getElementById('btn').addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  
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
  if (isValid && email.match(emailRegex)) {
    var body = 'Nombre: ' + name + '<br/> email: ' + email + '<br/> Asunto: ' + subject + '<br/> Mensaje: ' + message;

    Email.send({
      SecureToken: "2fd5a4c5-0e3f-4e3f-aabc-e7953f57cff5",
      To: 'nacho.reynoso@yahoo.com.ar',
      From: "nacho.pgnp@gmail.com",
      Subject: "Mensaje de contacto",
      Body: body
    }).then(function(message) {
      var btn = document.getElementById("btn");
      btn.innerHTML = "Mensaje Enviado!";
      resetForm();
      setTimeout(function() {
        btn.innerHTML = '<span>Enviar <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i></span>';
      }, 3000);
    });
  } else {
    errorMessage.textContent = 'Complete el formulario';
    
    
    var container = document.getElementsByClassName('container-contact100-form-btn')[0];
    container.appendChild(errorMessage);

    setTimeout(function() {
      errorMessage.style.display = 'none';
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
