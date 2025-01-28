const buttons = document.querySelectorAll('.drum');

function playSound(key) {
  let soundFile;
  switch (key) {
    case 'w':
      soundFile = 'sounds/crash.mp3';
      break;
    case 'a':
      soundFile = 'sounds/kick-bass.mp3';
      break;
    case 's':
      soundFile = 'sounds/snare.mp3';
      break;
    case 'd':
      soundFile = 'sounds/tom-1.mp3';
      break;
    case 'j':
      soundFile = 'sounds/tom-2.mp3';
      break;
    case 'k':
      soundFile = 'sounds/tom-3.mp3';
      break;
    case 'l':
      soundFile = 'sounds/tom-4.mp3';
      break;
    default:
      console.log(`No sound mapped for key: ${key}`);
      return;
  }

  const audio = new Audio(soundFile);
  audio.play();
}

buttons.forEach(button => {
  button.addEventListener('click', () => playSound(button.textContent));
});

document.addEventListener('keydown', event => playSound(event.key));
