let isAdmin = false;

// Función para añadir un comentario
function addComment(event) {
    event.preventDefault();
    const email = document.getElementById('commentEmail').value.trim();
    const commentText = document.getElementById('commentText').value.trim();
    const date = new Date().toLocaleString();

    if (!validateEmail(email)) {
        alert("Por favor, ingresa un email válido.");
        return;
    }

    const comment = {
        email: email,
        text: commentText,
        date: date
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    document.getElementById('commentEmail').value = '';
    document.getElementById('commentText').value = '';

    renderComments();
}

// Función para validar el email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

// Función para renderizar los comentarios
function renderComments() {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = '';
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach((comment, index) => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<p><strong>${comment.email}</strong> comentó: ${comment.text} <br> <small>${comment.date}</small></p>`;
        if (isAdmin) {
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.style.marginLeft = '1rem';
            deleteButton.style.color = 'red';
            deleteButton.onclick = () => deleteComment(index);
            commentElement.appendChild(deleteButton);
        }
        commentsContainer.appendChild(commentElement);

        // Agrega una línea divisoria después de cada comentario, excepto el último
        if (index < comments.length - 1) {
            const divider = document.createElement('hr');
            commentsContainer.appendChild(divider);
        }
    });
}

// Función para eliminar un comentario
function deleteComment(index) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    renderComments();
}

// Inicializa los comentarios cuando la página se carga
document.addEventListener('DOMContentLoaded', (event) => {
    renderComments();
    document.getElementById('commentText').addEventListener('input', updateCharCount);
    document.getElementById('adminPassword').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            loginAsAdmin();
        }
    });
});

// Función para actualizar el contador de caracteres
function updateCharCount() {
    const commentText = document.getElementById('commentText').value;
    const charCount = document.getElementById('charCount');
    charCount.textContent = `${commentText.length}/300`;
}

// Función para iniciar sesión como administrador
function loginAsAdmin() {
    const password = document.getElementById('adminPassword').value;
    if (password === 'admin123') {  // Cambia esta contraseña a la que prefieras
        isAdmin = true;
        alert('Admin logged in');
        document.getElementById('adminLoginForm').style.display = 'none';
        renderComments();
    } else {
        alert('Incorrect password');
    }
}

// Muestra el formulario de inicio de sesión del administrador
document.getElementById('adminLoginBtn').addEventListener('click', function() {
    document.getElementById('adminLoginForm').style.display = 'block';
});
