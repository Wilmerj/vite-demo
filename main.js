import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import image from './vite-logo.png';
import { user } from './data.json';
import suma from './suma.ts';
import buttonStyles from './button.module.css';
import './style.css'

const modules = import.meta.glob('./modules/*.js');

for (const path in modules) {
  modules[path]().then(module => {
    module.load();
  });
}

console.info(suma(1, 3));

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <img id="img" />
    <h1>Hello Vite!</h1>
    <pre>${JSON.stringify(user)}</pre>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

document.getElementById('counter').className = buttonStyles.btn;
const imagen = document.getElementById('img');
imagen.src = image;
imagen.className = 'logo vite';

setupCounter(document.querySelector('#counter'))
