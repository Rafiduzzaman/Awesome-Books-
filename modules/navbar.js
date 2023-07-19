import {
  btnList,
  btnAdd,
  btnContact,
  booksContainer,
  formContainer,
  contact,
} from './elements.js';

export const navFeature = () => {
  // Event listener for 'List' button
  // Displays the book list and changes button color
  btnList.addEventListener('click', () => {
    booksContainer.classList.add('display');
    formContainer.classList.remove('display');
    contact.classList.remove('display');
    btnList.style.color = 'blue';
    btnAdd.style.color = 'black';
    btnContact.style.color = 'black';
  });

  // Event listener for 'Add' button
  // Displays the add book form and changes button color
  btnAdd.addEventListener('click', () => {
    booksContainer.classList.remove('display');
    formContainer.classList.add('display');
    contact.classList.remove('display');
    btnList.style.color = 'black';
    btnAdd.style.color = 'blue';
    btnContact.style.color = 'black';
  });

  // Event listener for 'Contact' button
  // Displays the contact form and changes button color
  btnContact.addEventListener('click', () => {
    booksContainer.classList.remove('display');
    formContainer.classList.remove('display');
    contact.classList.add('display');
    btnList.style.color = 'black';
    btnAdd.style.color = 'black';
    btnContact.style.color = 'blue';
  });
};
