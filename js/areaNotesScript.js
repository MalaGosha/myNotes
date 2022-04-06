const addBtn = document.querySelector('.add');
const deleteBtns = document.getElementsByClassName('delete-note');
const deleteAllBtn = document.querySelector('.delete-all');


const openPanel = () => {
  notePanel.style.display = 'flex';
}


const checkColor = note => {
  switch(selectedValue) {
    case 'Zakupy':
      note.style.backgroundColor = 'rgb(72,255,0)';
      break;
    case 'Praca':
      note.style.backgroundColor = 'rgb(255,243,0)';
      break;
    case 'Inne':
      note.style.backgroundColor = 'rgb(0,170,255)';
      break;
  }
}


const deleteNote = id => {
  const noteToDelete = document.getElementById(id);
  noteArea.removeChild(noteToDelete);
}


const deleteAllNotes = () => {
  noteArea.textContent = '';
}


addBtn.addEventListener('click', openPanel);
deleteAllBtn.addEventListener('click', deleteAllNotes);


