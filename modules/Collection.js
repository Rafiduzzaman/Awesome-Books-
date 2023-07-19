const form = document.getElementById('form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const booksList = document.getElementById('booksList');

const booksContainer = document.querySelector('.books-container');
const formContainer = document.querySelector('.form-container');
const contact = document.querySelector('.contact');
const btnList = document.getElementById('btn-list');
const btnAdd = document.getElementById('btn-add');
const btnContact = document.getElementById('btn-contact');

let books = [];
let id = 0;

export class Collection {
  static addBook() {
    localStorage.setItem('books', JSON.stringify(books));
  }

  static loadBooks() {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
      books = storedBooks;
      books.forEach((book) => Collection.createBook(book));
    }
  }

  static createBook(book) {
    const addNewBook = document.createElement('tr');
    addNewBook.innerHTML = `
      <td>"${book.title}" by ${book.author}
      <button type="button" class="remove-btn" data-id="${book.id}">Remove</button>
      </td>
    `;
    booksList.appendChild(addNewBook);
  }

  static clearingFields() {
    titleInput.value = '';
    authorInput.value = '';
  }

  static removeBook(id) {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
      booksList.innerHTML = '';
      books.forEach((book) => Collection.createBook(book));
      Collection.addBook();
    }
  }
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;

  if (title === '' || author === '') {
    alert('Please Add title and author');
    return;
  }

  const book = {
    title,
    author,
    id: (id += 1),
  };
  books.push(book);
  Collection.createBook(book);
  Collection.clearingFields();
  Collection.addBook();
});

document.addEventListener('DOMContentLoaded', Collection.loadBooks);

booksList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-btn')) {
    const id = parseInt(event.target.getAttribute('data-id'), 10);
    Collection.removeBook(id);
  }
});

// Navigation Feature

btnList.addEventListener('click', () => {
  booksContainer.classList.add('display');
  formContainer.classList.remove('display');
  contact.classList.remove('display');
  btnList.style.color = 'blue';
  btnAdd.style.color = 'black';
  btnContact.style.color = 'black';
});

btnAdd.addEventListener('click', () => {
  booksContainer.classList.remove('display');
  formContainer.classList.add('display');
  contact.classList.remove('display');
  btnList.style.color = 'black';
  btnAdd.style.color = 'blue';
  btnContact.style.color = 'black';
});

btnContact.addEventListener('click', () => {
  booksContainer.classList.remove('display');
  formContainer.classList.remove('display');
  contact.classList.add('display');
  btnList.style.color = 'black';
  btnAdd.style.color = 'black';
  btnContact.style.color = 'blue';
});