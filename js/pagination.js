// Select the cards container
const projcardContainer = document.querySelector('.cards-wrapper');

// Select all cards
const cards = document.querySelectorAll('.blogcard');

// Calculate total number of pages
const totalPages = Math.ceil(cards.length / 6);

// Set initial page
let currentPage = 1;

// Function to show cards for a specific page
function showPage(page) {
    const startIndex = (page - 1) * 6;
    const endIndex = startIndex + 6;
    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to update pagination buttons
function updatePaginationButtons() {
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    if (currentPage === 1) {
        prevPageButton.disabled = true;
    } else {
        prevPageButton.disabled = false;
    }

    if (currentPage === totalPages) {
        nextPageButton.disabled = true;
    } else {
        nextPageButton.disabled = false;
    }
}

// Function to update the page indicator
function updatePageIndicator() {
    const pageIndicator = document.getElementById('pageIndicator');
    pageIndicator.textContent = `${currentPage} / ${totalPages}`;
}

// Show initial page
showPage(currentPage);

// Update pagination buttons
updatePaginationButtons();
updatePageIndicator();

// Event listener for previous page button
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        updatePaginationButtons();
        updatePageIndicator();
    }
});

// Event listener for next page button
document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
        updatePaginationButtons();
        updatePageIndicator();
    }
});
