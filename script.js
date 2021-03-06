const footer = document.getElementById('footer');
const keySelect = document.getElementById('key-select');
const keyContainer = document.getElementById('key-container');
const cssKeyNotes = document.querySelectorAll('div[data-note]');

// fn to play the chord audio
const playChord = (chord) => { // chord -> <audio></audio>
  chord.currentTime = 0;
  chord.play();
  const keys = chord.dataset.notes.split('-');
  toggleKeys(keys)
}

// fn to toggle active class in the CSS Piano keys
const toggleKeys = (keys) => { // keys['C','D','E']

  cssKeyNotes.forEach(keyNote => {
    keyNote.classList.remove('active');
  })

  keys.forEach((key) => {
    let selector = `div[data-note=${key}]`;
    let keyNote = document.querySelector(selector);
    keyNote.classList.add('active')
  })
}

// fn to render chord buttons from key
const renderButtons = ({ chords }) => {

  keyContainer.innerHTML = '';
  let htmlChords = '';

  chords.forEach(chord => {
    htmlChords += `
      <button class="btn fade-in" onclick="playChord(${chord.title})">
        <h1>${chord.title.replace('_','/')}</h1>
        <p>${chord.notes}</p>
      </button>
    `
  });

  keyContainer.insertAdjacentHTML('beforeend', htmlChords);
}

// Inserting audio tags in HTML // chords is from data.js
Object.entries(chords).map(chord => {
  footer.insertAdjacentHTML('afterend', `
    <audio id="${chord[1].title}" data-notes="${chord[1].notes}" src="${chord[1].src}"></audio>
  `);
});

// Inserting key options in HTML // keys is from data.js
Object.entries(keys).map(key => {
  keySelect.insertAdjacentHTML('beforeend', `
    <option value="${key[0]}">${key[0]}</option>
  `)
})

// Key selector event listener -> change rendered buttons
keySelect.addEventListener('change', (e) => {

  let selectedKey = e.target.value;

  Object.entries(keys).filter(key => {

    if (key[0] == selectedKey) {
      const keyChords = { chords: key[1] }
      renderButtons(keyChords)
    }

  })

})