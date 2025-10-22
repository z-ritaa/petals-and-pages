const addButton = document.getElementById('add-button');
const noteInput = document.getElementById('note-input');
const notesContainer = document.getElementById('notes');
const colorPicker = document.getElementById('color-picker');

const typingSound = document.getElementById('typing-sound');
const submitSound = document.getElementById('submit-sound');

// play typing sound while typing
noteInput.addEventListener('input', () => {
  typingSound.currentTime = 0;
  typingSound.play();
});

// add new note
addButton.addEventListener('click', () => {
  const text = noteInput.value.trim();
  if(text === "") return;

  const note = document.createElement('div');
  note.className = 'note';
  note.style.backgroundColor = colorPicker.value;
  note.style.setProperty('--rand', Math.random()); // for rotation variation
  note.innerHTML = `<p>${text}</p>`;

  notesContainer.prepend(note);

  noteInput.value = '';
  submitSound.currentTime = 0;
  submitSound.play();
});
