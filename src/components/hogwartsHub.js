import { puzzleGuides } from '../data/hogwartsPuzzles.js';
import { getState, setState, openModal } from '../state/store.js';
import { renderArithmancySolver } from './arithmancy/index.js';
import { renderChecklistView } from './checklistView.js';
import { renderSpellCodex } from './spellCodex.js';

export function renderHogwartsHub(container) {
  const state = getState();
  const activeTab = state.activeTab || 'overview';

  container.innerHTML = `
    <div class="hub-header">
      <div class="hub-banner-bg" style="background-image: url('/assets/hogwarts.jpg');"></div>

      <div class="hub-top-nav">
        <button class="hub-back-btn" id="hub-back-btn">
          <span>‹</span> Back to Library Catalogue
        </button>

        <div style="display: flex; gap: 8px;">
          <span class="glass-pill glass-pill-active">Active Guide</span>
          <span class="glass-pill glass-pill-gold">★ 9.4 Rating</span>
        </div>
      </div>

      <div class="hub-title-section">
        <h1 class="hub-title">Hogwarts Legacy Companion</h1>
        <p style="color: var(--text-secondary); font-size: 1.02rem; line-height: 1.6; margin-bottom: 20px;">
          Complete tactical breakdown of 1800s Hogwarts. Solve beast Arithmancy doors, execute Merlin Trials, sneak upon Eye Chests, and locate night-time Demiguise moons.
        </p>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <div class="glass-pill" style="background: rgba(255, 255, 255, 0.08);">
            <span>🏰</span> Hogwarts Castle
          </div>
          <div class="glass-pill" style="background: rgba(255, 255, 255, 0.08);">
            <span>🍺</span> Hogsmeade Village
          </div>
          <div class="glass-pill" style="background: rgba(255, 255, 255, 0.08);">
            <span>🌲</span> The Highlands
          </div>
        </div>
      </div>
    </div>

    <div class="hub-tabs-dock-wrapper">
      <div class="hub-tabs-dock">
        <button class="hub-tab-btn ${activeTab === 'overview' ? 'active' : ''}" data-tab="overview">
          <span>Overview</span>
        </button>
        <button class="hub-tab-btn ${activeTab === 'puzzles' ? 'active' : ''}" data-tab="puzzles">
          <span>Puzzles & Mysteries</span>
        </button>
        <button class="hub-tab-btn ${activeTab === 'arithmancy' ? 'active' : ''}" data-tab="arithmancy">
          <span>Arithmancy Calculator</span>
        </button>
        <button class="hub-tab-btn ${activeTab === 'collectibles' ? 'active' : ''}" data-tab="collectibles">
          <span>Collectibles Tracker</span>
        </button>
        <button class="hub-tab-btn ${activeTab === 'spells' ? 'active' : ''}" data-tab="spells">
          <span>Spell Codex</span>
        </button>
      </div>
    </div>

    <div id="hub-tab-content"></div>
  `;

  const contentContainer = container.querySelector('#hub-tab-content');

  if (activeTab === 'overview') {
    renderOverviewTab(contentContainer);
  } else if (activeTab === 'puzzles') {
    renderPuzzlesTab(contentContainer);
  } else if (activeTab === 'arithmancy') {
    renderArithmancySolver(contentContainer);
  } else if (activeTab === 'collectibles') {
    renderChecklistView(contentContainer);
  } else if (activeTab === 'spells') {
    renderSpellCodex(contentContainer);
  }

  container.querySelector('#hub-back-btn')?.addEventListener('click', () => {
    setState({ view: 'showcase' });
  });

  container.querySelectorAll('.hub-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setState({ activeTab: btn.dataset.tab });
    });
  });
}

function renderOverviewTab(container) {
  container.innerHTML = `
    <div style="margin-bottom: 36px;">
      <h3 style="font-family: var(--font-serif); font-size: 1.45rem; color: #fff; margin-bottom: 16px;">
        Essential Field Mechanics
      </h3>

      <div class="grid-cards" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
        <div class="glass-card" style="padding: 24px;">
          <div style="font-size: 2rem; margin-bottom: 8px;">🔢</div>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: 6px;">
            Door Arithmancy
          </h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
            Door frames are marked with 10 beast glyphs representing numbers 0 to 9. The center number in each triangle is the exact sum of its 3 points.
          </p>
          <button class="glass-button glass-button-primary" id="goto-arithmancy-tab" style="width: 100%;">
            Open Interactive Calculator
          </button>
        </div>

        <div class="glass-card" style="padding: 24px;">
          <div style="font-size: 2rem; margin-bottom: 8px;">🌙</div>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: 6px;">
            Demiguise Moon Hunting
          </h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
            Demiguise statues glow blue only at night. Collecting them upgrades Alohomora from Level 1 to 2 (9 moons) and Level 3 (13 moons).
          </p>
          <button class="glass-button" id="goto-demiguise-tab" style="width: 100%;">
            View Demiguise Checklist
          </button>
        </div>

        <div class="glass-card" style="padding: 24px;">
          <div style="font-size: 2rem; margin-bottom: 8px;">👁️</div>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: 6px;">
            Disillusionment Eye Chests
          </h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
            Eye chests slam shut if they see you approaching. Cast Disillusionment while out of line of sight to sneak up and collect 500 Galleons each.
          </p>
          <button class="glass-button" id="goto-chests-tab" style="width: 100%;">
            View Eye Chest Locations
          </button>
        </div>
      </div>
    </div>

    <div>
      <h3 style="font-family: var(--font-serif); font-size: 1.45rem; color: #fff; margin-bottom: 16px;">
        Merlin Trial Archetypes (95 Total)
      </h3>

      <div class="glass-panel" style="padding: 28px;">
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 24px;">
          Activated with Mallowsweet leaves to permanently expand gear storage slots. Each trial belongs to one of nine environmental puzzle archetypes.
        </p>

        <div class="grid-cards" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
          ${puzzleGuides.find(p => p.id === 'merlin-trials-overview').archetypes.map(arc => `
            <div style="padding: 16px; border-radius: var(--radius-md); background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08);">
              <h5 style="color: var(--gold-light); font-size: 1rem; font-weight: 700; margin-bottom: 6px;">
                ${arc.name}
              </h5>
              <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 8px;">
                ${arc.spells.map(s => `
                  <span class="glass-pill" style="font-size: 0.68rem; padding: 1px 6px;">${s}</span>
                `).join('')}
              </div>
              <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">
                ${arc.method}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  container.querySelector('#goto-arithmancy-tab')?.addEventListener('click', () => {
    setState({ activeTab: 'arithmancy' });
  });

  container.querySelector('#goto-demiguise-tab')?.addEventListener('click', () => {
    setState({ activeTab: 'collectibles', collectibleCategoryFilter: 'Demiguise' });
  });

  container.querySelector('#goto-chests-tab')?.addEventListener('click', () => {
    setState({ activeTab: 'collectibles', collectibleCategoryFilter: 'Eye Chest' });
  });
}

function renderPuzzlesTab(container) {
  container.innerHTML = `
    <div style="margin-bottom: 24px;">
      <div class="glass-pill glass-pill-gold">Environmental Enigmas</div>
      <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff; margin: 8px 0 4px 0;">
        Puzzles & Secret Chambers
      </h2>
      <p style="color: var(--text-secondary); font-size: 0.9rem;">
        Complete walk-throughs for castle mechanisms, hidden viaduct waterways, and treasure vault chessboards.
      </p>
    </div>

    <div class="grid-cards" style="grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));">
      ${puzzleGuides.filter(p => p.id !== 'merlin-trials-overview').map(guide => `
        <div class="glass-card" style="padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <span class="glass-pill glass-pill-gold">${guide.category}</span>
              <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">Diff: ${guide.difficulty}</span>
            </div>

            <h3 style="font-family: var(--font-serif); font-size: 1.35rem; font-weight: 700; color: #fff; margin-bottom: 8px;">
              ${guide.title}
            </h3>

            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 14px;">
              ${guide.summary}
            </p>

            <div style="margin-bottom: 14px; padding: 10px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: var(--radius-md);">
              <div style="font-size: 0.72rem; color: var(--gold-light); font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">
                Required Spells
              </div>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${guide.spells.map(s => `
                  <span class="glass-pill" style="font-size: 0.72rem; padding: 2px 8px;">${s}</span>
                `).join('')}
              </div>
            </div>

            <div style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 16px;">
              <strong>Core Mechanism:</strong> ${guide.solution}
            </div>
          </div>

          <button class="glass-button open-puzzle-guide-btn" data-guide-id="${guide.id}" style="width: 100%;">
            View Step-by-Step Walkthrough ➔
          </button>
        </div>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.open-puzzle-guide-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const guide = puzzleGuides.find(g => g.id === btn.dataset.guideId);
      if (guide) {
        openModal({
          title: guide.title,
          category: guide.category,
          steps: guide.steps,
          solution: guide.solution,
          reward: guide.reward,
          spells: guide.spells
        });
      }
    });
  });
}
