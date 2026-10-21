import { getState, setState } from '../state/store.js';

export function renderNavbar(container) {
  const state = getState();

  container.innerHTML = `
    <header class="site-header">
      <nav class="navbar">
        <div class="brand" id="nav-brand-btn">
          <div class="brand-icon">⚔️</div>
          <div class="brand-name">GAME CODEX</div>
        </div>

        <div class="nav-actions">
          <div class="glass-input-wrapper">
            <svg class="search-icon-svg" viewBox="0 0 24 24">
              <path d="M21 21l-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
            </svg>
            <input 
              type="text" 
              class="glass-input" 
              placeholder="Search guides, puzzles, spells..." 
              id="global-search-input"
              value="${state.searchQuery || ''}"
            />
          </div>

          <button class="glass-button ${state.view === 'showcase' ? 'active' : ''}" id="nav-catalog-btn">
            Catalogue
          </button>

          <button class="glass-button glass-button-primary" id="nav-hogwarts-direct-btn">
            Hogwarts Guide
          </button>
        </div>
      </nav>
    </header>
  `;

  const brandBtn = container.querySelector('#nav-brand-btn');
  const catalogBtn = container.querySelector('#nav-catalog-btn');
  const hogwartsBtn = container.querySelector('#nav-hogwarts-direct-btn');
  const searchInput = container.querySelector('#global-search-input');

  brandBtn.addEventListener('click', () => {
    setState({ view: 'showcase', searchQuery: '' });
  });

  catalogBtn.addEventListener('click', () => {
    setState({ view: 'showcase' });
  });

  hogwartsBtn.addEventListener('click', () => {
    setState({ view: 'hogwarts', activeTab: 'overview' });
  });

  searchInput.addEventListener('input', (e) => {
    setState({ searchQuery: e.target.value });
  });
}
