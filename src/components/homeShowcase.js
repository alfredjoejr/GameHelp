import { gamesCatalog } from '../data/games.js';
import { getState, setState, getCheckedCount } from '../state/store.js';
import { collectiblesList } from '../data/hogwartsCollectibles.js';

export function renderHomeShowcase(container) {
  const state = getState();
  const search = state.searchQuery.trim().toLowerCase();
  const category = state.catalogCategory;

  const filteredGames = gamesCatalog.filter(game => {
    const matchesSearch = !search || 
      game.title.toLowerCase().includes(search) || 
      game.genre.toLowerCase().includes(search) ||
      game.description.toLowerCase().includes(search);
    
    const matchesCategory = category === 'all' || 
      (category === 'rpg' && game.genre.toLowerCase().includes('rpg')) ||
      (category === 'open-world' && game.genre.toLowerCase().includes('open world')) ||
      (category === 'action' && game.genre.toLowerCase().includes('action'));

    return matchesSearch && matchesCategory;
  });

  const hogwartsStats = getCheckedCount(collectiblesList);

  container.innerHTML = `
    <section class="section-hero">
      <div class="hero-glass-box">
        <div class="hero-glow-orb orb-1"></div>
        <div class="hero-glow-orb orb-2"></div>
        
        <div class="hero-content">
          <div class="glass-pill glass-pill-gold">
            <span>✨</span> Next-Gen Game Support & Codex
          </div>

          <h1 class="hero-title">
            Precision Guides for <span>Epic Worlds</span>
          </h1>

          <p class="hero-desc">
            An Apple-inspired companion designed for deep completionists. Solve complex environmental puzzles, decipher cryptic symbols, and track elusive collectibles seamlessly.
          </p>

          <div style="display: flex; gap: 14px; flex-wrap: wrap;">
            <button class="glass-button glass-button-primary" id="hero-hogwarts-btn">
              Explore Hogwarts Legacy Codex ➔
            </button>
            <button class="glass-button" id="hero-puzzles-btn">
              Open Arithmancy Calculator
            </button>
          </div>

          <div class="hero-metrics">
            <div class="metric-item">
              <span class="metric-value">100%</span>
              <span class="metric-label">Local Save Tracking</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">150+</span>
              <span class="metric-label">Puzzle Solutions</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">0s</span>
              <span class="metric-label">Zero Latency Blur</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">33</span>
              <span class="metric-label">Demiguise Statues</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="filter-bar">
      <div>
        <h2 style="font-family: var(--font-serif); font-size: 1.6rem; color: #fff; margin-bottom: 4px;">
          Game Library Catalogue
        </h2>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">
          Select a title to enter its dedicated puzzle codex and secret checklists.
        </p>
      </div>

      <div class="filter-pills">
        <button class="filter-chip ${category === 'all' ? 'active' : ''}" data-cat="all">All Titles</button>
        <button class="filter-chip ${category === 'rpg' ? 'active' : ''}" data-cat="rpg">RPG</button>
        <button class="filter-chip ${category === 'open-world' ? 'active' : ''}" data-cat="open-world">Open World</button>
        <button class="filter-chip ${category === 'action' ? 'active' : ''}" data-cat="action">Action</button>
      </div>
    </div>

    <div class="grid-cards">
      ${filteredGames.map(game => {
        const isHogwarts = game.id === 'hogwarts-legacy';
        return `
          <div class="glass-card" data-game-id="${game.id}">
            <div class="card-media">
              <img src="${game.banner}" alt="${game.title}" loading="lazy"/>
              <div class="card-media-overlay"></div>
              
              <div class="card-badge-pos">
                <span class="glass-pill ${isHogwarts ? 'glass-pill-active' : 'glass-pill-queue'}">
                  ${game.badge}
                </span>
              </div>

              <div class="card-rating-pos">
                <span>★</span> ${game.rating}
              </div>
            </div>

            <div class="card-body">
              <div class="card-header-group">
                <span class="card-subtitle">${game.genre}</span>
                <h3 class="card-title">${game.title}</h3>
              </div>

              <p class="card-description">${game.description}</p>

              <div class="card-specs">
                ${game.highlights.map(h => `
                  <div class="spec-cell">
                    <span class="spec-title">${h.label}</span>
                    <span class="spec-val">${h.value}</span>
                  </div>
                `).join('')}
              </div>

              ${isHogwarts ? `
                <div style="background: rgba(217, 160, 68, 0.08); border: 1px solid rgba(217, 160, 68, 0.25); border-radius: var(--radius-md); padding: 12px 14px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 6px;">
                    <span style="color: var(--gold-light); font-weight: 600;">Your Collectibles Progress</span>
                    <span style="font-weight: 700; color: #fff;">${hogwartsStats.checked}/${hogwartsStats.total} (${hogwartsStats.percent}%)</span>
                  </div>
                  <div class="checklist-progress-bar" style="margin: 0;">
                    <div class="checklist-progress-fill" style="width: ${hogwartsStats.percent}%;"></div>
                  </div>
                </div>
              ` : ''}

              <div class="card-footer">
                <span style="font-size: 0.8rem; color: var(--text-muted);">${game.developer}</span>
                
                ${isHogwarts ? `
                  <button class="glass-button glass-button-primary game-launch-btn" data-id="${game.id}">
                    Open Guide ➔
                  </button>
                ` : `
                  <button class="glass-button" style="opacity: 0.6; cursor: not-allowed;" title="In Development">
                    Coming Soon
                  </button>
                `}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.querySelector('#hero-hogwarts-btn')?.addEventListener('click', () => {
    setState({ view: 'hogwarts', activeTab: 'overview' });
  });

  container.querySelector('#hero-puzzles-btn')?.addEventListener('click', () => {
    setState({ view: 'hogwarts', activeTab: 'arithmancy' });
  });

  container.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      setState({ catalogCategory: btn.dataset.cat });
    });
  });

  container.querySelectorAll('.game-launch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setState({ view: 'hogwarts', activeTab: 'overview' });
    });
  });
}
