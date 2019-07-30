
// the function that grabs the input keyCode and plays the corresponding audio clip
const playAudio = (e) => {
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio){
    return;
  };
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play()
};
// the event listener
window.addEventListener('keydown', playAudio);

// the function that removes the "playing" class from the classlist.
function removeGlow(e) {
  if (e.propertyName !== 'transform'){
    return
  };
  e.target.classList.remove('playing');
};
// attaching event listener to each key with class name "key" 
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeGlow));

// a function that records short sample to local storage


// a function that allows user to download recording

