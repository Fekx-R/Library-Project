const addBookBtn = document.getElementById('add-book-btn');
const bookFormContainer = document.getElementById('book-form-container');
const bookGrid = document.getElementById('book-grid');
const overlay = document.querySelector('.overlay');

const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    addBookToLibrary(book, index) {
        // create element for book card
        const bookCard = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('button');
        const remove = document.createElement('button');
        
        // make the element get in to the book grid
        bookGrid.appendChild(bookCard);
    
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        bookCard.appendChild(remove);
    
        // adding class for template style to css
        bookCard.classList.add('book-card');
        title.setAttribute('class', 'title-data');
        author.setAttribute('class', 'author-data');
        pages.setAttribute('class', 'pages-data');
        read.setAttribute('class', 'read-data');
        remove.setAttribute('class', 'remove');
    
        title.textContent = `"${book.title}"`;
        author.textContent = `${book.author}`;
        pages.textContent = `${book.pages} pages`;
        
        if (book.isRead) {
            read.textContent = `Have Read`;
            read.style.background = `rgb(56, 0, 56)`
        } else {
            read.textContent = `Haven't Read`;
            read.style.background = `pink`;
        }
    
        read.addEventListener('click', () => {
            if (read.textContent === "Haven't Read") {
                read.textContent = `Have Read`;
                read.style.background = `rgb(56, 0, 56)`
            } else if(read.textContent === "Have Read"){
                read.textContent = `Haven't Read`;
                read.style.background = `pink`;
            }
        })
    
        remove.textContent = 'Remove'
        remove.addEventListener('click', () => {
            bookGrid.removeChild(bookCard);
            if (index > -1) {
                myLibrary.splice(index, 1); // remove the book from library
            }
        });
    
    }

    getBookFromInput() {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const isRead = document.getElementById('isRead').checked;
        return new Book(title, author, pages, isRead)
    }

    setBookToLibrary() {
        const newBook = this.getBookFromInput(); // with classes you have to remember "this" method to call it in the same class
        myLibrary.push(newBook);
        this.addBookToLibrary(newBook, myLibrary.length - 1); // with classes you have to remember "this" method to call it in the same class
    
        bookFormContainer.style.display = 'none';
        overlay.style.display = 'none';
    
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
        document.getElementById('isRead').checked = false;
    }
}

// default input when you restart the browser
const defaultBook = new Book('Dance Of The Dragon', 'George RR Martin', 236, true)
defaultBook.addBookToLibrary(defaultBook);
const defaultBook2 = new Book('The Journey Of Fikri wkwk', 'Fekx', '365', true)
defaultBook2.addBookToLibrary(defaultBook2)

// button event
bookFormContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    const book = new Book(); // you have to call the classes first the call the function in the classes
    book.setBookToLibrary();
})

addBookBtn.addEventListener('click', () => {
    bookFormContainer.style.display = 'block';
    overlay.style.display = 'block';
})

document.addEventListener('click', (e) => {
    // If we click outside of bookFormContainer
    if (!bookFormContainer.contains(e.target) && e.target !== addBookBtn) {
        bookFormContainer.style.display = 'none';
        overlay.style.display = 'none';
    }
    
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        bookFormContainer.style.display = 'none';
        overlay.style.display = 'none';
    }
})

// myLibrary.forEach((book, index) => addBookToLibrary(book, index));