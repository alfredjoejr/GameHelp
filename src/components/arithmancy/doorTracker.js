import { arithmancyDoors } from '../../data/arithmancy.js';
import { isItemChecked, toggleCheckItem, getCheckedCount } from '../../state/store.js';
import { getPuzzle, setDoor, clearPuzzle } from './puzzleState.js';

const doorKey = id => `door-${id}`;

export function renderDoorTracker(container, results, onChange) {
  const { doorId } = getPuzzle();
  const progress = getCheckedCount(arithmancyDoors.map(door => ({ id: doorKey(door.id) })));
  const current = arithmancyDoors.find(door => door.id === doorId);
  const readyToMark = current && !isItemChecked(doorKey(current.id))
    && results.top.status === 'solved' && results.bottom.status === 'solved';

  container.innerHTML = `
    <div class="tracker-head">
      <div>
        <div class="glass-pill glass-pill-active">Door Tracker</div>
        <h3>All 12 Arithmancy Doors</h3>
        <p>Pick the door you're standing at, solve it above, then tick it off. Progress is saved in this browser.</p>
      </div>
      <div class="tracker-count">
        <strong>${progress.checked}<span>/${progress.total}</span></strong>
        <small>opened</small>
      </div>
    </div>

    <div class="checklist-progress-bar">
      <div class="checklist-progress-fill" style="width: ${progress.percent}%;"></div>
    </div>

    ${readyToMark ? `
      <div class="tracker-ready">
        <span>Both dials solved for <strong>${current.area}</strong>.</span>
        <button class="glass-button glass-button-primary" id="mark-current-door">Mark as opened</button>
      </div>
    ` : ''}

    <div class="door-list">
      ${arithmancyDoors.map(door => {
        const done = isItemChecked(doorKey(door.id));
        const here = door.id === doorId;
        return `
          <div class="door-row ${done ? 'done' : ''} ${here ? 'current' : ''}">
            <button class="check-box-btn" data-door-check="${door.id}" aria-label="Toggle ${door.area}">
              ${done ? '✓' : ''}
            </button>
            <div class="door-info">
              <span class="door-wing">${door.wing}</span>
              <strong>${door.area}</strong>
              <p>${door.hint}</p>
              ${door.locked ? '<span class="glass-pill door-lock">🔒 Needs Alohomora</span>' : ''}
            </div>
            <button class="door-pick ${here ? 'active' : ''}" data-door-pick="${door.id}">
              ${here ? 'Here' : "I'm here"}
            </button>
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.querySelectorAll('[data-door-check]').forEach(button => {
    button.addEventListener('click', () => toggleCheckItem(doorKey(button.dataset.doorCheck)));
  });

  container.querySelectorAll('[data-door-pick]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.doorPick;
      if (id === doorId) {
        setDoor('');
      } else {
        setDoor(id);
        clearPuzzle();
      }
      onChange();
      document.getElementById('arith-board')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  container.querySelector('#mark-current-door')?.addEventListener('click', () => {
    toggleCheckItem(doorKey(current.id));
  });
}
