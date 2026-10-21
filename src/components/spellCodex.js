import { spellCategories, spellsList, combatSynergies } from '../data/hogwartsSpells.js';
import { getState, setState } from '../state/store.js';

export function renderSpellCodex(container) {
  const state = getState();
  const search = state.searchQuery.trim().toLowerCase();
  const activeCategory = state.spellCategoryFilter;

  const filteredSpells = spellsList.filter(spell => {
    const matchesSearch = !search ||
      spell.name.toLowerCase().includes(search) ||
      spell.description.toLowerCase().includes(search) ||
      spell.synergy.toLowerCase().includes(search);

    const matchesCat = activeCategory === 'all' || spell.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  container.innerHTML = `
    <div style="margin-bottom: 24px;">
      <div class="glass-pill glass-pill-gold">Combat & Magic Matrix</div>
      <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff; margin: 8px 0 4px 0;">
        Spell Codex & Combat Synergies
      </h2>
      <p style="color: var(--text-secondary); font-size: 0.9rem; max-width: 700px;">
        Every spell matches enemy shield color vulnerabilities. Combine control and damage spells to trigger devastating multipliers.
      </p>

      <div class="filter-bar" style="margin-top: 16px;">
        <div class="filter-pills">
          ${spellCategories.map(cat => `
            <button class="filter-chip ${activeCategory === cat.id ? 'active' : ''}" data-spell-cat="${cat.id}">
              ${cat.label}
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
        <span>⚡</span> High-Impact Combat Synergies
      </h3>

      <div class="grid-cards" style="grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));">
        ${combatSynergies.map(syn => `
          <div class="synergy-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: #fff; font-size: 1rem;">${syn.title}</span>
              <span class="glass-pill glass-pill-gold" style="font-size: 0.72rem; padding: 2px 8px;">${syn.rating}</span>
            </div>

            <div class="synergy-pills">
              ${syn.sequence.map((step, idx) => `
                <span class="glass-pill" style="font-size: 0.76rem; background: rgba(255, 255, 255, 0.08);">${step}</span>
                ${idx < syn.sequence.length - 1 ? '<span style="color: var(--gold-light); font-size: 0.8rem;">➔</span>' : ''}
              `).join('')}
            </div>

            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
              ${syn.effect}
            </p>
          </div>
        `).join('')}
      </div>
    </div>

    <div>
      <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
        <span>📜</span> Spell Grimoire (${filteredSpells.length})
      </h3>

      <div class="grid-cards" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
        ${filteredSpells.map(spell => {
          let badgeColor = '#ef4444';
          if (spell.category === 'force') badgeColor = '#a855f7';
          if (spell.category === 'control') badgeColor = '#eab308';
          if (spell.category === 'utility') badgeColor = '#06b6d4';
          if (spell.category === 'curse') badgeColor = '#22c55e';

          return `
            <div class="glass-card" style="padding: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <div>
                  <h4 style="font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 4px;">
                    ${spell.name}
                  </h4>
                  <span class="spell-badge-type" style="background: ${badgeColor}22; color: ${badgeColor}; border: 1px solid ${badgeColor}55;">
                    ${spell.type}
                  </span>
                </div>

                <div style="text-align: right;">
                  <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Cooldown</span>
                  <div style="font-weight: 700; color: #fff; font-size: 0.95rem;">${spell.cooldown}</div>
                </div>
              </div>

              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
                ${spell.description}
              </p>

              <div style="padding: 10px 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: var(--radius-md);">
                <div style="font-size: 0.72rem; color: var(--gold-light); font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">
                  ⚔️ Combat Synergy
                </div>
                <div style="font-size: 0.82rem; color: #cbd5e1; line-height: 1.4;">
                  ${spell.synergy}
                </div>
              </div>

              <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; color: var(--text-muted);">
                <span>Breaks:</span>
                <span style="font-weight: 600; color: #fff;">${spell.shieldBreaker}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  container.querySelectorAll('[data-spell-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      setState({ spellCategoryFilter: btn.dataset.spellCat });
    });
  });
}
