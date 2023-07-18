const booksContainer = document.querySelector('.books-container');
const formContainer = document.querySelector('.form-container');
const contact = document.querySelector('.contact');
const btnList = document.getElementById('btn-list');
const btnAdd = document.getElementById('btn-add');
const btnContact = document.getElementById('btn-contact');

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
