import { beasts, frameLayout } from '../../data/arithmancy.js';
import { parseCenter } from '../../logic/arithmancy.js';
import { getPuzzle, selectSlot, setCenter } from './puzzleState.js';

const POINTS = [
  { x: 50, y: 8 },
  { x: 8, y: 92 },
  { x: 92, y: 92 }
];

const CENTER = { x: 50, y: 64 };

function frameGlyph(value) {
  const beast = beasts[value];
  return `
    <span class="frame-glyph" title="${beast.value} · ${beast.name}">
      ${beast.glyph}
      <small>${beast.value}</small>
    </span>
  `;
}

function slotContent(value, ghost) {
  if (value !== null) {
    const beast = beasts[value];
    return `<span class="slot-glyph">${beast.glyph}</span><span class="slot-num">${beast.value}</span>`;
  }
  if (ghost !== null) {
    const beast = beasts[ghost];
    return `<span class="slot-glyph ghost">${beast.glyph}</span><span class="slot-num ghost">${beast.value}</span>`;
  }
  return `<span class="slot-q">?</span>`;
}

function cornerMarkup(key, index, value, isSelected, ghost) {
  const point = POINTS[index];
  const classes = ['tri-slot'];
  if (isSelected) classes.push('selected');
  if (value === null) classes.push('unknown');
  if (value === null && ghost !== null) classes.push('answered');

  return `
    <button
      class="${classes.join(' ')}"
      id="slot-${key}-${index}"
      data-tri="${key}"
      data-slot="${index}"
      style="left: ${point.x}%; top: ${point.y}%;"
      aria-label="Corner ${index + 1}"
    >
      ${slotContent(value, ghost)}
    </button>
  `;
}

function triangleMarkup(key, label, triangle, selected, result) {
  const solved = result.status === 'solved';
  const ghost = solved ? result.answer : null;
  const lines = POINTS.map(p => `<line x1="${p.x}" y1="${p.y}" x2="${CENTER.x}" y2="${CENTER.y}" />`).join('');

  return `
    <div class="tri-panel ${solved ? 'solved' : ''}">
      <span class="tri-label">${label}</span>
      <div class="tri-stage">
        <svg class="tri-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="${POINTS.map(p => `${p.x},${p.y}`).join(' ')}" />
          ${lines}
        </svg>
        ${triangle.corners.map((value, i) => cornerMarkup(key, i, value, selected.tri === key && selected.slot === i, ghost)).join('')}
        <input
          class="tri-center"
          id="center-${key}"
          data-tri="${key}"
          type="text"
          inputmode="numeric"
          maxlength="2"
          placeholder="#"
          autocomplete="off"
          value="${triangle.center ?? ''}"
          style="left: ${CENTER.x}%; top: ${CENTER.y}%;"
          aria-label="${label} centre number"
        />
      </div>
    </div>
  `;
}

export function renderDoorBoard(container, results, onChange) {
  const puzzle = getPuzzle();

  container.innerHTML = `
    <div class="door-frame">
      <div class="frame-top">${frameLayout.top.map(frameGlyph).join('')}</div>
      <div class="frame-side frame-left">${frameLayout.left.map(frameGlyph).join('')}</div>
      <div class="door-body" id="door-board">
        ${triangleMarkup('top', '?', puzzle.top, puzzle.selected, results.top)}
        ${triangleMarkup('bottom', '??', puzzle.bottom, puzzle.selected, results.bottom)}
      </div>
      <div class="frame-side frame-right">${frameLayout.right.map(frameGlyph).join('')}</div>
    </div>
  `;

  container.querySelectorAll('.tri-slot').forEach(button => {
    button.addEventListener('click', () => {
      selectSlot(button.dataset.tri, Number(button.dataset.slot));
      onChange();
    });
  });

  container.querySelectorAll('.tri-center').forEach(input => {
    input.addEventListener('input', () => {
      setCenter(input.dataset.tri, parseCenter(input.value));
      onChange();
    });
  });
}
