import { solveTriangle } from '../../logic/arithmancy.js';
import { keepFocus } from '../../utils/focus.js';
import { clearPuzzle, loadExample, setCorner, moveSelection } from './puzzleState.js';
import { getPuzzle } from './puzzleState.js';
import { renderDoorBoard } from './doorBoard.js';
import { renderBeastPalette } from './beastPalette.js';
import { renderDialResults } from './dialResults.js';
import { renderDoorTracker } from './doorTracker.js';

let refreshActive = null;

document.addEventListener('keydown', (e) => {
  if (!refreshActive || !document.getElementById('door-board')) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;

  if (/^[0-9]$/.test(e.key)) {
    setCorner(Number(e.key));
    moveSelection(1);
  } else if (e.key === '?' || e.key === 'Backspace' || e.key === 'Delete') {
    setCorner(null);
  } else if (e.key === 'ArrowRight') {
    moveSelection(1);
  } else if (e.key === 'ArrowLeft') {
    moveSelection(-1);
  } else {
    return;
  }

  e.preventDefault();
  refreshActive();
});

export function renderArithmancySolver(container) {
  const refresh = () => keepFocus(() => renderArithmancySolver(container));
  refreshActive = refresh;

  const puzzle = getPuzzle();
  const results = {
    top: solveTriangle(puzzle.top),
    bottom: solveTriangle(puzzle.bottom)
  };

  container.innerHTML = `
    <section class="arith-shell">
      <div class="arith-head">
        <div>
          <div class="glass-pill glass-pill-gold">Interactive Solver</div>
          <h2>Arithmancy Door Solver</h2>
          <p>
            Copy the door onto the board below. Each triangle's centre number is the sum of its three corners.
            Leave the <strong>?</strong> corner blank and the solver tells you which beast to roll on each dial.
          </p>
        </div>
        <div class="arith-actions">
          <button class="glass-button" id="arith-example">Load example</button>
          <button class="glass-button" id="arith-clear">Clear board</button>
        </div>
      </div>

      <div class="arith-layout">
        <div id="arith-board"></div>
        <aside class="arith-side">
          <div id="arith-results"></div>
          <div id="arith-palette"></div>
        </aside>
      </div>

      <div class="glass-panel arith-tracker" id="arith-tracker"></div>
    </section>
  `;

  renderDoorBoard(container.querySelector('#arith-board'), results, refresh);
  renderDialResults(container.querySelector('#arith-results'), results);
  renderBeastPalette(container.querySelector('#arith-palette'), refresh);
  renderDoorTracker(container.querySelector('#arith-tracker'), results, refresh);

  container.querySelector('#arith-example').addEventListener('click', () => {
    loadExample();
    refresh();
  });

  container.querySelector('#arith-clear').addEventListener('click', () => {
    clearPuzzle();
    refresh();
  });
}
