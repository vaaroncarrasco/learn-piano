
const footer = document.getElementById('footer');
const keySelect = document.getElementById('key-select');
const keyContainer = document.getElementById('key-container');

const playChord = (chord) => {
  const chordElement = document.getElementById(chord.id);
  chordElement.currentTime = 0;
  chordElement.play();
}

Object.entries(chords).map(chord => {
  footer.insertAdjacentHTML('afterend', `
    <audio id="${chord[1].title}" src="${chord[1].src}"></audio>
  `);
});

Object.entries(keys).map(key => {
  keySelect.insertAdjacentHTML('beforeend', `
    <option value="${key[0]}">${key[0]}</option>
  `)
})

const renderButtons = ({ chords }) => {

  keyContainer.innerHTML = '';
  let htmlChords = '';

   chords.forEach(chord => {

    htmlChords += `
      <button class="btn" onclick="playChord(${chord.title})">
        <h1>${chord.title.replace('_','/')}</h1>
        <p>${chord.notes}</p>
      </button>
    `
  });

  keyContainer.insertAdjacentHTML('beforeend', htmlChords);

}

keySelect.addEventListener('change', (e) => {

  let selectedKey = e.target.value;

  Object.entries(keys).filter(key => {

    if (key[0] == selectedKey) {
      const keyChords = { chords: key[1] }
      renderButtons(keyChords)
    }

  })

})