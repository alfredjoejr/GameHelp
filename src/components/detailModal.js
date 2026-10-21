import { getState, closeModal } from '../state/store.js';

export function renderDetailModal(container) {
  const state = getState();
  const modal = state.activeModal;

  if (!modal) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <div class="modal-backdrop" id="modal-backdrop-el">
      <div class="modal-dialog">
        <button class="modal-close-btn" id="modal-close-btn">&times;</button>

        <div class="glass-pill glass-pill-gold" style="margin-bottom: 8px;">
          ${modal.category || 'Guide Walkthrough'}
        </div>

        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff; margin-bottom: 12px;">
          ${modal.title}
        </h2>

        ${modal.spells ? `
          <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px;">
            ${modal.spells.map(s => `
              <span class="glass-pill" style="font-size: 0.72rem; padding: 2px 8px;">${s}</span>
            `).join('')}
          </div>
        ` : ''}

        <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
          ${modal.solution || ''}
        </div>

        ${modal.steps && modal.steps.length ? `
          <div style="margin-bottom: 24px;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--gold-light); margin-bottom: 12px;">
              Sequential Instructions
            </h4>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${modal.steps.map((st, i) => `
                <div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px; border-radius: var(--radius-md); background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06);">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: rgba(217, 160, 68, 0.2); border: 1px solid rgba(217, 160, 68, 0.4); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; color: var(--gold-light); flex-shrink: 0;">
                    ${i + 1}
                  </span>
                  <span style="font-size: 0.9rem; color: #e2e8f0; line-height: 1.5;">${st}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${modal.reward ? `
          <div style="padding: 12px 16px; border-radius: var(--radius-md); background: rgba(217, 160, 68, 0.12); border: 1px solid rgba(217, 160, 68, 0.3); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.82rem; text-transform: uppercase; color: var(--gold-light); font-weight: 700;">Guaranteed Reward</span>
            <span style="font-weight: 700; color: #fff; font-size: 0.92rem;">${modal.reward}</span>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  container.querySelector('#modal-close-btn')?.addEventListener('click', closeModal);
  container.querySelector('#modal-backdrop-el')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop-el') {
      closeModal();
    }
  });
}
