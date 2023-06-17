const name = document.getElementById('Nombre')
const surname = document.getElementById('Apellido')
const email = document.getElementById('email')
const subject = document.getElementById('Asunto')
const message = document.getElementById('Mensaje')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null){
        messages.push('El email es necesario')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})