
    var btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
  e.preventDefault();
  var name = document.getElementById('Nombre').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('Asunto').value;
  var message = document.getElementById('Mensaje').value;

  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Por favor, complete todos los campos.');
  } else {
    var body = 'Nombre: ' + name + '<br/> email: ' + email + '<br/> Asunto: ' + subject + '<br/> Mensaje: ' + message;

    Email.send({
      SecureToken: "2fd5a4c5-0e3f-4e3f-aabc-e7953f57cff5",
      To: 'nacho.reynoso@yahoo.com.ar',
      From: "nacho.pgnp@gmail.com",
      Subject: "mensaje de contacto",
      Body: body
    }).then(function(message) {
      alert('Mensaje Enviado!');
      resetForm();
    });
  }
});

function resetForm() {
  document.getElementById('Nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('Asunto').value = '';
  document.getElementById('Mensaje').value = '';
}
