(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`gamecodex_hogwarts_progress_v1`,t={view:`showcase`,selectedGameId:`hogwarts-legacy`,activeTab:`overview`,searchQuery:``,catalogCategory:`all`,collectibleRegionFilter:`all`,collectibleCategoryFilter:`all`,spellCategoryFilter:`all`,checkedItems:(()=>{try{let t=localStorage.getItem(e);return t?JSON.parse(t):{}}catch{return{}}})(),activeModal:null},n=new Set,r=()=>t,i=e=>{Object.assign(t,e),n.forEach(e=>e(t))},a=e=>(n.add(e),()=>n.delete(e)),o=n=>{let r={...t.checkedItems};r[n]?delete r[n]:r[n]=!0;try{localStorage.setItem(e,JSON.stringify(r))}catch{}i({checkedItems:r})},s=e=>!!t.checkedItems[e],c=e=>{if(!e||!e.length)return{checked:0,total:0,percent:0};let n=0;e.forEach(e=>{t.checkedItems[e.id]&&n++});let r=Math.round(n/e.length*100);return{checked:n,total:e.length,percent:r}},l=e=>{i({activeModal:e})},u=()=>{i({activeModal:null})};function d(e){let t=r();e.innerHTML=`
    <header class="site-header">
      <nav class="navbar">
        <div class="brand" id="nav-brand-btn">
          <div class="brand-icon">⚔️</div>
          <div class="brand-name">GAME CODEX</div>
        </div>

        <div class="nav-actions">
          <div class="glass-input-wrapper">
            <svg class="search-icon-svg" viewBox="0 0 24 24">
              <path d="M21 21l-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
            </svg>
            <input 
              type="text" 
              class="glass-input" 
              placeholder="Search guides, puzzles, spells..." 
              id="global-search-input"
              value="${t.searchQuery||``}"
            />
          </div>

          <button class="glass-button ${t.view===`showcase`?`active`:``}" id="nav-catalog-btn">
            Catalogue
          </button>

          <button class="glass-button glass-button-primary" id="nav-hogwarts-direct-btn">
            Hogwarts Guide
          </button>
        </div>
      </nav>
    </header>
  `;let n=e.querySelector(`#nav-brand-btn`),a=e.querySelector(`#nav-catalog-btn`),o=e.querySelector(`#nav-hogwarts-direct-btn`),s=e.querySelector(`#global-search-input`);n.addEventListener(`click`,()=>{i({view:`showcase`,searchQuery:``})}),a.addEventListener(`click`,()=>{i({view:`showcase`})}),o.addEventListener(`click`,()=>{i({view:`hogwarts`,activeTab:`overview`})}),s.addEventListener(`input`,e=>{i({searchQuery:e.target.value})})}var f=[{id:`hogwarts-legacy`,title:`Hogwarts Legacy`,subtitle:`The Wizarding World Companion`,genre:`Action RPG / Open World`,developer:`Avalanche Software`,publisher:`Warner Bros. Games`,year:`2023`,status:`Active Guide`,badge:`Available Now`,rating:`9.4`,banner:`/assets/hogwarts.jpg`,accent:`rgba(217, 160, 68, 0.8)`,themeColor:`#d9a044`,description:`Master the 1800s Wizarding World. Solve intricate Arithmancy beast doors, conquer every Merlin Trial archetype, discover Demiguise moons at dusk, and unlock the Relic House robes.`,highlights:[{label:`Puzzles Solved`,value:`9 Archetypes`},{label:`Demiguise Moons`,value:`33 Total`},{label:`Daedalian Keys`,value:`16 Keys`},{label:`Spell Combos`,value:`26 Synergies`}],features:[`Interactive Door Arithmancy Calculator with Beast Symbols`,`Comprehensive Merlin Trials Visual Playbook`,`Collectibles Tracker with Region Filters & Persistence`,`Combat Spell Synergy & Cooldown Matrix`]},{id:`elden-ring`,title:`Elden Ring: Shadow of the Erdtree`,subtitle:`Lands Between Codex`,genre:`Soulslike / Dark Fantasy`,developer:`FromSoftware`,publisher:`Bandai Namco`,year:`2024`,status:`Coming Soon`,badge:`In Development`,rating:`9.8`,banner:`/assets/eldenring.jpg`,accent:`rgba(235, 196, 85, 0.8)`,themeColor:`#ebc455`,description:`Prepare for comprehensive coverage of the Lands of Shadow, legacy dungeon puzzle paths, Scadutree fragment routes, and NPC questline trees.`,highlights:[{label:`Boss Guides`,value:`165 Total`},{label:`Scadutree Fragments`,value:`50 Spots`},{label:`Catacomb Levers`,value:`48 Solved`},{label:`Talisman Builds`,value:`35 Synergies`}],features:[`Catacomb maze floorplans & hidden lever locations`,`Interactive NPC quest branching tracker`,`Scadutree Fragment & Revered Spirit Ash interactive map`]},{id:`cyberpunk-2077`,title:`Cyberpunk 2077: Phantom Liberty`,subtitle:`Night City Field Manual`,genre:`Action RPG / Cyberpunk`,developer:`CD Projekt Red`,publisher:`CD Projekt`,year:`2023`,status:`Coming Soon`,badge:`In Development`,rating:`9.2`,banner:`/assets/cyberpunk.jpg`,accent:`rgba(0, 240, 255, 0.8)`,themeColor:`#00f0ff`,description:`Navigate Dogtown and Night City with precision. Includes Breach Protocol optimal route solving, Iconic weapon blueprints, and Tarot mural decoders.`,highlights:[{label:`Tarot Murals`,value:`24 Locations`},{label:`Iconic Caches`,value:`85 Weaps`},{label:`Cyberware Builds`,value:`40 Sets`},{label:`NCPD Scanners`,value:`112 Solved`}],features:[`Breach Protocol buffer puzzle solver`,`Iconic weapon catalog with drop locations`,`Relic perk point optimizer`]}],p=[{id:`demiguise-faculty-tower`,title:`Demiguise Statue - Faculty Tower`,category:`Demiguise`,region:`Hogwarts Castle`,location:`South Wing Faculty Tower, Gladwin Moon quarters`,nightOnly:!0,alohomoraLevel:1,tip:`Required during 'The Caretaker's Lunar Lament' quest. Change time to night in the map menu.`,reward:`Alohomora Upgrade Progress`},{id:`demiguise-divination-classroom`,title:`Demiguise Statue - Divination Classroom`,category:`Demiguise`,region:`Hogwarts Castle`,location:`Top of the ladder spiral staircase, Professor Onai desk`,nightOnly:!0,alohomoraLevel:1,tip:`Climb the wooden ladder into the attic classroom and check the back desk.`,reward:`Alohomora Upgrade Progress`},{id:`demiguise-potions-classroom`,title:`Demiguise Statue - Potions Storage`,category:`Demiguise`,region:`Hogwarts Castle`,location:`Through the locked side door near Sharp's classroom`,nightOnly:!0,alohomoraLevel:1,tip:`Unlock the gate and proceed along the narrow stone corridor to the desk.`,reward:`Alohomora Upgrade Progress`},{id:`demiguise-great-hall`,title:`Demiguise Statue - Great Hall Corner`,category:`Demiguise`,region:`Hogwarts Castle`,location:`Locked room in the southeast corner behind the High Table`,nightOnly:!0,alohomoraLevel:1,tip:`Turn right after entering the Great Hall; pick the level 1 lock.`,reward:`Alohomora Upgrade Progress`},{id:`demiguise-tomes-scrolls`,title:`Demiguise Statue - Tomes & Scrolls`,category:`Demiguise`,region:`Hogsmeade`,location:`Behind Thomas Brown's counter in the back bedroom`,nightOnly:!0,alohomoraLevel:1,tip:`Walk past the counter and behind the folding privacy screen.`,reward:`Alohomora Upgrade Progress`},{id:`demiguise-three-broomsticks`,title:`Demiguise Statue - Three Broomsticks Loft`,category:`Demiguise`,region:`Hogsmeade`,location:`Top floor private room above Sirona's tavern`,nightOnly:!0,alohomoraLevel:1,tip:`Ascend all flight of stairs to the very attic door.`,reward:`Alohomora Upgrade Progress`},{id:`demiguise-hog-head`,title:`Demiguise Statue - Hog's Head Storage`,category:`Demiguise`,region:`Hogsmeade`,location:`Back storage room behind the bar counter`,nightOnly:!0,alohomoraLevel:1,tip:`Head behind the barkeep into the adjacent crate room.`,reward:`Alohomora Upgrade Progress`},{id:`demiguise-brocburrow`,title:`Demiguise Statue - Brocburrow Cottage`,category:`Demiguise`,region:`The Highlands`,location:`North of the central fountain in a thatched roof cottage`,nightOnly:!0,alohomoraLevel:1,tip:`Check the bedside table inside the small cottage.`,reward:`Alohomora Upgrade Progress`},{id:`demiguise-keenbridge`,title:`Demiguise Statue - Keenbridge Residence`,category:`Demiguise`,region:`The Highlands`,location:`House with clothes hanging outside near the river`,nightOnly:!0,alohomoraLevel:1,tip:`Unlock the wooden door; statue rests on a small shelf near the kitchen.`,reward:`Alohomora Upgrade Progress`},{id:`daedalian-astronomy-tower`,title:`Daedalian Key - Astronomy Tower`,category:`Daedalian Key`,region:`Hogwarts Castle`,location:`Floo Flame staircase ascending toward the top platform`,nightOnly:!1,alohomoraLevel:0,tip:`Follow key down into the classroom with the planetary globes. Slap key when crossing keyhole.`,reward:`House Token (1 of 16)`},{id:`daedalian-central-hall`,title:`Daedalian Key - Central Hall Fountain`,category:`Daedalian Key`,region:`Hogwarts Castle`,location:`Near the greenhouse exit stairs in Central Hall`,nightOnly:!1,alohomoraLevel:0,tip:`Key leads toward the Potions staircase cabinet.`,reward:`House Token (2 of 16)`},{id:`daedalian-library`,title:`Daedalian Key - Library Annex`,category:`Daedalian Key`,region:`Hogwarts Castle`,location:`Between bookshelves on the main floor near central desk`,nightOnly:!1,alohomoraLevel:0,tip:`Guides you straight to the cabinet beside the portrait archway.`,reward:`House Token (3 of 16)`},{id:`daedalian-quad-courtyard`,title:`Daedalian Key - Quad Courtyard`,category:`Daedalian Key`,region:`Hogwarts Castle`,location:`Archway leading down to the boathouse path`,nightOnly:!1,alohomoraLevel:0,tip:`Flies to the cabinet under the stone arch staircase.`,reward:`House Token (4 of 16)`},{id:`eye-chest-library-annex`,title:`Disillusionment Eye Chest - Library Balcony`,category:`Eye Chest`,region:`Hogwarts Castle`,location:`Upper floor overlooking Central Hall`,nightOnly:!1,alohomoraLevel:0,tip:`Cast Disillusionment while out of the eye's viewcone, then sneak up and press open.`,reward:`500 Galleons`},{id:`eye-chest-hogsmeade-bridge`,title:`Disillusionment Eye Chest - Hogsmeade Mill Bridge`,category:`Eye Chest`,region:`Hogsmeade`,location:`Beneath the stone watermill bridge near the northern edge`,nightOnly:!1,alohomoraLevel:0,tip:`Activate stealth before stepping onto the wooden boardwalk.`,reward:`500 Galleons`},{id:`eye-chest-gladrags`,title:`Disillusionment Eye Chest - Gladrags Alley`,category:`Eye Chest`,region:`Hogsmeade`,location:`Narrow alleyway between Gladrags and Dervish & Banges`,nightOnly:!1,alohomoraLevel:0,tip:`Cast Disillusionment on the street, then duck into the alley.`,reward:`500 Galleons`},{id:`ancient-magic-forbidden-forest`,title:`Ancient Magic Hotspot - West Forbidden Forest`,category:`Ancient Magic`,region:`The Highlands`,location:`Ruined stone tower overrun by Thornback spiders`,nightOnly:!1,alohomoraLevel:0,tip:`Clear the webs with Incendio. Collect the 3 floating purple traces via high wooden beam.`,reward:`+1 Ancient Magic Meter Segment`},{id:`ancient-magic-keenbridge-ruins`,title:`Ancient Magic Hotspot - Keenbridge River Castle`,category:`Ancient Magic`,region:`The Highlands`,location:`Crumbling tower on the hillside southwest of town`,nightOnly:!1,alohomoraLevel:0,tip:`Pull loose blocks with Accio to form stepping platforms to the highest trace.`,reward:`+1 Ancient Magic Meter Segment`}];function m(e){let t=r(),n=t.searchQuery.trim().toLowerCase(),a=t.catalogCategory,o=f.filter(e=>{let t=!n||e.title.toLowerCase().includes(n)||e.genre.toLowerCase().includes(n)||e.description.toLowerCase().includes(n),r=a===`all`||a===`rpg`&&e.genre.toLowerCase().includes(`rpg`)||a===`open-world`&&e.genre.toLowerCase().includes(`open world`)||a===`action`&&e.genre.toLowerCase().includes(`action`);return t&&r}),s=c(p);e.innerHTML=`
    <section class="section-hero">
      <div class="hero-glass-box">
        <div class="hero-glow-orb orb-1"></div>
        <div class="hero-glow-orb orb-2"></div>
        
        <div class="hero-content">
          <div class="glass-pill glass-pill-gold">
            <span>✨</span> Next-Gen Game Support & Codex
          </div>

          <h1 class="hero-title">
            Precision Guides for <span>Epic Worlds</span>
          </h1>

          <p class="hero-desc">
            An Apple-inspired companion designed for deep completionists. Solve complex environmental puzzles, decipher cryptic symbols, and track elusive collectibles seamlessly.
          </p>

          <div style="display: flex; gap: 14px; flex-wrap: wrap;">
            <button class="glass-button glass-button-primary" id="hero-hogwarts-btn">
              Explore Hogwarts Legacy Codex ➔
            </button>
            <button class="glass-button" id="hero-puzzles-btn">
              Open Arithmancy Calculator
            </button>
          </div>

          <div class="hero-metrics">
            <div class="metric-item">
              <span class="metric-value">100%</span>
              <span class="metric-label">Local Save Tracking</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">150+</span>
              <span class="metric-label">Puzzle Solutions</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">0s</span>
              <span class="metric-label">Zero Latency Blur</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">33</span>
              <span class="metric-label">Demiguise Statues</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="filter-bar">
      <div>
        <h2 style="font-family: var(--font-serif); font-size: 1.6rem; color: #fff; margin-bottom: 4px;">
          Game Library Catalogue
        </h2>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">
          Select a title to enter its dedicated puzzle codex and secret checklists.
        </p>
      </div>

      <div class="filter-pills">
        <button class="filter-chip ${a===`all`?`active`:``}" data-cat="all">All Titles</button>
        <button class="filter-chip ${a===`rpg`?`active`:``}" data-cat="rpg">RPG</button>
        <button class="filter-chip ${a===`open-world`?`active`:``}" data-cat="open-world">Open World</button>
        <button class="filter-chip ${a===`action`?`active`:``}" data-cat="action">Action</button>
      </div>
    </div>

    <div class="grid-cards">
      ${o.map(e=>{let t=e.id===`hogwarts-legacy`;return`
          <div class="glass-card" data-game-id="${e.id}">
            <div class="card-media">
              <img src="${e.banner}" alt="${e.title}" loading="lazy"/>
              <div class="card-media-overlay"></div>
              
              <div class="card-badge-pos">
                <span class="glass-pill ${t?`glass-pill-active`:`glass-pill-queue`}">
                  ${e.badge}
                </span>
              </div>

              <div class="card-rating-pos">
                <span>★</span> ${e.rating}
              </div>
            </div>

            <div class="card-body">
              <div class="card-header-group">
                <span class="card-subtitle">${e.genre}</span>
                <h3 class="card-title">${e.title}</h3>
              </div>

              <p class="card-description">${e.description}</p>

              <div class="card-specs">
                ${e.highlights.map(e=>`
                  <div class="spec-cell">
                    <span class="spec-title">${e.label}</span>
                    <span class="spec-val">${e.value}</span>
                  </div>
                `).join(``)}
              </div>

              ${t?`
                <div style="background: rgba(217, 160, 68, 0.08); border: 1px solid rgba(217, 160, 68, 0.25); border-radius: var(--radius-md); padding: 12px 14px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 6px;">
                    <span style="color: var(--gold-light); font-weight: 600;">Your Collectibles Progress</span>
                    <span style="font-weight: 700; color: #fff;">${s.checked}/${s.total} (${s.percent}%)</span>
                  </div>
                  <div class="checklist-progress-bar" style="margin: 0;">
                    <div class="checklist-progress-fill" style="width: ${s.percent}%;"></div>
                  </div>
                </div>
              `:``}

              <div class="card-footer">
                <span style="font-size: 0.8rem; color: var(--text-muted);">${e.developer}</span>
                
                ${t?`
                  <button class="glass-button glass-button-primary game-launch-btn" data-id="${e.id}">
                    Open Guide ➔
                  </button>
                `:`
                  <button class="glass-button" style="opacity: 0.6; cursor: not-allowed;" title="In Development">
                    Coming Soon
                  </button>
                `}
              </div>
            </div>
          </div>
        `}).join(``)}
    </div>
  `,e.querySelector(`#hero-hogwarts-btn`)?.addEventListener(`click`,()=>{i({view:`hogwarts`,activeTab:`overview`})}),e.querySelector(`#hero-puzzles-btn`)?.addEventListener(`click`,()=>{i({view:`hogwarts`,activeTab:`arithmancy`})}),e.querySelectorAll(`.filter-chip`).forEach(e=>{e.addEventListener(`click`,()=>{i({catalogCategory:e.dataset.cat})})}),e.querySelectorAll(`.game-launch-btn`).forEach(e=>{e.addEventListener(`click`,()=>{i({view:`hogwarts`,activeTab:`overview`})})})}var h=[{id:`arithmancy-doors`,title:`Arithmancy Door Numbers`,category:`Math & Symbols`,spells:[`None Required (Pure Deduction)`],difficulty:`Medium`,reward:`Rare Gear, House Tokens, Collection Chests`,summary:`Hogwarts features 12 sealed Arithmancy doors bordered with 10 beast carvings numbered sequentially 0 to 9.`,solution:`The large number in the center circle equals the sum of the three surrounding points. One point is an integer, one is an animal glyph, and the third is a question mark (? or ??). Subtract known values from the center target to reveal the missing beast value, then roll the matching wall dial.`,interactiveType:`arithmancy-tool`,steps:[`Face the door and read the top triangle: Center target = Tip + Left + Right.`,`Identify the beast value (e.g., Unicorn is 1, Hydra is 9, Quintaped is 5).`,`Calculate the missing value: Target - Number - Beast Value = Required Animal.`,`Locate the single '?' dial nearby and roll it to that beast.`,`Repeat calculation for the bottom '??' triangle and roll the double '??' dial.`,`Return to the door and interact to open the chamber.`]},{id:`viaduct-bridge`,title:`Viaduct Bridge Fire Grate`,category:`Mechanisms`,spells:[`Incendio`,`Confringo`],difficulty:`Easy`,reward:`Legendary Gear & 3 Collection Chests`,summary:`Connects the Library Annex to the Great Hall. Four unlit braziers line the stone walkway beside a sealed bronze manhole.`,solution:`Look at the floor crest near the northwest bridge corner. Each symbol (Key, Shield, Double Circle, Triangle) is paired with a Roman numeral (I, II, III, IV). Light all four braziers with fire, then interact with the gear beneath each brazier until the Roman numeral matches its symbol.`,steps:[`Check the bronze circular plate on the floor for the pairing guide.`,`Cast Incendio on all 4 stone braziers so the mechanisms can turn.`,`Triangle symbol = Roman numeral I`,`Two overlapping circles = Roman numeral II`,`Key symbol = Roman numeral III`,`Spiked crest / sun = Roman numeral IV`,`Once matched, the manhole unlocks, dropping you into the aqueduct chamber below.`]},{id:`merlin-trials-overview`,title:`The 9 Merlin Trial Archetypes`,category:`Exploration`,spells:[`Accio`,`Depulso`,`Flipendo`,`Incendio`,`Confringo`,`Lumos`,`Reparo`],difficulty:`Varies`,reward:`Permanent Gear Inventory Slot Expansions`,summary:`Created by Merlin of Slytherin. Scattered across 95 Highland locations, activated with Mallowsweet leaves.`,archetypes:[{name:`Giant Stone Sphere`,spells:[`Depulso`,`Accio`,`Wingardium Leviosa`],method:`Locate the massive stone ball on an elevated hill and guide it into the concave bowl carved into the ground.`},{name:`Flipendo Cube Alignment`,spells:[`Flipendo`],method:`Stand in front of pillars with stacked dice. Cast Flipendo from different angles so the top dice symbol matches the bottom pillar symbol orientation.`},{name:`Timed Torch Braziers`,spells:[`Confringo`,`Incendio`],method:`Identify 3 torches on pillars of descending heights. Light the tallest one first and immediately sprint/shoot the remaining two before they submerge.`},{name:`Moths to Hollow Cubes`,spells:[`Lumos`],method:`Find 3 stone blocks with crystals inside. Cast Lumos near hovering blue moths in nearby bushes to lead three groups into their corresponding blocks.`},{name:`Stone Pillar Parkour`,spells:[`Movement Only`],method:`Climb atop the first stone monolith. Jump from pillar to pillar until reaching the finish without falling onto the ground.`},{name:`Shattered Statues`,spells:[`Reparo`],method:`Three stone statues instantly explode upon trial start. Track down the rubble pieces and mend all three with Reparo.`},{name:`Small Marbles into Plates`,spells:[`Accio`,`Wingardium Leviosa`],method:`Three indented stone platforms require 5 small stone balls each. Pull the balls out from crevices and deposit them onto the pads.`},{name:`Exploding Rune Stones`,spells:[`Confringo`,`Bombarda`],method:`Five stone orbs perched atop pillars or hidden behind breakable vines must be destroyed.`},{name:`Butterfly Swarm Escort`,spells:[`Lumos`],method:`Lumos attracts the swarm to your wand; guide them safely into the illuminated garden pedestal.`}]},{id:`moth-mirrors`,title:`Moth to the Frame Mirrors`,category:`Hidden Chambers`,spells:[`Lumos`],difficulty:`Easy`,reward:`Field Guide Pages`,summary:`Ornate silver and black glass mirror frames hanging throughout the castle that show blank obsidian surfaces.`,solution:`Cast Lumos directly in front of the mirror to project a black-and-white landscape memory. Identify the depicted architectural feature nearby, walk to it, find the golden moth perched on a pillar or wall, cast Lumos to draw the moth to your wand tip, and escort it back to the frame.`,steps:[`Stand before the mirror and cast Lumos to reveal the location hint.`,`Explore the immediate 30-meter radius for matching stairs, tapestries, or statues.`,`Cast Lumos near the moth; it will tether to your wand.`,`Walk back to the mirror and cancel Lumos or basic cast to snap the moth into the brooch.`]},{id:`clock-tower-doors`,title:`Clock Tower Pendulum Doors`,category:`Mechanisms`,spells:[`Arresto Momentum`,`Glacius`],difficulty:`Medium`,reward:`Secret Castle Chambers & Rare Loot`,summary:`The Hospital Wing and Defence Against the Dark Arts courtyard share a colossal ticking pendulum with 4 brass sigils on the guide bar.`,solution:`Each floor has a locked iron gate marked with one of the 4 symbols (Unicorn, Owl, Two Serpents, Chimera). Freeze the swinging pendulum with Arresto Momentum or Glacius precisely when it aligns with that symbol to unlock the corresponding floor gate.`,steps:[`Observe the symbol etched on the barred door you want to enter.`,`Position yourself on the wooden walkway facing the pendulum rod.`,`Wait for the pendulum weight to sweep directly over the matching glyph.`,`Cast Arresto Momentum to freeze the pendulum in place.`,`Dash through the door before the freeze effect expires.`]},{id:`chess-rooms`,title:`Transfiguration Chess Puzzles`,category:`Dungeon Secrets`,spells:[`Transformation`,`Wingardium Leviosa`,`Depulso`],difficulty:`Hard`,reward:`Collection Chests & Highlands Lore`,summary:`Hidden inside Treasure Vaults in Feldcroft, Cragcroftshire, and Coast caverns featuring a life-sized stone chessboard.`,solution:`Cast Revelio to find a miscellaneous object (urn, stone vase, chair) emitting a white aura. Cast Transformation to turn the object into the missing chess piece (Bishop, Knight, or Queen), then use Wingardium Leviosa to position it for an unavoidable checkmate against the enemy King.`,steps:[`Enter the vault and inspect the enemy King on the board.`,`Locate the loose urn or cauldron in the corners using Revelio.`,`Cast Transformation on the urn to convert it into a chess piece.`,`Move the piece into the checkmate position (e.g., Bishop diagonal to King).`,`The enemy King shatters, revealing the chest.`]}];function g(e){let{center:t,corners:n}=e,r=n.filter(e=>e!==null),i=r.reduce((e,t)=>e+t,0),a=n.length-r.length;if(t===null)return{status:`need-center`};if(a===0)return i===t?{status:`balanced`}:{status:`mismatch`,sum:i,center:t};if(a>1)return{status:`too-many`,blanks:a};let o=t-i;return o<0||o>9?{status:`out-of-range`,answer:o}:{status:`solved`,answer:o,center:t,known:r}}function _(e){let t=String(e).replace(/\D/g,``);return t?Math.min(parseInt(t,10),27):null}function ee(e){let t=document.activeElement,n=t&&t.id,r=t&&t.tagName===`INPUT`&&t.type===`text`,i=r?t.selectionStart:null,a=r?t.selectionEnd:null;if(e(),!n)return;let o=document.getElementById(n);o&&o!==document.activeElement&&(o.focus({preventScroll:!0}),i!==null&&o.setSelectionRange&&o.setSelectionRange(i,a))}var v=[[`top`,0],[`top`,1],[`top`,2],[`bottom`,0],[`bottom`,1],[`bottom`,2]],y=()=>({center:null,corners:[null,null,null]}),b={top:{center:15,corners:[4,8,null]},bottom:{center:12,corners:[2,1,null]},selected:{tri:`top`,slot:2},doorId:``},x=()=>b;function S(){let{tri:e,slot:t}=b.selected;return b[e].corners[t]}function C(e,t){b.selected={tri:e,slot:t}}function w(e){let{tri:t,slot:n}=b.selected;b[t].corners[n]=e}function te(e,t){b[e].center=t}function T(e){let{tri:t,slot:n}=b.selected,[r,i]=v[(v.findIndex(([e,r])=>e===t&&r===n)+e+v.length)%v.length];b.selected={tri:r,slot:i}}function E(){b.top=y(),b.bottom=y(),b.selected={tri:`top`,slot:0}}function D(){b.top={center:15,corners:[4,8,null]},b.bottom={center:12,corners:[2,1,null]},b.selected={tri:`top`,slot:2}}function O(e){b.doorId=e}var k=[{value:0,name:`Demiguise`,glyph:`🐒`,look:`Ape-like face framed by long, flowing hair`},{value:1,name:`Unicorn`,glyph:`🦄`,look:`Horse head with a single straight horn`},{value:2,name:`Graphorn`,glyph:`🐃`,look:`Hunched beast with two curved horns`},{value:3,name:`Runespoor`,glyph:`🐍`,look:`Snake with three heads`},{value:4,name:`Fwooper`,glyph:`🐦`,look:`Round bird with a tufted crest`},{value:5,name:`Quintaped`,glyph:`🦔`,look:`Squat, hairy creature with five legs`},{value:6,name:`Salamander`,glyph:`🦎`,look:`Lizard curled up in flames`},{value:7,name:`Tentacled Beast`,glyph:`🦑`,look:`Squid-like creature with dangling tentacles`},{value:8,name:`Acromantula`,glyph:`🕷️`,look:`Giant eight-legged spider`},{value:9,name:`Hydra`,glyph:`🐉`,look:`Serpent body splitting into many heads`}],A={left:[3,2,1,0],top:[4,5],right:[6,7,8,9]},j=[{id:`charms`,wing:`Astronomy Wing`,area:`Charms Classroom`,hint:`From the Charms Classroom Floo Flame, walk down the hallway behind you. The door is on the left.`},{id:`central-hall`,wing:`Library Annex`,area:`Central Hall`,hint:`Take the stairs up from the Central Hall Floo Flame and check the upper walkway.`},{id:`library`,wing:`Library Annex`,area:`Library`,hint:`Toward the back of the Library, past the main book stacks.`},{id:`potions`,wing:`Bell Tower Wing`,area:`Potions Classroom`,hint:`Follow the corridor outside the Potions Classroom Floo Flame.`},{id:`grand-staircase`,wing:`Grand Staircase`,area:`Grand Staircase Tower`,hint:`A short way down the stairs from the Grand Staircase Tower Floo Flame.`},{id:`ravenclaw`,wing:`Grand Staircase`,area:`Ravenclaw Tower`,hint:`On the climb up toward Ravenclaw Tower.`},{id:`great-hall`,wing:`The Great Hall`,area:`Great Hall`,hint:`Along the corridor off the Great Hall Floo Flame, heading toward the courtyard exit.`},{id:`divination-1`,wing:`Astronomy Wing`,area:`Divination Classroom I`,hint:`On the wooden walkway leading up to the Divination Classroom.`},{id:`divination-2`,wing:`Astronomy Wing`,area:`Divination Classroom II`,hint:`Further along, up in the rafters past the classroom.`},{id:`divination-3`,wing:`Astronomy Wing`,area:`Divination Classroom III`,hint:`Near the Arithmancy classroom, past the other two Divination doors.`},{id:`hospital-wing`,wing:`South Wing`,area:`Hospital Wing`,hint:`Behind a locked door near the Hospital Wing.`,locked:!0},{id:`transfiguration`,wing:`Bell Tower Wing`,area:`Transfiguration Courtyard`,hint:`Behind a locked door off the Transfiguration Courtyard, up the stairs.`,locked:!0}],M=[{x:50,y:8},{x:8,y:92},{x:92,y:92}],N={x:50,y:64};function P(e){let t=k[e];return`
    <span class="frame-glyph" title="${t.value} · ${t.name}">
      ${t.glyph}
      <small>${t.value}</small>
    </span>
  `}function ne(e,t){if(e!==null){let t=k[e];return`<span class="slot-glyph">${t.glyph}</span><span class="slot-num">${t.value}</span>`}if(t!==null){let e=k[t];return`<span class="slot-glyph ghost">${e.glyph}</span><span class="slot-num ghost">${e.value}</span>`}return`<span class="slot-q">?</span>`}function F(e,t,n,r,i){let a=M[t],o=[`tri-slot`];return r&&o.push(`selected`),n===null&&o.push(`unknown`),n===null&&i!==null&&o.push(`answered`),`
    <button
      class="${o.join(` `)}"
      id="slot-${e}-${t}"
      data-tri="${e}"
      data-slot="${t}"
      style="left: ${a.x}%; top: ${a.y}%;"
      aria-label="Corner ${t+1}"
    >
      ${ne(n,i)}
    </button>
  `}function I(e,t,n,r,i){let a=i.status===`solved`,o=a?i.answer:null,s=M.map(e=>`<line x1="${e.x}" y1="${e.y}" x2="${N.x}" y2="${N.y}" />`).join(``);return`
    <div class="tri-panel ${a?`solved`:``}">
      <span class="tri-label">${t}</span>
      <div class="tri-stage">
        <svg class="tri-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="${M.map(e=>`${e.x},${e.y}`).join(` `)}" />
          ${s}
        </svg>
        ${n.corners.map((t,n)=>F(e,n,t,r.tri===e&&r.slot===n,o)).join(``)}
        <input
          class="tri-center"
          id="center-${e}"
          data-tri="${e}"
          type="text"
          inputmode="numeric"
          maxlength="2"
          placeholder="#"
          autocomplete="off"
          value="${n.center??``}"
          style="left: ${N.x}%; top: ${N.y}%;"
          aria-label="${t} centre number"
        />
      </div>
    </div>
  `}function L(e,t,n){let r=x();e.innerHTML=`
    <div class="door-frame">
      <div class="frame-top">${A.top.map(P).join(``)}</div>
      <div class="frame-side frame-left">${A.left.map(P).join(``)}</div>
      <div class="door-body" id="door-board">
        ${I(`top`,`?`,r.top,r.selected,t.top)}
        ${I(`bottom`,`??`,r.bottom,r.selected,t.bottom)}
      </div>
      <div class="frame-side frame-right">${A.right.map(P).join(``)}</div>
    </div>
  `,e.querySelectorAll(`.tri-slot`).forEach(e=>{e.addEventListener(`click`,()=>{C(e.dataset.tri,Number(e.dataset.slot)),n()})}),e.querySelectorAll(`.tri-center`).forEach(e=>{e.addEventListener(`input`,()=>{te(e.dataset.tri,_(e.value)),n()})})}function R(e,t){let{selected:n}=x(),r=S();e.innerHTML=`
    <div class="glass-panel palette-panel">
      <div class="palette-head">
        <div>
          <span class="palette-eyebrow">Editing</span>
          <h3>${n.tri===`top`?`?`:`??`} triangle · corner ${n.slot+1}</h3>
        </div>
        <button class="glass-button palette-clear" id="palette-unknown" ${r===null?`disabled`:``}>
          Set as ?
        </button>
      </div>

      <div class="palette-grid">
        ${k.map(e=>`
          <button
            class="palette-btn ${r===e.value?`active`:``}"
            id="palette-${e.value}"
            data-value="${e.value}"
            title="${e.look}"
          >
            <span class="p-glyph">${e.glyph}</span>
            <span class="p-num">${e.value}</span>
            <span class="p-name">${e.name}</span>
          </button>
        `).join(``)}
      </div>

      <p class="palette-hint">
        Plain numbers on the door work the same way, just pick the matching value.
        Keyboard: <kbd>0</kbd>–<kbd>9</kbd> to fill, <kbd>?</kbd> or <kbd>⌫</kbd> to blank, <kbd>←</kbd> <kbd>→</kbd> to move.
      </p>
    </div>
  `,e.querySelectorAll(`.palette-btn`).forEach(e=>{e.addEventListener(`click`,()=>{w(Number(e.dataset.value)),T(1),t()})}),e.querySelector(`#palette-unknown`).addEventListener(`click`,()=>{w(null),t()})}var z={top:{dial:`?`,name:`Upper triangle`},bottom:{dial:`??`,name:`Lower triangle`}};function B(e){switch(e.status){case`need-center`:return`Type the number in the middle of the triangle.`;case`too-many`:return`Only one corner should be blank, right now ${e.blanks} are.`;case`out-of-range`:return`That works out to ${e.answer}, which isn't a beast (0–9). Double-check what you entered.`;case`balanced`:return`All three corners already add up. Mark the ? corner as blank to solve it.`;case`mismatch`:return`The corners add up to ${e.sum}, not ${e.center}. Something was misread.`;default:return``}}function V(e,t){let n=k[t.answer],{dial:r}=z[e];return`
    <div class="dial-card solved">
      <div class="dial-badge">${r}</div>
      <div class="dial-text">
        <small>Roll the ${r} dial to</small>
        <strong>${n.name}</strong>
        <span class="dial-eq">${t.center} − (${t.known.join(` + `)}) = ${t.answer}</span>
      </div>
      <div class="dial-glyph-big" title="${n.look}">${n.glyph}</div>
    </div>
  `}function H(e,t){let{dial:n,name:r}=z[e];return`
    <div class="dial-card ${[`out-of-range`,`mismatch`,`too-many`].includes(t.status)?`warn`:``}">
      <div class="dial-badge">${n}</div>
      <div class="dial-text">
        <small>${r}</small>
        <span>${B(t)}</span>
      </div>
    </div>
  `}function U(e,t){let n=t.top.status===`solved`&&t.bottom.status===`solved`;e.innerHTML=`
    <div class="dial-results">
      ${[`top`,`bottom`].map(e=>t[e].status===`solved`?V(e,t[e]):H(e,t[e])).join(``)}
      ${n?`<p class="dial-done">Set both dials, then walk up to the door and it'll open.</p>`:``}
    </div>
  `}var W=e=>`door-${e}`;function G(e,t,n){let{doorId:r}=x(),i=c(j.map(e=>({id:W(e.id)}))),a=j.find(e=>e.id===r),l=a&&!s(W(a.id))&&t.top.status===`solved`&&t.bottom.status===`solved`;e.innerHTML=`
    <div class="tracker-head">
      <div>
        <div class="glass-pill glass-pill-active">Door Tracker</div>
        <h3>All 12 Arithmancy Doors</h3>
        <p>Pick the door you're standing at, solve it above, then tick it off. Progress is saved in this browser.</p>
      </div>
      <div class="tracker-count">
        <strong>${i.checked}<span>/${i.total}</span></strong>
        <small>opened</small>
      </div>
    </div>

    <div class="checklist-progress-bar">
      <div class="checklist-progress-fill" style="width: ${i.percent}%;"></div>
    </div>

    ${l?`
      <div class="tracker-ready">
        <span>Both dials solved for <strong>${a.area}</strong>.</span>
        <button class="glass-button glass-button-primary" id="mark-current-door">Mark as opened</button>
      </div>
    `:``}

    <div class="door-list">
      ${j.map(e=>{let t=s(W(e.id)),n=e.id===r;return`
          <div class="door-row ${t?`done`:``} ${n?`current`:``}">
            <button class="check-box-btn" data-door-check="${e.id}" aria-label="Toggle ${e.area}">
              ${t?`✓`:``}
            </button>
            <div class="door-info">
              <span class="door-wing">${e.wing}</span>
              <strong>${e.area}</strong>
              <p>${e.hint}</p>
              ${e.locked?`<span class="glass-pill door-lock">🔒 Needs Alohomora</span>`:``}
            </div>
            <button class="door-pick ${n?`active`:``}" data-door-pick="${e.id}">
              ${n?`Here`:`I'm here`}
            </button>
          </div>
        `}).join(``)}
    </div>
  `,e.querySelectorAll(`[data-door-check]`).forEach(e=>{e.addEventListener(`click`,()=>o(W(e.dataset.doorCheck)))}),e.querySelectorAll(`[data-door-pick]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.doorPick;t===r?O(``):(O(t),E()),n(),document.getElementById(`arith-board`)?.scrollIntoView({behavior:`smooth`,block:`start`})})}),e.querySelector(`#mark-current-door`)?.addEventListener(`click`,()=>{o(W(a.id))})}var K=null;document.addEventListener(`keydown`,e=>{if(K&&document.getElementById(`door-board`)&&!(e.ctrlKey||e.metaKey||e.altKey)&&![`INPUT`,`SELECT`,`TEXTAREA`].includes(e.target.tagName)){if(/^[0-9]$/.test(e.key))w(Number(e.key)),T(1);else if(e.key===`?`||e.key===`Backspace`||e.key===`Delete`)w(null);else if(e.key===`ArrowRight`)T(1);else if(e.key===`ArrowLeft`)T(-1);else return;e.preventDefault(),K()}});function q(e){let t=()=>ee(()=>q(e));K=t;let n=x(),r={top:g(n.top),bottom:g(n.bottom)};e.innerHTML=`
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
  `,L(e.querySelector(`#arith-board`),r,t),U(e.querySelector(`#arith-results`),r),R(e.querySelector(`#arith-palette`),t),G(e.querySelector(`#arith-tracker`),r,t),e.querySelector(`#arith-example`).addEventListener(`click`,()=>{D(),t()}),e.querySelector(`#arith-clear`).addEventListener(`click`,()=>{E(),t()})}function J(e){let t=r(),n=t.searchQuery.trim().toLowerCase(),a=t.collectibleCategoryFilter,l=t.collectibleRegionFilter,u=p.filter(e=>{let t=!n||e.title.toLowerCase().includes(n)||e.location.toLowerCase().includes(n)||e.tip.toLowerCase().includes(n),r=a===`all`||e.category===a,i=l===`all`||e.region===l;return t&&r&&i}),d=c(p);c(u),e.innerHTML=`
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
            Global Progress: ${d.checked} / ${d.total} (${d.percent}%)
          </div>
        </div>
      </div>

      <div class="checklist-progress-bar">
        <div class="checklist-progress-fill" style="width: ${d.percent}%;"></div>
      </div>

      <div class="filter-bar" style="margin-bottom: 16px;">
        <div class="filter-pills">
          <button class="filter-chip ${a===`all`?`active`:``}" data-cat="all">All Types</button>
          <button class="filter-chip ${a===`Demiguise`?`active`:``}" data-cat="Demiguise">Demiguise (Night Only)</button>
          <button class="filter-chip ${a===`Daedalian Key`?`active`:``}" data-cat="Daedalian Key">Daedalian Keys</button>
          <button class="filter-chip ${a===`Eye Chest`?`active`:``}" data-cat="Eye Chest">Eye Chests (500g)</button>
          <button class="filter-chip ${a===`Ancient Magic`?`active`:``}" data-cat="Ancient Magic">Ancient Magic</button>
        </div>

        <div class="filter-pills">
          <button class="filter-chip ${l===`all`?`active`:``}" data-reg="all">All Regions</button>
          <button class="filter-chip ${l===`Hogwarts Castle`?`active`:``}" data-reg="Hogwarts Castle">Castle</button>
          <button class="filter-chip ${l===`Hogsmeade`?`active`:``}" data-reg="Hogsmeade">Hogsmeade</button>
          <button class="filter-chip ${l===`The Highlands`?`active`:``}" data-reg="The Highlands">Highlands</button>
        </div>
      </div>
    </div>

    <div>
      ${u.length===0?`
        <div style="text-align: center; padding: 48px; border-radius: var(--radius-lg); background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.1);">
          <p style="color: var(--text-secondary); font-size: 1rem;">No collectibles match your current filter selection.</p>
        </div>
      `:u.map(e=>{let t=s(e.id);return`
          <div class="checklist-item ${t?`checked`:``}" data-item-id="${e.id}">
            <button class="check-box-btn" data-check-id="${e.id}" aria-label="Toggle completed">
              ${t?`✓`:``}
            </button>

            <div style="flex: 1;">
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 4px;">
                <span class="checklist-title" style="font-weight: 700; font-size: 1.05rem; color: #fff;">
                  ${e.title}
                </span>

                <span class="glass-pill" style="font-size: 0.7rem; padding: 2px 8px;">
                  ${e.region}
                </span>

                ${e.nightOnly?`
                  <span class="glass-pill glass-pill-gold" style="font-size: 0.7rem; padding: 2px 8px;">
                    🌙 Night Only
                  </span>
                `:``}

                ${e.alohomoraLevel>0?`
                  <span class="glass-pill" style="font-size: 0.7rem; padding: 2px 8px; color: var(--gold-light);">
                    🔒 Alohomora Level ${e.alohomoraLevel}
                  </span>
                `:``}
              </div>

              <div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 6px;">
                📍 <strong>Location:</strong> ${e.location}
              </div>

              <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.45;">
                💡 <strong>Strategy:</strong> ${e.tip}
              </div>
            </div>

            <div style="text-align: right; flex-shrink: 0;">
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--gold-light); background: rgba(217, 160, 68, 0.1); padding: 4px 8px; border-radius: var(--radius-sm); border: 1px solid rgba(217, 160, 68, 0.2);">
                ${e.reward}
              </span>
            </div>
          </div>
        `}).join(``)}
    </div>
  `,e.querySelectorAll(`.filter-chip[data-cat]`).forEach(e=>{e.addEventListener(`click`,()=>{i({collectibleCategoryFilter:e.dataset.cat})})}),e.querySelectorAll(`.filter-chip[data-reg]`).forEach(e=>{e.addEventListener(`click`,()=>{i({collectibleRegionFilter:e.dataset.reg})})}),e.querySelectorAll(`[data-check-id]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.checkId;o(n)})})}var Y=[{id:`all`,label:`All Spells`},{id:`damage`,label:`Damage (Red)`,color:`#ef4444`},{id:`force`,label:`Force (Purple)`,color:`#a855f7`},{id:`control`,label:`Control (Yellow)`,color:`#eab308`},{id:`utility`,label:`Utility (Cyan)`,color:`#06b6d4`},{id:`curse`,label:`Unforgivable (Green)`,color:`#22c55e`}],X=[{id:`confringo`,name:`Confringo`,category:`damage`,type:`Damage (Red)`,cooldown:`10s`,shieldBreaker:`Red Shields`,description:`Long-range bolt that explodes on impact, dealing high thermal damage and igniting secondary targets.`,synergy:`Pairs with Glacius for massive thermal shock damage or Accio for point-blank ignition.`},{id:`diffindo`,name:`Diffindo`,category:`damage`,type:`Damage (Red)`,cooldown:`15s`,shieldBreaker:`Red Shields`,description:`A slashing slash that cuts through multiple foes in a straight line at moderate distance.`,synergy:`Cast immediately following Glacius for a 4x to 5x critical damage multiplier.`},{id:`bombarda`,name:`Bombarda`,category:`damage`,type:`Damage (Red)`,cooldown:`15s`,shieldBreaker:`Red Shields`,description:`Heavy explosive impact that blasts heavy obstacles and throws groups of enemies backward.`,synergy:`Use after Descendo when enemies are grounded to maximize splash radius.`},{id:`incendio`,name:`Incendio`,category:`damage`,type:`Damage (Red)`,cooldown:`8s`,shieldBreaker:`Red Shields`,description:`A close-quarters burst of intense flame. Critical for igniting Inferi and web clearing.`,synergy:`Accio brings distant targets into point-blank range for maximum fire spread.`},{id:`accio`,name:`Accio`,category:`force`,type:`Force (Purple)`,cooldown:`8s`,shieldBreaker:`Purple Shields`,description:`Summons objects and foes toward you. Also activates guide mechanisms, bridges, and platforms.`,synergy:`Prime setup spell. Follow immediately with Incendio or Descendo.`},{id:`depulso`,name:`Depulso`,category:`force`,type:`Force (Purple)`,cooldown:`10s`,shieldBreaker:`Purple Shields`,description:`Repels objects and enemies with tremendous kinetic force. Launches enemies off cliffs.`,synergy:`Use in puzzle chambers to push enchanted blocks across gaps.`},{id:`descendo`,name:`Descendo`,category:`force`,type:`Force (Purple)`,cooldown:`10s`,shieldBreaker:`Purple Shields`,description:`Slams airborne objects and targets violently onto the stone floor.`,synergy:`Cast while target is suspended in mid-air via Levioso for massive slam damage.`},{id:`flipendo`,name:`Flipendo`,category:`force`,type:`Force (Purple)`,cooldown:`5s`,shieldBreaker:`Purple Shields`,description:`Flips targets and objects upward and backward. Essential for Merlin trial dice alignment.`,synergy:`Disrupts Dugbog lunges; hitting Dugbogs by the tongue deals lethal damage.`},{id:`levioso`,name:`Levioso`,category:`control`,type:`Control (Yellow)`,cooldown:`8s`,shieldBreaker:`Yellow Shields`,description:`Levitates targets and objects into the air, leaving them helpless and vulnerable.`,synergy:`Combine with 3 standard Basic Casts, followed by Descendo.`},{id:`glacius`,name:`Glacius`,category:`control`,type:`Control (Yellow)`,cooldown:`10s`,shieldBreaker:`Yellow Shields`,description:`Freezes enemies solid, stopping all attacks and dramatically amplifying next damage strike.`,synergy:`Pair with Diffindo or Bombarda for maximum single-target burst.`},{id:`arresto-momentum`,name:`Arresto Momentum`,category:`control`,type:`Control (Yellow)`,cooldown:`15s`,shieldBreaker:`Yellow Shields`,description:`Slows target velocity to near zero. Freezes swinging pendulums in clock towers.`,synergy:`Freezes an elite troll or animagus while dealing with surrounding adds.`},{id:`transformation`,name:`Transformation`,category:`control`,type:`Control (Yellow)`,cooldown:`20s`,shieldBreaker:`Yellow Shields`,description:`Transforms enemies and inanimate objects into alternate forms, such as explosive barrels.`,synergy:`Turn an enemy into a barrel, then cast Ancient Magic Throw to crush another foe.`},{id:`lumos`,name:`Lumos`,category:`utility`,type:`Utility (Cyan)`,cooldown:`0s`,shieldBreaker:`Environment`,description:`Illuminates dark dungeons, guides golden moths, and repels Devil's Snare vines.`,synergy:`Essential for Moth Frames and illuminating hidden cavern inscriptions.`},{id:`disillusionment`,name:`Disillusionment`,category:`utility`,type:`Utility (Cyan)`,cooldown:`0s`,shieldBreaker:`Environment`,description:`Blends your body into the surroundings, providing complete invisibility to open Eye Chests.`,synergy:`Allows sneak attacks with Petrificus Totalus for instant one-shot takedowns.`},{id:`avada-kedavra`,name:`Avada Kedavra`,category:`curse`,type:`Unforgivable (Green)`,cooldown:`90s`,shieldBreaker:`Breaks All`,description:`The Killing Curse. Instantly kills any enemy regardless of health, level, or boss tier.`,synergy:`With Avada Kedavra Mastery talent, kills all cursed enemies across the entire battlefield.`},{id:`crucio`,name:`Crucio`,category:`curse`,type:`Unforgivable (Green)`,cooldown:`20s`,shieldBreaker:`Breaks All`,description:`Inflicts excruciating pain over time and curses the victim. Basic attacks spread curse to others.`,synergy:`Use Crucio Mastery to tag multiple enemies with the curse icon, priming Avada Kedavra.`},{id:`imperio`,name:`Imperio`,category:`curse`,type:`Unforgivable (Green)`,cooldown:`30s`,shieldBreaker:`Breaks All`,description:`Temporarily forces the enemy to fight as your loyal companion with boosted damage.`,synergy:`Cast on heavy executioners or armored trolls to clear mobs without taking damage.`}],re=[{title:`Glacial Shatter Burst`,rating:`S-Tier Damage`,sequence:[`Glacius`,`Diffindo`],effect:`Glacius amplifies the subsequent physical damage by up to 500%. Diffindo slices through the frozen enemy for guaranteed massive critical damage.`},{title:`Aerial Gravity Slam`,rating:`A-Tier Control`,sequence:[`Levioso`,`Basic Cast x3`,`Accio`,`Descendo`],effect:`Juggles the enemy indefinitely in mid-air, resetting fall physics before slamming them headfirst into the stone floor.`},{title:`Pyrotechnic Funnel`,rating:`A-Tier AoE`,sequence:[`Accio`,`Incendio`,`Depulso`],effect:`Pulls a crowd into flame radius, burns with Incendio, then blasts burning targets away into walls or surrounding hazards.`},{title:`Curse Chain Wipeout`,rating:`S-Tier Boss & Mob Clear`,sequence:[`Crucio`,`Basic Cast x4`,`Avada Kedavra`],effect:`Spreads curse marks to all surrounding enemies via Crucio Mastery, then single-casts the killing curse to eliminate every cursed foe simultaneously.`}];function ie(e){let t=r(),n=t.searchQuery.trim().toLowerCase(),a=t.spellCategoryFilter,o=X.filter(e=>{let t=!n||e.name.toLowerCase().includes(n)||e.description.toLowerCase().includes(n)||e.synergy.toLowerCase().includes(n),r=a===`all`||e.category===a;return t&&r});e.innerHTML=`
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
          ${Y.map(e=>`
            <button class="filter-chip ${a===e.id?`active`:``}" data-spell-cat="${e.id}">
              ${e.label}
            </button>
          `).join(``)}
        </div>
      </div>
    </div>

    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
        <span>⚡</span> High-Impact Combat Synergies
      </h3>

      <div class="grid-cards" style="grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));">
        ${re.map(e=>`
          <div class="synergy-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: #fff; font-size: 1rem;">${e.title}</span>
              <span class="glass-pill glass-pill-gold" style="font-size: 0.72rem; padding: 2px 8px;">${e.rating}</span>
            </div>

            <div class="synergy-pills">
              ${e.sequence.map((t,n)=>`
                <span class="glass-pill" style="font-size: 0.76rem; background: rgba(255, 255, 255, 0.08);">${t}</span>
                ${n<e.sequence.length-1?`<span style="color: var(--gold-light); font-size: 0.8rem;">➔</span>`:``}
              `).join(``)}
            </div>

            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
              ${e.effect}
            </p>
          </div>
        `).join(``)}
      </div>
    </div>

    <div>
      <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
        <span>📜</span> Spell Grimoire (${o.length})
      </h3>

      <div class="grid-cards" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
        ${o.map(e=>{let t=`#ef4444`;return e.category===`force`&&(t=`#a855f7`),e.category===`control`&&(t=`#eab308`),e.category===`utility`&&(t=`#06b6d4`),e.category===`curse`&&(t=`#22c55e`),`
            <div class="glass-card" style="padding: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <div>
                  <h4 style="font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 4px;">
                    ${e.name}
                  </h4>
                  <span class="spell-badge-type" style="background: ${t}22; color: ${t}; border: 1px solid ${t}55;">
                    ${e.type}
                  </span>
                </div>

                <div style="text-align: right;">
                  <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Cooldown</span>
                  <div style="font-weight: 700; color: #fff; font-size: 0.95rem;">${e.cooldown}</div>
                </div>
              </div>

              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
                ${e.description}
              </p>

              <div style="padding: 10px 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: var(--radius-md);">
                <div style="font-size: 0.72rem; color: var(--gold-light); font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">
                  ⚔️ Combat Synergy
                </div>
                <div style="font-size: 0.82rem; color: #cbd5e1; line-height: 1.4;">
                  ${e.synergy}
                </div>
              </div>

              <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; color: var(--text-muted);">
                <span>Breaks:</span>
                <span style="font-weight: 600; color: #fff;">${e.shieldBreaker}</span>
              </div>
            </div>
          `}).join(``)}
      </div>
    </div>
  `,e.querySelectorAll(`[data-spell-cat]`).forEach(e=>{e.addEventListener(`click`,()=>{i({spellCategoryFilter:e.dataset.spellCat})})})}function Z(e){let t=r().activeTab||`overview`;e.innerHTML=`
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
        <button class="hub-tab-btn ${t===`overview`?`active`:``}" data-tab="overview">
          <span>Overview</span>
        </button>
        <button class="hub-tab-btn ${t===`puzzles`?`active`:``}" data-tab="puzzles">
          <span>Puzzles & Mysteries</span>
        </button>
        <button class="hub-tab-btn ${t===`arithmancy`?`active`:``}" data-tab="arithmancy">
          <span>Arithmancy Calculator</span>
        </button>
        <button class="hub-tab-btn ${t===`collectibles`?`active`:``}" data-tab="collectibles">
          <span>Collectibles Tracker</span>
        </button>
        <button class="hub-tab-btn ${t===`spells`?`active`:``}" data-tab="spells">
          <span>Spell Codex</span>
        </button>
      </div>
    </div>

    <div id="hub-tab-content"></div>
  `;let n=e.querySelector(`#hub-tab-content`);t===`overview`?ae(n):t===`puzzles`?oe(n):t===`arithmancy`?q(n):t===`collectibles`?J(n):t===`spells`&&ie(n),e.querySelector(`#hub-back-btn`)?.addEventListener(`click`,()=>{i({view:`showcase`})}),e.querySelectorAll(`.hub-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{i({activeTab:e.dataset.tab})})})}function ae(e){e.innerHTML=`
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
          ${h.find(e=>e.id===`merlin-trials-overview`).archetypes.map(e=>`
            <div style="padding: 16px; border-radius: var(--radius-md); background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08);">
              <h5 style="color: var(--gold-light); font-size: 1rem; font-weight: 700; margin-bottom: 6px;">
                ${e.name}
              </h5>
              <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 8px;">
                ${e.spells.map(e=>`
                  <span class="glass-pill" style="font-size: 0.68rem; padding: 1px 6px;">${e}</span>
                `).join(``)}
              </div>
              <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">
                ${e.method}
              </p>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `,e.querySelector(`#goto-arithmancy-tab`)?.addEventListener(`click`,()=>{i({activeTab:`arithmancy`})}),e.querySelector(`#goto-demiguise-tab`)?.addEventListener(`click`,()=>{i({activeTab:`collectibles`,collectibleCategoryFilter:`Demiguise`})}),e.querySelector(`#goto-chests-tab`)?.addEventListener(`click`,()=>{i({activeTab:`collectibles`,collectibleCategoryFilter:`Eye Chest`})})}function oe(e){e.innerHTML=`
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
      ${h.filter(e=>e.id!==`merlin-trials-overview`).map(e=>`
        <div class="glass-card" style="padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <span class="glass-pill glass-pill-gold">${e.category}</span>
              <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">Diff: ${e.difficulty}</span>
            </div>

            <h3 style="font-family: var(--font-serif); font-size: 1.35rem; font-weight: 700; color: #fff; margin-bottom: 8px;">
              ${e.title}
            </h3>

            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 14px;">
              ${e.summary}
            </p>

            <div style="margin-bottom: 14px; padding: 10px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: var(--radius-md);">
              <div style="font-size: 0.72rem; color: var(--gold-light); font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">
                Required Spells
              </div>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${e.spells.map(e=>`
                  <span class="glass-pill" style="font-size: 0.72rem; padding: 2px 8px;">${e}</span>
                `).join(``)}
              </div>
            </div>

            <div style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 16px;">
              <strong>Core Mechanism:</strong> ${e.solution}
            </div>
          </div>

          <button class="glass-button open-puzzle-guide-btn" data-guide-id="${e.id}" style="width: 100%;">
            View Step-by-Step Walkthrough ➔
          </button>
        </div>
      `).join(``)}
    </div>
  `,e.querySelectorAll(`.open-puzzle-guide-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=h.find(t=>t.id===e.dataset.guideId);t&&l({title:t.title,category:t.category,steps:t.steps,solution:t.solution,reward:t.reward,spells:t.spells})})})}function se(e){let t=r().activeModal;t?(e.innerHTML=`
    <div class="modal-backdrop" id="modal-backdrop-el">
      <div class="modal-dialog">
        <button class="modal-close-btn" id="modal-close-btn">&times;</button>

        <div class="glass-pill glass-pill-gold" style="margin-bottom: 8px;">
          ${t.category||`Guide Walkthrough`}
        </div>

        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff; margin-bottom: 12px;">
          ${t.title}
        </h2>

        ${t.spells?`
          <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px;">
            ${t.spells.map(e=>`
              <span class="glass-pill" style="font-size: 0.72rem; padding: 2px 8px;">${e}</span>
            `).join(``)}
          </div>
        `:``}

        <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
          ${t.solution||``}
        </div>

        ${t.steps&&t.steps.length?`
          <div style="margin-bottom: 24px;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--gold-light); margin-bottom: 12px;">
              Sequential Instructions
            </h4>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${t.steps.map((e,t)=>`
                <div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px; border-radius: var(--radius-md); background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06);">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: rgba(217, 160, 68, 0.2); border: 1px solid rgba(217, 160, 68, 0.4); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; color: var(--gold-light); flex-shrink: 0;">
                    ${t+1}
                  </span>
                  <span style="font-size: 0.9rem; color: #e2e8f0; line-height: 1.5;">${e}</span>
                </div>
              `).join(``)}
            </div>
          </div>
        `:``}

        ${t.reward?`
          <div style="padding: 12px 16px; border-radius: var(--radius-md); background: rgba(217, 160, 68, 0.12); border: 1px solid rgba(217, 160, 68, 0.3); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.82rem; text-transform: uppercase; color: var(--gold-light); font-weight: 700;">Guaranteed Reward</span>
            <span style="font-weight: 700; color: #fff; font-size: 0.92rem;">${t.reward}</span>
          </div>
        `:``}
      </div>
    </div>
  `,e.querySelector(`#modal-close-btn`)?.addEventListener(`click`,u),e.querySelector(`#modal-backdrop-el`)?.addEventListener(`click`,e=>{e.target.id===`modal-backdrop-el`&&u()})):e.innerHTML=``}var Q=document.getElementById(`app`);function $(){let e=r();Q.querySelector(`#nav-mount`)||(Q.innerHTML=`
    <div id="nav-mount"></div>
    <main class="app-container" id="main-content"></main>
    <div id="modal-mount"></div>
    <footer class="app-container site-footer">
      <div>
        <strong>Game Codex</strong> &mdash; Apple Glass Companion Suite
      </div>
      <div>
        Designed for comprehensive in-game discovery
      </div>
    </footer>
  `);let t=document.getElementById(`nav-mount`),n=document.getElementById(`main-content`),i=document.getElementById(`modal-mount`);d(t),e.view===`showcase`?m(n):e.view===`hogwarts`&&Z(n),se(i)}document.addEventListener(`keydown`,e=>{e.key===`Escape`&&u()}),a($),$();