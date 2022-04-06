const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');

const  noteArea = document.querySelector('.note-area');
const  notePanel = document.querySelector('.note-panel');
const  category = document.querySelector('#category');
const  textArea = document.querySelector('#text');
const  error = document.querySelector('.error');

let selectedValue;

let cardID = 0;


const closePanel = () => {
  notePanel.style.display = 'none';
  error.style.visibility = 'hidden';
  textArea.value = '';
  category.selectedIndex = 0;
}


const addNote = () => {

  if (textArea.value !== '' && category.options[category.selectedIndex].value !== '0') {
    createNote();
    error.style.visibility = 'hidden';
  } else {
    error.style.visibility = 'visible';
  }

}


const createNote = () => {
  const newNote = document.createElement('div');
  newNote.classList.add('note');
  newNote.setAttribute('id', cardID);

  newNote.innerHTML = `
  <div class="note-header">
      <h3 class="note-title">${selectedValue}</h3>
      <button class="delete-note" onclick="deleteNote(${cardID})">
        <i class="fas fa-times icon"></i>
      </button>
    </div>
    <div class="note-body">${textArea.value}</div>
  `

  noteArea.appendChild(newNote);
  cardID++;
  textArea.value = '';
  category.selectedIndex = 0;
  notePanel.style.display = 'none';
  checkColor(newNote);
}


const selectValue = () => {
  selectedValue = category.options[category.selectedIndex].text;
}


cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);




