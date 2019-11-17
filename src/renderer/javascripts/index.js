import { ipcRenderer } from 'electron'
require('application.css')

ipcRenderer.on('loaded', (event, data) => {
  document.getElementById('title').innerHTML = data.appName + ' App'
  document.getElementById('details').innerHTML = 'built with Electron v' + data.electronVersion
  document.getElementById('versions').innerHTML = 'running on Node v' + data.nodeVersion + ' and Chromium v' + data.chromiumVersion
  document.getElementById('recordButton').addEventListener('click', (evt) => {
    console.log('I\'m recording sound!');
    console.log(evt);
  });
  document.getElementById('play1Button').addEventListener('click', (evt) => {
    // const fart_noise = new Audio('fart_sound.mp3');
    // fart_noise.play();
    console.log('playing a sound!');
    console.log(evt);
  });
});
