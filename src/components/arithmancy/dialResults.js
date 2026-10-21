import { beasts } from '../../data/arithmancy.js';

const DIALS = {
  top: { dial: '?', name: 'Upper triangle' },
  bottom: { dial: '??', name: 'Lower triangle' }
};

function messageFor(result) {
  switch (result.status) {
    case 'need-center':
      return 'Type the number in the middle of the triangle.';
    case 'too-many':
      return `Only one corner should be blank, right now ${result.blanks} are.`;
    case 'out-of-range':
      return `That works out to ${result.answer}, which isn't a beast (0–9). Double-check what you entered.`;
    case 'balanced':
      return 'All three corners already add up. Mark the ? corner as blank to solve it.';
    case 'mismatch':
      return `The corners add up to ${result.sum}, not ${result.center}. Something was misread.`;
    default:
      return '';
  }
}

function solvedCard(key, result) {
  const beast = beasts[result.answer];
  const { dial } = DIALS[key];

  return `
    <div class="dial-card solved">
      <div class="dial-badge">${dial}</div>
      <div class="dial-text">
        <small>Roll the ${dial} dial to</small>
        <strong>${beast.name}</strong>
        <span class="dial-eq">${result.center} − (${result.known.join(' + ')}) = ${result.answer}</span>
      </div>
      <div class="dial-glyph-big" title="${beast.look}">${beast.glyph}</div>
    </div>
  `;
}

function pendingCard(key, result) {
  const { dial, name } = DIALS[key];
  const warn = ['out-of-range', 'mismatch', 'too-many'].includes(result.status);

  return `
    <div class="dial-card ${warn ? 'warn' : ''}">
      <div class="dial-badge">${dial}</div>
      <div class="dial-text">
        <small>${name}</small>
        <span>${messageFor(result)}</span>
      </div>
    </div>
  `;
}

export function renderDialResults(container, results) {
  const both = results.top.status === 'solved' && results.bottom.status === 'solved';

  container.innerHTML = `
    <div class="dial-results">
      ${['top', 'bottom'].map(key => results[key].status === 'solved'
        ? solvedCard(key, results[key])
        : pendingCard(key, results[key])
      ).join('')}
      ${both ? `<p class="dial-done">Set both dials, then walk up to the door and it'll open.</p>` : ''}
    </div>
  `;
}
