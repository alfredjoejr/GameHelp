import { beasts } from '../../data/arithmancy.js';
import { getPuzzle, getSelectedValue, setCorner, moveSelection } from './puzzleState.js';

export function renderBeastPalette(container, onChange) {
  const { selected } = getPuzzle();
  const current = getSelectedValue();
  const triLabel = selected.tri === 'top' ? '?' : '??';

  container.innerHTML = `
    <div class="glass-panel palette-panel">
      <div class="palette-head">
        <div>
          <span class="palette-eyebrow">Editing</span>
          <h3>${triLabel} triangle · corner ${selected.slot + 1}</h3>
        </div>
        <button class="glass-button palette-clear" id="palette-unknown" ${current === null ? 'disabled' : ''}>
          Set as ?
        </button>
      </div>

      <div class="palette-grid">
        ${beasts.map(beast => `
          <button
            class="palette-btn ${current === beast.value ? 'active' : ''}"
            id="palette-${beast.value}"
            data-value="${beast.value}"
            title="${beast.look}"
          >
            <span class="p-glyph">${beast.glyph}</span>
            <span class="p-num">${beast.value}</span>
            <span class="p-name">${beast.name}</span>
          </button>
        `).join('')}
      </div>

      <p class="palette-hint">
        Plain numbers on the door work the same way, just pick the matching value.
        Keyboard: <kbd>0</kbd>–<kbd>9</kbd> to fill, <kbd>?</kbd> or <kbd>⌫</kbd> to blank, <kbd>←</kbd> <kbd>→</kbd> to move.
      </p>
    </div>
  `;

  container.querySelectorAll('.palette-btn').forEach(button => {
    button.addEventListener('click', () => {
      setCorner(Number(button.dataset.value));
      moveSelection(1);
      onChange();
    });
  });

  container.querySelector('#palette-unknown').addEventListener('click', () => {
    setCorner(null);
    onChange();
  });
}
