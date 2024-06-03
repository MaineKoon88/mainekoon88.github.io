document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const blogcards = document.querySelectorAll(".blogcard");
  
    searchInput.addEventListener("input", function() {
      const searchText = this.value.trim().toLowerCase();
  
      blogcards.forEach(function(blogcard) {
        const tags = blogcard.querySelectorAll(".tag");
  
        let hasMatch = false;
  
        tags.forEach(function(tag) {
          if (tag.textContent.trim().toLowerCase().includes(searchText)) {
            hasMatch = true;
          }
        });
  
        if (hasMatch) {
          blogcard.style.display = "block";
        } else {
          blogcard.style.display = "none";
        }
      });
    });
  });
  