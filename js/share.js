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
        date: date,
        replies: [] // Array para almacenar las respuestas
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    document.getElementById('commentEmail').value = '';
    document.getElementById('commentText').value = '';
    document.getElementById('charCount').textContent = '0/300';

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
            deleteButton.style.color = 'white';
            deleteButton.style.border = 'solid';
            deleteButton.style.borderColor = 'black';
            deleteButton.style.borderRadius = '5px';
            deleteButton.style.backgroundColor = 'red';
            deleteButton.style.width = '100px';
            deleteButton.onclick = () => deleteComment(index);
            commentElement.appendChild(deleteButton);

            const replyButton = document.createElement('button');
            replyButton.textContent = 'Responder';
            replyButton.style.marginLeft = '1rem';
            replyButton.style.color = 'white';
            replyButton.style.border = 'solid';
            replyButton.style.borderColor = 'black';
            replyButton.style.borderRadius = '5px';
            replyButton.style.backgroundColor = '#2471a3';
            replyButton.style.width = '120px';
            replyButton.onclick = () => showReplyForm(index);
            commentElement.appendChild(replyButton);
        }

        commentsContainer.appendChild(commentElement);
        renderReplies(comment.replies, commentElement);

        // Agrega una línea divisoria después de cada comentario, excepto el último
        if (index < comments.length - 1) {
            const divider = document.createElement('hr');
            commentsContainer.appendChild(divider);
        }
    });
}

// Función para mostrar el formulario de respuesta
function showReplyForm(index) {
    const existingReplyForm = document.getElementById(`replyForm-${index}`);
    if (existingReplyForm) {
        existingReplyForm.remove();
        return;
    }

    const replyForm = document.createElement('form');
    replyForm.id = `replyForm-${index}`;
    replyForm.innerHTML = `
        <input type="email" id="replyEmail-${index}" placeholder="Tu email" required style="padding: 0.5rem; margin-bottom: 0.5rem; text-transform: initial;" autocapitalize="none">
        <textarea id="replyText-${index}" placeholder="Tu respuesta (máx. 300 caracteres)" maxlength="300" required style="padding: 0.5rem; margin-bottom: 0.5rem; text-transform: initial; resize:none;" autocapitalize="none"></textarea>
        <div id="replyCharCount-${index}">0/300</div>
        <button type="submit" style="border: 2px solid black; background-color: #2ecc71; border-radius: 5px; color: #fff; width: 70px;">Enviar</button>
    `;
    replyForm.onsubmit = (event) => addReply(event, index);
    document.getElementById('commentsContainer').appendChild(replyForm);

    document.getElementById(`replyText-${index}`).addEventListener('input', () => updateCharCount(`replyText-${index}`, `replyCharCount-${index}`));
}

// Función para añadir una respuesta
function addReply(event, commentIndex) {
    event.preventDefault();
    const email = document.getElementById(`replyEmail-${commentIndex}`).value.trim();
    const replyText = document.getElementById(`replyText-${commentIndex}`).value.trim();
    const date = new Date().toLocaleString();

    if (!validateEmail(email)) {
        alert("Por favor, ingresa un email válido.");
        return;
    }

    const reply = {
        email: email,
        text: replyText,
        date: date
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments[commentIndex].replies.push(reply);
    localStorage.setItem('comments', JSON.stringify(comments));

    renderComments();
}

// Función para renderizar las respuestas
function renderReplies(replies, commentElement) {
    replies.forEach(reply => {
        const replyElement = document.createElement('div');
        replyElement.style.marginLeft = '2rem';
        replyElement.innerHTML = `<p><strong>${reply.email}</strong> respondió: ${reply.text} <br> <small>${reply.date}</small></p>`;
        commentElement.appendChild(replyElement);
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
    document.getElementById('commentText').addEventListener('input', () => updateCharCount('commentText', 'charCount'));
    document.getElementById('adminPassword').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            loginAsAdmin();
        }
    });
});

// Función para actualizar el contador de caracteres
function updateCharCount(textAreaId, charCountId) {
    const commentText = document.getElementById(textAreaId).value;
    const charCount = document.getElementById(charCountId);
    charCount.textContent = `${commentText.length}/300`;
}

// Función para iniciar sesión como administrador
function loginAsAdmin() {
    const password = document.getElementById('adminPassword').value;
    if (password === 'admin123') { // Cambia esta contraseña a la que prefieras
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
