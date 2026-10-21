import './styles/theme.css';
import './styles/glass.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/hogwarts.css';

import { getState, subscribe, closeModal } from './state/store.js';
import { renderNavbar } from './components/navbar.js';
import { renderHomeShowcase } from './components/homeShowcase.js';
import { renderHogwartsHub } from './components/hogwartsHub.js';
import { renderDetailModal } from './components/detailModal.js';

const appRoot = document.getElementById('app');

function renderApp() {
  const state = getState();

  let html = `
    <div id="nav-mount"></div>
    <main class="app-container" id="main-content"></main>
    <div id="modal-mount"></div>
    <footer class="app-container site-footer">
      <div>
        <strong>Game Codex</strong> &mdash; Apple Glass Companion Suite
      </div>
      <div>
        Designed for comprehensive in-game discovery
      </div>
    </footer>
  `;

  if (!appRoot.querySelector('#nav-mount')) {
    appRoot.innerHTML = html;
  }

  const navMount = document.getElementById('nav-mount');
  const mainContent = document.getElementById('main-content');
  const modalMount = document.getElementById('modal-mount');

  renderNavbar(navMount);

  if (state.view === 'showcase') {
    renderHomeShowcase(mainContent);
  } else if (state.view === 'hogwarts') {
    renderHogwartsHub(mainContent);
  }

  renderDetailModal(modalMount);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

subscribe(renderApp);

renderApp();
