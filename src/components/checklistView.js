import { collectiblesList } from '../data/hogwartsCollectibles.js';
import { getState, setState, toggleCheckItem, isItemChecked, getCheckedCount } from '../state/store.js';

export function renderChecklistView(container) {
  const state = getState();
  const search = state.searchQuery.trim().toLowerCase();
  const catFilter = state.collectibleCategoryFilter;
  const regFilter = state.collectibleRegionFilter;

  const filteredItems = collectiblesList.filter(item => {
    const matchesSearch = !search || 
      item.title.toLowerCase().includes(search) || 
      item.location.toLowerCase().includes(search) ||
      item.tip.toLowerCase().includes(search);

    const matchesCat = catFilter === 'all' || item.category === catFilter;
    const matchesReg = regFilter === 'all' || item.region === regFilter;

    return matchesSearch && matchesCat && matchesReg;
  });

  const overallStats = getCheckedCount(collectiblesList);
  const currentViewStats = getCheckedCount(filteredItems);

  container.innerHTML = `
    <div style="margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px; margin-bottom: 12px;">
        <div>
          <div class="glass-pill glass-pill-active">Interactive Checklist</div>
          <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff; margin: 8px 0 4px 0;">
            Collectibles & Secrets Vault
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">
            Mark found Demiguise Moons, Daedalian cabinets, Eye Chests, and Ancient Magic hotspots. Saves to your browser automatically.
          </p>
        </div>

        <div style="text-align: right;">
          <div style="font-size: 0.85rem; color: var(--gold-light); font-weight: 700;">
            Global Progress: ${overallStats.checked} / ${overallStats.total} (${overallStats.percent}%)
          </div>
        </div>
      </div>

      <div class="checklist-progress-bar">
        <div class="checklist-progress-fill" style="width: ${overallStats.percent}%;"></div>
      </div>

      <div class="filter-bar" style="margin-bottom: 16px;">
        <div class="filter-pills">
          <button class="filter-chip ${catFilter === 'all' ? 'active' : ''}" data-cat="all">All Types</button>
          <button class="filter-chip ${catFilter === 'Demiguise' ? 'active' : ''}" data-cat="Demiguise">Demiguise (Night Only)</button>
          <button class="filter-chip ${catFilter === 'Daedalian Key' ? 'active' : ''}" data-cat="Daedalian Key">Daedalian Keys</button>
          <button class="filter-chip ${catFilter === 'Eye Chest' ? 'active' : ''}" data-cat="Eye Chest">Eye Chests (500g)</button>
          <button class="filter-chip ${catFilter === 'Ancient Magic' ? 'active' : ''}" data-cat="Ancient Magic">Ancient Magic</button>
        </div>

        <div class="filter-pills">
          <button class="filter-chip ${regFilter === 'all' ? 'active' : ''}" data-reg="all">All Regions</button>
          <button class="filter-chip ${regFilter === 'Hogwarts Castle' ? 'active' : ''}" data-reg="Hogwarts Castle">Castle</button>
          <button class="filter-chip ${regFilter === 'Hogsmeade' ? 'active' : ''}" data-reg="Hogsmeade">Hogsmeade</button>
          <button class="filter-chip ${regFilter === 'The Highlands' ? 'active' : ''}" data-reg="The Highlands">Highlands</button>
        </div>
      </div>
    </div>

    <div>
      ${filteredItems.length === 0 ? `
        <div style="text-align: center; padding: 48px; border-radius: var(--radius-lg); background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.1);">
          <p style="color: var(--text-secondary); font-size: 1rem;">No collectibles match your current filter selection.</p>
        </div>
      ` : filteredItems.map(item => {
        const checked = isItemChecked(item.id);
        return `
          <div class="checklist-item ${checked ? 'checked' : ''}" data-item-id="${item.id}">
            <button class="check-box-btn" data-check-id="${item.id}" aria-label="Toggle completed">
              ${checked ? '✓' : ''}
            </button>

            <div style="flex: 1;">
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 4px;">
                <span class="checklist-title" style="font-weight: 700; font-size: 1.05rem; color: #fff;">
                  ${item.title}
                </span>

                <span class="glass-pill" style="font-size: 0.7rem; padding: 2px 8px;">
                  ${item.region}
                </span>

                ${item.nightOnly ? `
                  <span class="glass-pill glass-pill-gold" style="font-size: 0.7rem; padding: 2px 8px;">
                    🌙 Night Only
                  </span>
                ` : ''}

                ${item.alohomoraLevel > 0 ? `
                  <span class="glass-pill" style="font-size: 0.7rem; padding: 2px 8px; color: var(--gold-light);">
                    🔒 Alohomora Level ${item.alohomoraLevel}
                  </span>
                ` : ''}
              </div>

              <div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 6px;">
                📍 <strong>Location:</strong> ${item.location}
              </div>

              <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.45;">
                💡 <strong>Strategy:</strong> ${item.tip}
              </div>
            </div>

            <div style="text-align: right; flex-shrink: 0;">
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--gold-light); background: rgba(217, 160, 68, 0.1); padding: 4px 8px; border-radius: var(--radius-sm); border: 1px solid rgba(217, 160, 68, 0.2);">
                ${item.reward}
              </span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.querySelectorAll('.filter-chip[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      setState({ collectibleCategoryFilter: btn.dataset.cat });
    });
  });

  container.querySelectorAll('.filter-chip[data-reg]').forEach(btn => {
    btn.addEventListener('click', () => {
      setState({ collectibleRegionFilter: btn.dataset.reg });
    });
  });

  container.querySelectorAll('[data-check-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.checkId;
      toggleCheckItem(id);
    });
  });
}
