// Import necessary elements and modules
import { Collection } from './modules/Collection.js';
import { navFeature } from './modules/navbar.js';
import { dateTime } from './modules/luxon..js';
import {
  titleInput,
  authorInput,
  form,
  booksList,
} from './modules/elements.js';

// Initialize a new Collection instance
const collection = new Collection();

// Event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get input values
  const title = titleInput.value;
  const author = authorInput.value;

  // Add the new book
  collection.addBook(title, author);
});

// Event listener for page load - bind Collection to maintain context
document.addEventListener(
  'DOMContentLoaded',
  collection.loadBooks.bind(collection),
);

// Event listener for book removal
booksList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-btn')) {
    const id = parseInt(event.target.getAttribute('data-id'), 10);
    collection.removeBook(id);
  }
});
navFeature();
dateTime();
