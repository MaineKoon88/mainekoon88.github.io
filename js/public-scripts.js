document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('public-post-list');

    // Cargar las publicaciones desde el localStorage
    loadPosts();

    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        console.log('Posts cargados desde localStorage:', posts);  // Agregar un mensaje de depuración
        posts.forEach(addPostToDOM);
    }

    function addPostToDOM(post) {
        const postItem = document.createElement('li');

        const postLink = document.createElement('a');
        postLink.href = "#";
        postLink.classList.add('card');

        const postImage = document.createElement('img');
        postImage.src = "https://i.imgur.com/oYiTqum.jpg"; // Imagen por defecto
        postImage.classList.add('card__image');

        const cardOverlay = document.createElement('div');
        cardOverlay.classList.add('card__overlay');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card__header');

        const cardArc = document.createElement('svg');
        cardArc.classList.add('card__arc');
        cardArc.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        const cardArcPath = document.createElement('path');
        cardArc.appendChild(cardArcPath);

        const cardThumb = document.createElement('img');
        cardThumb.src = "https://i.imgur.com/7D7I6dI.png"; // Thumbnail por defecto
        cardThumb.classList.add('card__thumb');

        const cardHeaderText = document.createElement('div');
        cardHeaderText.classList.add('card__header-text');

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card__title');
        cardTitle.textContent = post.title;

        const cardStatus = document.createElement('span');
        cardStatus.classList.add('card__status');
        cardStatus.classList.add('timestamp');
        cardStatus.textContent = `Publicado hace: ${timeSince(new Date(post.timestamp))}`;

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card__description');
        cardDescription.textContent = post.content;

        cardHeaderText.appendChild(cardTitle);
        cardHeaderText.appendChild(cardStatus);

        cardHeader.appendChild(cardArc);
        cardHeader.appendChild(cardThumb);
        cardHeader.appendChild(cardHeaderText);

        cardOverlay.appendChild(cardHeader);
        cardOverlay.appendChild(cardDescription);

        postLink.appendChild(postImage);
        postLink.appendChild(cardOverlay);

        postItem.appendChild(postLink);
        postList.appendChild(postItem);

        postItem.setAttribute('data-timestamp', post.timestamp);
    }

    function timeSince(date) {
        const seconds = Math.floor((new Date() - date) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval >= 1) {
            return interval + ` año${interval > 1 ? 's' : ''}`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            return interval + ` mes${interval > 1 ? 'es' : ''}`;
        }
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            return interval + ` día${interval > 1 ? 's' : ''}`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return interval + ` hora${interval > 1 ? 's' : ''}`;
        }
        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return interval + ` minuto${interval > 1 ? 's' : ''}`;
        }
        return Math.floor(seconds) + ` segundo${seconds > 1 ? 's' : ''}`;
    }
});
