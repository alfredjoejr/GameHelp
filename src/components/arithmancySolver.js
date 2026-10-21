import { arithmancyBeasts } from '../data/hogwartsPuzzles.js';

export function renderArithmancySolver(container) {
  let topTarget = 21;
  let topNum = 11;
  let topBeastVal = 2;

  let botTarget = 17;
  let botNum = 5;
  let botBeastVal = 3;

  function calculate(target, num, beastVal) {
    const needed = target - (num + beastVal);
    const beast = arithmancyBeasts.find(b => b.value === needed);
    return {
      value: needed,
      isValid: needed >= 0 && needed <= 9,
      beast: beast || { name: "Out of Range", glyph: "❓" }
    };
  }

  function update() {
    const topResult = calculate(topTarget, topNum, topBeastVal);
    const botResult = calculate(botTarget, botNum, botBeastVal);

    container.innerHTML = `
      <div class="arithmancy-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
          <div>
            <div class="glass-pill glass-pill-gold">Interactive Tool</div>
            <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff; margin: 8px 0 4px 0;">
              Arithmancy Door Decoder
            </h2>
            <p style="color: var(--text-secondary); font-size: 0.9rem; max-width: 650px;">
              The central circle number equals the sum of the three surrounding points. Select the numbers and creature glyphs etched on your door to instantly reveal the dial symbols.
            </p>
          </div>

          <div style="padding: 10px 18px; border-radius: var(--radius-md); background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); text-align: right;">
            <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Universal Rule</span>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--gold-light);">Center = Sum of 3 Points</div>
          </div>
        </div>

        <div style="margin: 24px 0 12px 0;">
          <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin-bottom: 8px;">
            0–9 Creature Cipher Reference (Clockwise Around Door Frame)
          </h4>
          <div class="arithmancy-legend">
            ${arithmancyBeasts.map(b => `
              <div class="beast-badge" title="${b.meaning}">
                <div class="beast-glyph">${b.glyph}</div>
                <div class="beast-num">${b.value}</div>
                <div class="beast-name">${b.name}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="calculator-grid">
          <div class="calc-box">
            <div class="calc-header">
              <span class="calc-title">
                <span style="background: rgba(217, 160, 68, 0.2); padding: 4px 8px; border-radius: 6px; border: 1px solid rgba(217, 160, 68, 0.4);">?</span>
                Upper Triangle (Single Dial)
              </span>
            </div>

            <div class="calc-inputs">
              <div class="input-group">
                <label>Center Total</label>
                <input type="number" class="calc-num-input" id="top-target-input" value="${topTarget}" min="0" max="30"/>
              </div>

              <div class="input-group">
                <label>Known Number</label>
                <input type="number" class="calc-num-input" id="top-num-input" value="${topNum}" min="0" max="25"/>
              </div>

              <div class="input-group">
                <label>Beast Glyph</label>
                <select class="calc-select" id="top-beast-select">
                  ${arithmancyBeasts.map(b => `
                    <option value="${b.value}" ${b.value === topBeastVal ? 'selected' : ''}>
                      ${b.glyph} ${b.value} - ${b.name}
                    </option>
                  `).join('')}
                </select>
              </div>
            </div>

            <div class="calc-result-box">
              <div>
                <div class="calc-result-title">Roll Single '?' Dial To</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 2px;">
                  Formula: ${topTarget} - (${topNum} + ${topBeastVal}) = ${topResult.value}
                </div>
              </div>

              <div class="calc-result-val">
                ${topResult.isValid ? `
                  <span style="font-size: 1.8rem;">${topResult.beast.glyph}</span>
                  <span>${topResult.beast.name} (${topResult.value})</span>
                ` : `
                  <span style="color: var(--accent-damage);">Invalid Input</span>
                `}
              </div>
            </div>
          </div>

          <div class="calc-box">
            <div class="calc-header">
              <span class="calc-title">
                <span style="background: rgba(139, 92, 246, 0.2); padding: 4px 8px; border-radius: 6px; border: 1px solid rgba(139, 92, 246, 0.4);">??</span>
                Lower Triangle (Double Dial)
              </span>
            </div>

            <div class="calc-inputs">
              <div class="input-group">
                <label>Center Total</label>
                <input type="number" class="calc-num-input" id="bot-target-input" value="${botTarget}" min="0" max="30"/>
              </div>

              <div class="input-group">
                <label>Known Number</label>
                <input type="number" class="calc-num-input" id="bot-num-input" value="${botNum}" min="0" max="25"/>
              </div>

              <div class="input-group">
                <label>Beast Glyph</label>
                <select class="calc-select" id="bot-beast-select">
                  ${arithmancyBeasts.map(b => `
                    <option value="${b.value}" ${b.value === botBeastVal ? 'selected' : ''}>
                      ${b.glyph} ${b.value} - ${b.name}
                    </option>
                  `).join('')}
                </select>
              </div>
            </div>

            <div class="calc-result-box">
              <div>
                <div class="calc-result-title">Roll Double '??' Dial To</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 2px;">
                  Formula: ${botTarget} - (${botNum} + ${botBeastVal}) = ${botResult.value}
                </div>
              </div>

              <div class="calc-result-val">
                ${botResult.isValid ? `
                  <span style="font-size: 1.8rem;">${botResult.beast.glyph}</span>
                  <span>${botResult.beast.name} (${botResult.value})</span>
                ` : `
                  <span style="color: var(--accent-damage);">Invalid Input</span>
                `}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.querySelector('#top-target-input').addEventListener('input', (e) => {
      topTarget = parseInt(e.target.value, 10) || 0;
      update();
    });
    container.querySelector('#top-num-input').addEventListener('input', (e) => {
      topNum = parseInt(e.target.value, 10) || 0;
      update();
    });
    container.querySelector('#top-beast-select').addEventListener('change', (e) => {
      topBeastVal = parseInt(e.target.value, 10) || 0;
      update();
    });

    container.querySelector('#bot-target-input').addEventListener('input', (e) => {
      botTarget = parseInt(e.target.value, 10) || 0;
      update();
    });
    container.querySelector('#bot-num-input').addEventListener('input', (e) => {
      botNum = parseInt(e.target.value, 10) || 0;
      update();
    });
    container.querySelector('#bot-beast-select').addEventListener('change', (e) => {
      botBeastVal = parseInt(e.target.value, 10) || 0;
      update();
    });
  }

  update();
}
