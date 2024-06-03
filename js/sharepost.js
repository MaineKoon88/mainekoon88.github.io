
    function shareOnFacebook() {
        // Reemplaza la URL y el texto del post según sea necesario
        var url = encodeURIComponent(window.location.href);
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'Compartir en Facebook', 'width=600,height=400');
    }

    function shareOnTwitter() {
        // Reemplaza la URL y el texto del post según sea necesario
        var url = encodeURIComponent(window.location.href);
        var text = encodeURIComponent('¡Echa un vistazo a este post interesante!');
        window.open('https://twitter.com/intent/tweet?url=' + url + '&text=' + text, 'Compartir en Twitter', 'width=600,height=400');
    }

    function shareOnLinkedIn() {
        // Reemplaza la URL y el texto del post según sea necesario
        var url = encodeURIComponent(window.location.href);
        window.open('https://www.linkedin.com/shareArticle?url=' + url, 'Compartir en LinkedIn', 'width=600,height=400');
    }

