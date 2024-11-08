const addBookBtn = document.getElementById('add-book-btn');
const bookFormContainer = document.getElementById('book-form-container');

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    const bookCard = document.createElement('div');
    
}

addBookBtn.addEventListener('click', () => {
    bookFormContainer.style.display = 'block';
})

document.addEventListener('click', (e) => {
    // If we click outside of bookFormContainer
    if (!bookFormContainer.contains(e.target) && e.target !== addBookBtn) {
        bookFormContainer.style.display = 'none';
    }
});