// Import necessary elements
import { titleInput, authorInput, booksList } from './elements.js';
import Book from './Book.js';

// Collection class to manage the book list
export class Collection {
  // Constructor initializes book array and id counter
  constructor() {
    this.books = [];
    this.id = 0;
  }

  // Load books from local storage and create Collection elements for each
  loadBooks = () => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks && storedBooks.length > 0) {
      storedBooks.shift();
      this.books = storedBooks;
      this.books.forEach((book) => Collection.createBook(book));
    }
  };

  // Create a new book Collection element and add it to the book list
  static createBook = (book) => {
    const newBook = document.createElement('tr');
    newBook.innerHTML = `
      <td>"${book.title}" by ${book.author}
      <button type="button" class="remove-btn" data-id="${book.id}">Remove</button>
      </td>
    `;
    booksList.appendChild(newBook);
  };

  // Clear input fields
  static clearFields = () => {
    titleInput.value = '';
    authorInput.value = '';
  };

  // Remove a book from the books array and update the Collection
  removeBook = (id) => {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      booksList.innerHTML = '';
      this.books.forEach((book) => Collection.createBook(book));
      this.saveBooks();
    }
  };

  // Add a new book to the books array and update Collection
  addBook = (title, author) => {
    if (title === '' || author === '') {
      alert('Please enter a title and author');
      return;
    }

    const book = new Book(title, author, (this.id += 1));
    this.books.push(book);
    Collection.createBook(book);
    Collection.clearFields();
    this.saveBooks();
  };

  // Save the current books to the local storage
  saveBooks = () => {
    localStorage.setItem('books', JSON.stringify(this.books));
  };
}