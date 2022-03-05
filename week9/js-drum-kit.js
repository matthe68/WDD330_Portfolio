function playMusic(itemToPlay) {
  let audio = document.querySelector('audio'+itemToPlay);
  if (audio.paused) {
    audio.play();
  } else {
    document.querySelector('audio'+itemToPlay).currentTime = 0;
  }
  document.querySelector('.key'+itemToPlay).classList.add('playing');
  document.querySelector('audio'+itemToPlay).play();
  delay(100).then(() => document.querySelector('.key'+itemToPlay).classList.remove('playing'));
}
document.addEventListener('keydown', function(e) {
  if (e.key == "a" || e.key == "A") {
    playMusic('[data-key="65"]');
  } else if (e.key == "s" || e.key == "S") {
    playMusic('[data-key="83"]');
  } else if (e.key == "d" || e.key == "D") {
    playMusic('[data-key="68"]');
  } else if (e.key == "f" || e.key == "F") {
    playMusic('[data-key="70"]');
  } else if (e.key == "g" || e.key == "G") {
    playMusic('[data-key="71"]');
  } else if (e.key == "h" || e.key == "H") {
    playMusic('[data-key="72"]');
  } else if (e.key == "j" || e.key == "J") {
    playMusic('[data-key="74"]');
  } else if (e.key == "k" || e.key == "K") {
    playMusic('[data-key="75"]');
  } else if (e.key == "l" || e.key == "L") {
    playMusic('[data-key="76"]');
  } 
});
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
/*
function clickedAudio(itemToPlay) {
  document.querySelector('.key'+itemToPlay).classList.add('playing');
  playMusic(itemToPlay);
  delay(100).then(() => document.querySelector('.key'+itemToPlay).classList.remove('playing'));
}
*/

document.querySelector('div[data-key="65"]').addEventListener('click', ()=> playMusic('[data-key="65"]'));
document.querySelector('div[data-key="83"]').addEventListener('click', ()=> playMusic('[data-key="83"]'));
document.querySelector('div[data-key="68"]').addEventListener('click', ()=> playMusic('[data-key="68"]'));
document.querySelector('div[data-key="70"]').addEventListener('click', ()=> playMusic('[data-key="70"]'));
document.querySelector('div[data-key="71"]').addEventListener('click', ()=> playMusic('[data-key="71"]'));
document.querySelector('div[data-key="72"]').addEventListener('click', ()=> playMusic('[data-key="72"]'));
document.querySelector('div[data-key="74"]').addEventListener('click', ()=> playMusic('[data-key="74"]'));
document.querySelector('div[data-key="75"]').addEventListener('click', ()=> playMusic('[data-key="75"]'));
document.querySelector('div[data-key="76"]').addEventListener('click', ()=> playMusic('[data-key="76"]'));