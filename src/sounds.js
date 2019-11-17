'use strict';

window.onload = () => {
  document.getElementById('record-button').addEventListener('click', (evt) => {
    console.log('I\'m recording sound!');
    console.log(evt);
  });
  document.getElementById('play-button').addEventListener('click', (evt) => {
    const fart_noise = new Audio('fart_sound.mp3');
    fart_noise.play();
    console.log('playing a sound!');
    console.log(evt);
  });
}