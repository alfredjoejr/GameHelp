(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}})();const C="gamecodex_hogwarts_progress_v1",z=()=>{try{const e=localStorage.getItem(C);return e?JSON.parse(e):{}}catch{return{}}},h={view:"showcase",selectedGameId:"hogwarts-legacy",activeTab:"overview",searchQuery:"",catalogCategory:"all",collectibleRegionFilter:"all",collectibleCategoryFilter:"all",spellCategoryFilter:"all",checkedItems:z(),activeModal:null},y=new Set,u=()=>h,c=e=>{Object.assign(h,e),y.forEach(i=>i(h))},T=e=>(y.add(e),()=>y.delete(e)),D=e=>{const i={...h.checkedItems};i[e]?delete i[e]:i[e]=!0;try{localStorage.setItem(C,JSON.stringify(i))}catch{}c({checkedItems:i})},A=e=>!!h.checkedItems[e],b=e=>{if(!e||!e.length)return{checked:0,total:0,percent:0};let i=0;e.forEach(s=>{h.checkedItems[s.id]&&i++});const a=Math.round(i/e.length*100);return{checked:i,total:e.length,percent:a}},E=e=>{c({activeModal:e})},f=()=>{c({activeModal:null})};function H(e){const i=u();e.innerHTML=`
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
              value="${i.searchQuery||""}"
            />
          </div>

          <button class="glass-button ${i.view==="showcase"?"active":""}" id="nav-catalog-btn">
            Catalogue
          </button>

          <button class="glass-button glass-button-primary" id="nav-hogwarts-direct-btn">
            Hogwarts Guide
          </button>
        </div>
      </nav>
    </header>
  `;const a=e.querySelector("#nav-brand-btn"),s=e.querySelector("#nav-catalog-btn"),o=e.querySelector("#nav-hogwarts-direct-btn"),t=e.querySelector("#global-search-input");a.addEventListener("click",()=>{c({view:"showcase",searchQuery:""})}),s.addEventListener("click",()=>{c({view:"showcase"})}),o.addEventListener("click",()=>{c({view:"hogwarts",activeTab:"overview"})}),t.addEventListener("input",n=>{c({searchQuery:n.target.value})})}const M=[{id:"hogwarts-legacy",title:"Hogwarts Legacy",subtitle:"The Wizarding World Companion",genre:"Action RPG / Open World",developer:"Avalanche Software",publisher:"Warner Bros. Games",year:"2023",status:"Active Guide",badge:"Available Now",rating:"9.4",banner:"/assets/hogwarts.jpg",accent:"rgba(217, 160, 68, 0.8)",themeColor:"#d9a044",description:"Master the 1800s Wizarding World. Solve intricate Arithmancy beast doors, conquer every Merlin Trial archetype, discover Demiguise moons at dusk, and unlock the Relic House robes.",highlights:[{label:"Puzzles Solved",value:"9 Archetypes"},{label:"Demiguise Moons",value:"33 Total"},{label:"Daedalian Keys",value:"16 Keys"},{label:"Spell Combos",value:"26 Synergies"}],features:["Interactive Door Arithmancy Calculator with Beast Symbols","Comprehensive Merlin Trials Visual Playbook","Collectibles Tracker with Region Filters & Persistence","Combat Spell Synergy & Cooldown Matrix"]},{id:"elden-ring",title:"Elden Ring: Shadow of the Erdtree",subtitle:"Lands Between Codex",genre:"Soulslike / Dark Fantasy",developer:"FromSoftware",publisher:"Bandai Namco",year:"2024",status:"Coming Soon",badge:"In Development",rating:"9.8",banner:"/assets/eldenring.jpg",accent:"rgba(235, 196, 85, 0.8)",themeColor:"#ebc455",description:"Prepare for comprehensive coverage of the Lands of Shadow, legacy dungeon puzzle paths, Scadutree fragment routes, and NPC questline trees.",highlights:[{label:"Boss Guides",value:"165 Total"},{label:"Scadutree Fragments",value:"50 Spots"},{label:"Catacomb Levers",value:"48 Solved"},{label:"Talisman Builds",value:"35 Synergies"}],features:["Catacomb maze floorplans & hidden lever locations","Interactive NPC quest branching tracker","Scadutree Fragment & Revered Spirit Ash interactive map"]},{id:"cyberpunk-2077",title:"Cyberpunk 2077: Phantom Liberty",subtitle:"Night City Field Manual",genre:"Action RPG / Cyberpunk",developer:"CD Projekt Red",publisher:"CD Projekt",year:"2023",status:"Coming Soon",badge:"In Development",rating:"9.2",banner:"/assets/cyberpunk.jpg",accent:"rgba(0, 240, 255, 0.8)",themeColor:"#00f0ff",description:"Navigate Dogtown and Night City with precision. Includes Breach Protocol optimal route solving, Iconic weapon blueprints, and Tarot mural decoders.",highlights:[{label:"Tarot Murals",value:"24 Locations"},{label:"Iconic Caches",value:"85 Weaps"},{label:"Cyberware Builds",value:"40 Sets"},{label:"NCPD Scanners",value:"112 Solved"}],features:["Breach Protocol buffer puzzle solver","Iconic weapon catalog with drop locations","Relic perk point optimizer"]}],w=[{id:"demiguise-faculty-tower",title:"Demiguise Statue - Faculty Tower",category:"Demiguise",region:"Hogwarts Castle",location:"South Wing Faculty Tower, Gladwin Moon quarters",nightOnly:!0,alohomoraLevel:1,tip:"Required during 'The Caretaker's Lunar Lament' quest. Change time to night in the map menu.",reward:"Alohomora Upgrade Progress"},{id:"demiguise-divination-classroom",title:"Demiguise Statue - Divination Classroom",category:"Demiguise",region:"Hogwarts Castle",location:"Top of the ladder spiral staircase, Professor Onai desk",nightOnly:!0,alohomoraLevel:1,tip:"Climb the wooden ladder into the attic classroom and check the back desk.",reward:"Alohomora Upgrade Progress"},{id:"demiguise-potions-classroom",title:"Demiguise Statue - Potions Storage",category:"Demiguise",region:"Hogwarts Castle",location:"Through the locked side door near Sharp's classroom",nightOnly:!0,alohomoraLevel:1,tip:"Unlock the gate and proceed along the narrow stone corridor to the desk.",reward:"Alohomora Upgrade Progress"},{id:"demiguise-great-hall",title:"Demiguise Statue - Great Hall Corner",category:"Demiguise",region:"Hogwarts Castle",location:"Locked room in the southeast corner behind the High Table",nightOnly:!0,alohomoraLevel:1,tip:"Turn right after entering the Great Hall; pick the level 1 lock.",reward:"Alohomora Upgrade Progress"},{id:"demiguise-tomes-scrolls",title:"Demiguise Statue - Tomes & Scrolls",category:"Demiguise",region:"Hogsmeade",location:"Behind Thomas Brown's counter in the back bedroom",nightOnly:!0,alohomoraLevel:1,tip:"Walk past the counter and behind the folding privacy screen.",reward:"Alohomora Upgrade Progress"},{id:"demiguise-three-broomsticks",title:"Demiguise Statue - Three Broomsticks Loft",category:"Demiguise",region:"Hogsmeade",location:"Top floor private room above Sirona's tavern",nightOnly:!0,alohomoraLevel:1,tip:"Ascend all flight of stairs to the very attic door.",reward:"Alohomora Upgrade Progress"},{id:"demiguise-hog-head",title:"Demiguise Statue - Hog's Head Storage",category:"Demiguise",region:"Hogsmeade",location:"Back storage room behind the bar counter",nightOnly:!0,alohomoraLevel:1,tip:"Head behind the barkeep into the adjacent crate room.",reward:"Alohomora Upgrade Progress"},{id:"demiguise-brocburrow",title:"Demiguise Statue - Brocburrow Cottage",category:"Demiguise",region:"The Highlands",location:"North of the central fountain in a thatched roof cottage",nightOnly:!0,alohomoraLevel:1,tip:"Check the bedside table inside the small cottage.",reward:"Alohomora Upgrade Progress"},{id:"demiguise-keenbridge",title:"Demiguise Statue - Keenbridge Residence",category:"Demiguise",region:"The Highlands",location:"House with clothes hanging outside near the river",nightOnly:!0,alohomoraLevel:1,tip:"Unlock the wooden door; statue rests on a small shelf near the kitchen.",reward:"Alohomora Upgrade Progress"},{id:"daedalian-astronomy-tower",title:"Daedalian Key - Astronomy Tower",category:"Daedalian Key",region:"Hogwarts Castle",location:"Floo Flame staircase ascending toward the top platform",nightOnly:!1,alohomoraLevel:0,tip:"Follow key down into the classroom with the planetary globes. Slap key when crossing keyhole.",reward:"House Token (1 of 16)"},{id:"daedalian-central-hall",title:"Daedalian Key - Central Hall Fountain",category:"Daedalian Key",region:"Hogwarts Castle",location:"Near the greenhouse exit stairs in Central Hall",nightOnly:!1,alohomoraLevel:0,tip:"Key leads toward the Potions staircase cabinet.",reward:"House Token (2 of 16)"},{id:"daedalian-library",title:"Daedalian Key - Library Annex",category:"Daedalian Key",region:"Hogwarts Castle",location:"Between bookshelves on the main floor near central desk",nightOnly:!1,alohomoraLevel:0,tip:"Guides you straight to the cabinet beside the portrait archway.",reward:"House Token (3 of 16)"},{id:"daedalian-quad-courtyard",title:"Daedalian Key - Quad Courtyard",category:"Daedalian Key",region:"Hogwarts Castle",location:"Archway leading down to the boathouse path",nightOnly:!1,alohomoraLevel:0,tip:"Flies to the cabinet under the stone arch staircase.",reward:"House Token (4 of 16)"},{id:"eye-chest-library-annex",title:"Disillusionment Eye Chest - Library Balcony",category:"Eye Chest",region:"Hogwarts Castle",location:"Upper floor overlooking Central Hall",nightOnly:!1,alohomoraLevel:0,tip:"Cast Disillusionment while out of the eye's viewcone, then sneak up and press open.",reward:"500 Galleons"},{id:"eye-chest-hogsmeade-bridge",title:"Disillusionment Eye Chest - Hogsmeade Mill Bridge",category:"Eye Chest",region:"Hogsmeade",location:"Beneath the stone watermill bridge near the northern edge",nightOnly:!1,alohomoraLevel:0,tip:"Activate stealth before stepping onto the wooden boardwalk.",reward:"500 Galleons"},{id:"eye-chest-gladrags",title:"Disillusionment Eye Chest - Gladrags Alley",category:"Eye Chest",region:"Hogsmeade",location:"Narrow alleyway between Gladrags and Dervish & Banges",nightOnly:!1,alohomoraLevel:0,tip:"Cast Disillusionment on the street, then duck into the alley.",reward:"500 Galleons"},{id:"ancient-magic-forbidden-forest",title:"Ancient Magic Hotspot - West Forbidden Forest",category:"Ancient Magic",region:"The Highlands",location:"Ruined stone tower overrun by Thornback spiders",nightOnly:!1,alohomoraLevel:0,tip:"Clear the webs with Incendio. Collect the 3 floating purple traces via high wooden beam.",reward:"+1 Ancient Magic Meter Segment"},{id:"ancient-magic-keenbridge-ruins",title:"Ancient Magic Hotspot - Keenbridge River Castle",category:"Ancient Magic",region:"The Highlands",location:"Crumbling tower on the hillside southwest of town",nightOnly:!1,alohomoraLevel:0,tip:"Pull loose blocks with Accio to form stepping platforms to the highest trace.",reward:"+1 Ancient Magic Meter Segment"}];function B(e){var n,r;const i=u(),a=i.searchQuery.trim().toLowerCase(),s=i.catalogCategory,o=M.filter(l=>{const g=!a||l.title.toLowerCase().includes(a)||l.genre.toLowerCase().includes(a)||l.description.toLowerCase().includes(a),p=s==="all"||s==="rpg"&&l.genre.toLowerCase().includes("rpg")||s==="open-world"&&l.genre.toLowerCase().includes("open world")||s==="action"&&l.genre.toLowerCase().includes("action");return g&&p}),t=b(w);e.innerHTML=`
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
        <button class="filter-chip ${s==="all"?"active":""}" data-cat="all">All Titles</button>
        <button class="filter-chip ${s==="rpg"?"active":""}" data-cat="rpg">RPG</button>
        <button class="filter-chip ${s==="open-world"?"active":""}" data-cat="open-world">Open World</button>
        <button class="filter-chip ${s==="action"?"active":""}" data-cat="action">Action</button>
      </div>
    </div>

    <div class="grid-cards">
      ${o.map(l=>{const g=l.id==="hogwarts-legacy";return`
          <div class="glass-card" data-game-id="${l.id}">
            <div class="card-media">
              <img src="${l.banner}" alt="${l.title}" loading="lazy"/>
              <div class="card-media-overlay"></div>
              
              <div class="card-badge-pos">
                <span class="glass-pill ${g?"glass-pill-active":"glass-pill-queue"}">
                  ${l.badge}
                </span>
              </div>

              <div class="card-rating-pos">
                <span>★</span> ${l.rating}
              </div>
            </div>

            <div class="card-body">
              <div class="card-header-group">
                <span class="card-subtitle">${l.genre}</span>
                <h3 class="card-title">${l.title}</h3>
              </div>

              <p class="card-description">${l.description}</p>

              <div class="card-specs">
                ${l.highlights.map(p=>`
                  <div class="spec-cell">
                    <span class="spec-title">${p.label}</span>
                    <span class="spec-val">${p.value}</span>
                  </div>
                `).join("")}
              </div>

              ${g?`
                <div style="background: rgba(217, 160, 68, 0.08); border: 1px solid rgba(217, 160, 68, 0.25); border-radius: var(--radius-md); padding: 12px 14px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 6px;">
                    <span style="color: var(--gold-light); font-weight: 600;">Your Collectibles Progress</span>
                    <span style="font-weight: 700; color: #fff;">${t.checked}/${t.total} (${t.percent}%)</span>
                  </div>
                  <div class="checklist-progress-bar" style="margin: 0;">
                    <div class="checklist-progress-fill" style="width: ${t.percent}%;"></div>
                  </div>
                </div>
              `:""}

              <div class="card-footer">
                <span style="font-size: 0.8rem; color: var(--text-muted);">${l.developer}</span>
                
                ${g?`
                  <button class="glass-button glass-button-primary game-launch-btn" data-id="${l.id}">
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
        `}).join("")}
    </div>
  `,(n=e.querySelector("#hero-hogwarts-btn"))==null||n.addEventListener("click",()=>{c({view:"hogwarts",activeTab:"overview"})}),(r=e.querySelector("#hero-puzzles-btn"))==null||r.addEventListener("click",()=>{c({view:"hogwarts",activeTab:"arithmancy"})}),e.querySelectorAll(".filter-chip").forEach(l=>{l.addEventListener("click",()=>{c({catalogCategory:l.dataset.cat})})}),e.querySelectorAll(".game-launch-btn").forEach(l=>{l.addEventListener("click",()=>{c({view:"hogwarts",activeTab:"overview"})})})}const v=[{value:0,name:"Demiguise",meaning:"Zero (Invisible Beast)",icon:"0️⃣",glyph:"🦉"},{value:1,name:"Unicorn",meaning:"One (Single Horn)",icon:"1️⃣",glyph:"🦄"},{value:2,name:"Graphorn",meaning:"Two (Dual Horns)",icon:"2️⃣",glyph:"🦏"},{value:3,name:"Runespoor",meaning:"Three (Three Heads)",icon:"3️⃣",glyph:"🐍"},{value:4,name:"Fwooper",meaning:"Four (Singing Owl)",icon:"4️⃣",glyph:"🦜"},{value:5,name:"Quintaped",meaning:"Five (Five Legs)",icon:"5️⃣",glyph:"🦀"},{value:6,name:"Salamander",meaning:"Six (Fire Lizard)",icon:"6️⃣",glyph:"🦎"},{value:7,name:"Manticore",meaning:"Seven (Spiked Tail)",icon:"7️⃣",glyph:"🦂"},{value:8,name:"Acromantula",meaning:"Eight (Eight Legs)",icon:"8️⃣",glyph:"🕷️"},{value:9,name:"Hydra",meaning:"Nine (Nine Heads)",icon:"9️⃣",glyph:"🐉"}],x=[{id:"arithmancy-doors",title:"Arithmancy Door Numbers",category:"Math & Symbols",spells:["None Required (Pure Deduction)"],difficulty:"Medium",reward:"Rare Gear, House Tokens, Collection Chests",summary:"Hogwarts features 12 sealed Arithmancy doors bordered with 10 beast carvings numbered sequentially 0 to 9.",solution:"The large number in the center circle equals the sum of the three surrounding points. One point is an integer, one is an animal glyph, and the third is a question mark (? or ??). Subtract known values from the center target to reveal the missing beast value, then roll the matching wall dial.",interactiveType:"arithmancy-tool",steps:["Face the door and read the top triangle: Center target = Tip + Left + Right.","Identify the beast value (e.g., Unicorn is 1, Hydra is 9, Quintaped is 5).","Calculate the missing value: Target - Number - Beast Value = Required Animal.","Locate the single '?' dial nearby and roll it to that beast.","Repeat calculation for the bottom '??' triangle and roll the double '??' dial.","Return to the door and interact to open the chamber."]},{id:"viaduct-bridge",title:"Viaduct Bridge Fire Grate",category:"Mechanisms",spells:["Incendio","Confringo"],difficulty:"Easy",reward:"Legendary Gear & 3 Collection Chests",summary:"Connects the Library Annex to the Great Hall. Four unlit braziers line the stone walkway beside a sealed bronze manhole.",solution:"Look at the floor crest near the northwest bridge corner. Each symbol (Key, Shield, Double Circle, Triangle) is paired with a Roman numeral (I, II, III, IV). Light all four braziers with fire, then interact with the gear beneath each brazier until the Roman numeral matches its symbol.",steps:["Check the bronze circular plate on the floor for the pairing guide.","Cast Incendio on all 4 stone braziers so the mechanisms can turn.","Triangle symbol = Roman numeral I","Two overlapping circles = Roman numeral II","Key symbol = Roman numeral III","Spiked crest / sun = Roman numeral IV","Once matched, the manhole unlocks, dropping you into the aqueduct chamber below."]},{id:"merlin-trials-overview",title:"The 9 Merlin Trial Archetypes",category:"Exploration",spells:["Accio","Depulso","Flipendo","Incendio","Confringo","Lumos","Reparo"],difficulty:"Varies",reward:"Permanent Gear Inventory Slot Expansions",summary:"Created by Merlin of Slytherin. Scattered across 95 Highland locations, activated with Mallowsweet leaves.",archetypes:[{name:"Giant Stone Sphere",spells:["Depulso","Accio","Wingardium Leviosa"],method:"Locate the massive stone ball on an elevated hill and guide it into the concave bowl carved into the ground."},{name:"Flipendo Cube Alignment",spells:["Flipendo"],method:"Stand in front of pillars with stacked dice. Cast Flipendo from different angles so the top dice symbol matches the bottom pillar symbol orientation."},{name:"Timed Torch Braziers",spells:["Confringo","Incendio"],method:"Identify 3 torches on pillars of descending heights. Light the tallest one first and immediately sprint/shoot the remaining two before they submerge."},{name:"Moths to Hollow Cubes",spells:["Lumos"],method:"Find 3 stone blocks with crystals inside. Cast Lumos near hovering blue moths in nearby bushes to lead three groups into their corresponding blocks."},{name:"Stone Pillar Parkour",spells:["Movement Only"],method:"Climb atop the first stone monolith. Jump from pillar to pillar until reaching the finish without falling onto the ground."},{name:"Shattered Statues",spells:["Reparo"],method:"Three stone statues instantly explode upon trial start. Track down the rubble pieces and mend all three with Reparo."},{name:"Small Marbles into Plates",spells:["Accio","Wingardium Leviosa"],method:"Three indented stone platforms require 5 small stone balls each. Pull the balls out from crevices and deposit them onto the pads."},{name:"Exploding Rune Stones",spells:["Confringo","Bombarda"],method:"Five stone orbs perched atop pillars or hidden behind breakable vines must be destroyed."},{name:"Butterfly Swarm Escort",spells:["Lumos"],method:"Lumos attracts the swarm to your wand; guide them safely into the illuminated garden pedestal."}]},{id:"moth-mirrors",title:"Moth to the Frame Mirrors",category:"Hidden Chambers",spells:["Lumos"],difficulty:"Easy",reward:"Field Guide Pages",summary:"Ornate silver and black glass mirror frames hanging throughout the castle that show blank obsidian surfaces.",solution:"Cast Lumos directly in front of the mirror to project a black-and-white landscape memory. Identify the depicted architectural feature nearby, walk to it, find the golden moth perched on a pillar or wall, cast Lumos to draw the moth to your wand tip, and escort it back to the frame.",steps:["Stand before the mirror and cast Lumos to reveal the location hint.","Explore the immediate 30-meter radius for matching stairs, tapestries, or statues.","Cast Lumos near the moth; it will tether to your wand.","Walk back to the mirror and cancel Lumos or basic cast to snap the moth into the brooch."]},{id:"clock-tower-doors",title:"Clock Tower Pendulum Doors",category:"Mechanisms",spells:["Arresto Momentum","Glacius"],difficulty:"Medium",reward:"Secret Castle Chambers & Rare Loot",summary:"The Hospital Wing and Defence Against the Dark Arts courtyard share a colossal ticking pendulum with 4 brass sigils on the guide bar.",solution:"Each floor has a locked iron gate marked with one of the 4 symbols (Unicorn, Owl, Two Serpents, Chimera). Freeze the swinging pendulum with Arresto Momentum or Glacius precisely when it aligns with that symbol to unlock the corresponding floor gate.",steps:["Observe the symbol etched on the barred door you want to enter.","Position yourself on the wooden walkway facing the pendulum rod.","Wait for the pendulum weight to sweep directly over the matching glyph.","Cast Arresto Momentum to freeze the pendulum in place.","Dash through the door before the freeze effect expires."]},{id:"chess-rooms",title:"Transfiguration Chess Puzzles",category:"Dungeon Secrets",spells:["Transformation","Wingardium Leviosa","Depulso"],difficulty:"Hard",reward:"Collection Chests & Highlands Lore",summary:"Hidden inside Treasure Vaults in Feldcroft, Cragcroftshire, and Coast caverns featuring a life-sized stone chessboard.",solution:"Cast Revelio to find a miscellaneous object (urn, stone vase, chair) emitting a white aura. Cast Transformation to turn the object into the missing chess piece (Bishop, Knight, or Queen), then use Wingardium Leviosa to position it for an unavoidable checkmate against the enemy King.",steps:["Enter the vault and inspect the enemy King on the board.","Locate the loose urn or cauldron in the corners using Revelio.","Cast Transformation on the urn to convert it into a chess piece.","Move the piece into the checkmate position (e.g., Bishop diagonal to King).","The enemy King shatters, revealing the chest."]}];function I(e){let i=21,a=11,s=2,o=17,t=5,n=3;function r(g,p,d){const m=g-(p+d),$=v.find(L=>L.value===m);return{value:m,isValid:m>=0&&m<=9,beast:$||{name:"Out of Range",glyph:"❓"}}}function l(){const g=r(i,a,s),p=r(o,t,n);e.innerHTML=`
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
            ${v.map(d=>`
              <div class="beast-badge" title="${d.meaning}">
                <div class="beast-glyph">${d.glyph}</div>
                <div class="beast-num">${d.value}</div>
                <div class="beast-name">${d.name}</div>
              </div>
            `).join("")}
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
                <input type="number" class="calc-num-input" id="top-target-input" value="${i}" min="0" max="30"/>
              </div>

              <div class="input-group">
                <label>Known Number</label>
                <input type="number" class="calc-num-input" id="top-num-input" value="${a}" min="0" max="25"/>
              </div>

              <div class="input-group">
                <label>Beast Glyph</label>
                <select class="calc-select" id="top-beast-select">
                  ${v.map(d=>`
                    <option value="${d.value}" ${d.value===s?"selected":""}>
                      ${d.glyph} ${d.value} - ${d.name}
                    </option>
                  `).join("")}
                </select>
              </div>
            </div>

            <div class="calc-result-box">
              <div>
                <div class="calc-result-title">Roll Single '?' Dial To</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 2px;">
                  Formula: ${i} - (${a} + ${s}) = ${g.value}
                </div>
              </div>

              <div class="calc-result-val">
                ${g.isValid?`
                  <span style="font-size: 1.8rem;">${g.beast.glyph}</span>
                  <span>${g.beast.name} (${g.value})</span>
                `:`
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
                <input type="number" class="calc-num-input" id="bot-target-input" value="${o}" min="0" max="30"/>
              </div>

              <div class="input-group">
                <label>Known Number</label>
                <input type="number" class="calc-num-input" id="bot-num-input" value="${t}" min="0" max="25"/>
              </div>

              <div class="input-group">
                <label>Beast Glyph</label>
                <select class="calc-select" id="bot-beast-select">
                  ${v.map(d=>`
                    <option value="${d.value}" ${d.value===n?"selected":""}>
                      ${d.glyph} ${d.value} - ${d.name}
                    </option>
                  `).join("")}
                </select>
              </div>
            </div>

            <div class="calc-result-box">
              <div>
                <div class="calc-result-title">Roll Double '??' Dial To</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 2px;">
                  Formula: ${o} - (${t} + ${n}) = ${p.value}
                </div>
              </div>

              <div class="calc-result-val">
                ${p.isValid?`
                  <span style="font-size: 1.8rem;">${p.beast.glyph}</span>
                  <span>${p.beast.name} (${p.value})</span>
                `:`
                  <span style="color: var(--accent-damage);">Invalid Input</span>
                `}
              </div>
            </div>
          </div>
        </div>
      </div>
    `,e.querySelector("#top-target-input").addEventListener("input",d=>{i=parseInt(d.target.value,10)||0,l()}),e.querySelector("#top-num-input").addEventListener("input",d=>{a=parseInt(d.target.value,10)||0,l()}),e.querySelector("#top-beast-select").addEventListener("change",d=>{s=parseInt(d.target.value,10)||0,l()}),e.querySelector("#bot-target-input").addEventListener("input",d=>{o=parseInt(d.target.value,10)||0,l()}),e.querySelector("#bot-num-input").addEventListener("input",d=>{t=parseInt(d.target.value,10)||0,l()}),e.querySelector("#bot-beast-select").addEventListener("change",d=>{n=parseInt(d.target.value,10)||0,l()})}l()}function P(e){const i=u(),a=i.searchQuery.trim().toLowerCase(),s=i.collectibleCategoryFilter,o=i.collectibleRegionFilter,t=w.filter(r=>{const l=!a||r.title.toLowerCase().includes(a)||r.location.toLowerCase().includes(a)||r.tip.toLowerCase().includes(a),g=s==="all"||r.category===s,p=o==="all"||r.region===o;return l&&g&&p}),n=b(w);b(t),e.innerHTML=`
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
            Global Progress: ${n.checked} / ${n.total} (${n.percent}%)
          </div>
        </div>
      </div>

      <div class="checklist-progress-bar">
        <div class="checklist-progress-fill" style="width: ${n.percent}%;"></div>
      </div>

      <div class="filter-bar" style="margin-bottom: 16px;">
        <div class="filter-pills">
          <button class="filter-chip ${s==="all"?"active":""}" data-cat="all">All Types</button>
          <button class="filter-chip ${s==="Demiguise"?"active":""}" data-cat="Demiguise">Demiguise (Night Only)</button>
          <button class="filter-chip ${s==="Daedalian Key"?"active":""}" data-cat="Daedalian Key">Daedalian Keys</button>
          <button class="filter-chip ${s==="Eye Chest"?"active":""}" data-cat="Eye Chest">Eye Chests (500g)</button>
          <button class="filter-chip ${s==="Ancient Magic"?"active":""}" data-cat="Ancient Magic">Ancient Magic</button>
        </div>

        <div class="filter-pills">
          <button class="filter-chip ${o==="all"?"active":""}" data-reg="all">All Regions</button>
          <button class="filter-chip ${o==="Hogwarts Castle"?"active":""}" data-reg="Hogwarts Castle">Castle</button>
          <button class="filter-chip ${o==="Hogsmeade"?"active":""}" data-reg="Hogsmeade">Hogsmeade</button>
          <button class="filter-chip ${o==="The Highlands"?"active":""}" data-reg="The Highlands">Highlands</button>
        </div>
      </div>
    </div>

    <div>
      ${t.length===0?`
        <div style="text-align: center; padding: 48px; border-radius: var(--radius-lg); background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.1);">
          <p style="color: var(--text-secondary); font-size: 1rem;">No collectibles match your current filter selection.</p>
        </div>
      `:t.map(r=>{const l=A(r.id);return`
          <div class="checklist-item ${l?"checked":""}" data-item-id="${r.id}">
            <button class="check-box-btn" data-check-id="${r.id}" aria-label="Toggle completed">
              ${l?"✓":""}
            </button>

            <div style="flex: 1;">
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 4px;">
                <span class="checklist-title" style="font-weight: 700; font-size: 1.05rem; color: #fff;">
                  ${r.title}
                </span>

                <span class="glass-pill" style="font-size: 0.7rem; padding: 2px 8px;">
                  ${r.region}
                </span>

                ${r.nightOnly?`
                  <span class="glass-pill glass-pill-gold" style="font-size: 0.7rem; padding: 2px 8px;">
                    🌙 Night Only
                  </span>
                `:""}

                ${r.alohomoraLevel>0?`
                  <span class="glass-pill" style="font-size: 0.7rem; padding: 2px 8px; color: var(--gold-light);">
                    🔒 Alohomora Level ${r.alohomoraLevel}
                  </span>
                `:""}
              </div>

              <div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 6px;">
                📍 <strong>Location:</strong> ${r.location}
              </div>

              <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.45;">
                💡 <strong>Strategy:</strong> ${r.tip}
              </div>
            </div>

            <div style="text-align: right; flex-shrink: 0;">
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--gold-light); background: rgba(217, 160, 68, 0.1); padding: 4px 8px; border-radius: var(--radius-sm); border: 1px solid rgba(217, 160, 68, 0.2);">
                ${r.reward}
              </span>
            </div>
          </div>
        `}).join("")}
    </div>
  `,e.querySelectorAll(".filter-chip[data-cat]").forEach(r=>{r.addEventListener("click",()=>{c({collectibleCategoryFilter:r.dataset.cat})})}),e.querySelectorAll(".filter-chip[data-reg]").forEach(r=>{r.addEventListener("click",()=>{c({collectibleRegionFilter:r.dataset.reg})})}),e.querySelectorAll("[data-check-id]").forEach(r=>{r.addEventListener("click",l=>{l.stopPropagation();const g=r.dataset.checkId;D(g)})})}const F=[{id:"all",label:"All Spells"},{id:"damage",label:"Damage (Red)",color:"#ef4444"},{id:"force",label:"Force (Purple)",color:"#a855f7"},{id:"control",label:"Control (Yellow)",color:"#eab308"},{id:"utility",label:"Utility (Cyan)",color:"#06b6d4"},{id:"curse",label:"Unforgivable (Green)",color:"#22c55e"}],R=[{id:"confringo",name:"Confringo",category:"damage",type:"Damage (Red)",cooldown:"10s",shieldBreaker:"Red Shields",description:"Long-range bolt that explodes on impact, dealing high thermal damage and igniting secondary targets.",synergy:"Pairs with Glacius for massive thermal shock damage or Accio for point-blank ignition."},{id:"diffindo",name:"Diffindo",category:"damage",type:"Damage (Red)",cooldown:"15s",shieldBreaker:"Red Shields",description:"A slashing slash that cuts through multiple foes in a straight line at moderate distance.",synergy:"Cast immediately following Glacius for a 4x to 5x critical damage multiplier."},{id:"bombarda",name:"Bombarda",category:"damage",type:"Damage (Red)",cooldown:"15s",shieldBreaker:"Red Shields",description:"Heavy explosive impact that blasts heavy obstacles and throws groups of enemies backward.",synergy:"Use after Descendo when enemies are grounded to maximize splash radius."},{id:"incendio",name:"Incendio",category:"damage",type:"Damage (Red)",cooldown:"8s",shieldBreaker:"Red Shields",description:"A close-quarters burst of intense flame. Critical for igniting Inferi and web clearing.",synergy:"Accio brings distant targets into point-blank range for maximum fire spread."},{id:"accio",name:"Accio",category:"force",type:"Force (Purple)",cooldown:"8s",shieldBreaker:"Purple Shields",description:"Summons objects and foes toward you. Also activates guide mechanisms, bridges, and platforms.",synergy:"Prime setup spell. Follow immediately with Incendio or Descendo."},{id:"depulso",name:"Depulso",category:"force",type:"Force (Purple)",cooldown:"10s",shieldBreaker:"Purple Shields",description:"Repels objects and enemies with tremendous kinetic force. Launches enemies off cliffs.",synergy:"Use in puzzle chambers to push enchanted blocks across gaps."},{id:"descendo",name:"Descendo",category:"force",type:"Force (Purple)",cooldown:"10s",shieldBreaker:"Purple Shields",description:"Slams airborne objects and targets violently onto the stone floor.",synergy:"Cast while target is suspended in mid-air via Levioso for massive slam damage."},{id:"flipendo",name:"Flipendo",category:"force",type:"Force (Purple)",cooldown:"5s",shieldBreaker:"Purple Shields",description:"Flips targets and objects upward and backward. Essential for Merlin trial dice alignment.",synergy:"Disrupts Dugbog lunges; hitting Dugbogs by the tongue deals lethal damage."},{id:"levioso",name:"Levioso",category:"control",type:"Control (Yellow)",cooldown:"8s",shieldBreaker:"Yellow Shields",description:"Levitates targets and objects into the air, leaving them helpless and vulnerable.",synergy:"Combine with 3 standard Basic Casts, followed by Descendo."},{id:"glacius",name:"Glacius",category:"control",type:"Control (Yellow)",cooldown:"10s",shieldBreaker:"Yellow Shields",description:"Freezes enemies solid, stopping all attacks and dramatically amplifying next damage strike.",synergy:"Pair with Diffindo or Bombarda for maximum single-target burst."},{id:"arresto-momentum",name:"Arresto Momentum",category:"control",type:"Control (Yellow)",cooldown:"15s",shieldBreaker:"Yellow Shields",description:"Slows target velocity to near zero. Freezes swinging pendulums in clock towers.",synergy:"Freezes an elite troll or animagus while dealing with surrounding adds."},{id:"transformation",name:"Transformation",category:"control",type:"Control (Yellow)",cooldown:"20s",shieldBreaker:"Yellow Shields",description:"Transforms enemies and inanimate objects into alternate forms, such as explosive barrels.",synergy:"Turn an enemy into a barrel, then cast Ancient Magic Throw to crush another foe."},{id:"lumos",name:"Lumos",category:"utility",type:"Utility (Cyan)",cooldown:"0s",shieldBreaker:"Environment",description:"Illuminates dark dungeons, guides golden moths, and repels Devil's Snare vines.",synergy:"Essential for Moth Frames and illuminating hidden cavern inscriptions."},{id:"disillusionment",name:"Disillusionment",category:"utility",type:"Utility (Cyan)",cooldown:"0s",shieldBreaker:"Environment",description:"Blends your body into the surroundings, providing complete invisibility to open Eye Chests.",synergy:"Allows sneak attacks with Petrificus Totalus for instant one-shot takedowns."},{id:"avada-kedavra",name:"Avada Kedavra",category:"curse",type:"Unforgivable (Green)",cooldown:"90s",shieldBreaker:"Breaks All",description:"The Killing Curse. Instantly kills any enemy regardless of health, level, or boss tier.",synergy:"With Avada Kedavra Mastery talent, kills all cursed enemies across the entire battlefield."},{id:"crucio",name:"Crucio",category:"curse",type:"Unforgivable (Green)",cooldown:"20s",shieldBreaker:"Breaks All",description:"Inflicts excruciating pain over time and curses the victim. Basic attacks spread curse to others.",synergy:"Use Crucio Mastery to tag multiple enemies with the curse icon, priming Avada Kedavra."},{id:"imperio",name:"Imperio",category:"curse",type:"Unforgivable (Green)",cooldown:"30s",shieldBreaker:"Breaks All",description:"Temporarily forces the enemy to fight as your loyal companion with boosted damage.",synergy:"Cast on heavy executioners or armored trolls to clear mobs without taking damage."}],G=[{title:"Glacial Shatter Burst",rating:"S-Tier Damage",sequence:["Glacius","Diffindo"],effect:"Glacius amplifies the subsequent physical damage by up to 500%. Diffindo slices through the frozen enemy for guaranteed massive critical damage."},{title:"Aerial Gravity Slam",rating:"A-Tier Control",sequence:["Levioso","Basic Cast x3","Accio","Descendo"],effect:"Juggles the enemy indefinitely in mid-air, resetting fall physics before slamming them headfirst into the stone floor."},{title:"Pyrotechnic Funnel",rating:"A-Tier AoE",sequence:["Accio","Incendio","Depulso"],effect:"Pulls a crowd into flame radius, burns with Incendio, then blasts burning targets away into walls or surrounding hazards."},{title:"Curse Chain Wipeout",rating:"S-Tier Boss & Mob Clear",sequence:["Crucio","Basic Cast x4","Avada Kedavra"],effect:"Spreads curse marks to all surrounding enemies via Crucio Mastery, then single-casts the killing curse to eliminate every cursed foe simultaneously."}];function q(e){const i=u(),a=i.searchQuery.trim().toLowerCase(),s=i.spellCategoryFilter,o=R.filter(t=>{const n=!a||t.name.toLowerCase().includes(a)||t.description.toLowerCase().includes(a)||t.synergy.toLowerCase().includes(a),r=s==="all"||t.category===s;return n&&r});e.innerHTML=`
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
          ${F.map(t=>`
            <button class="filter-chip ${s===t.id?"active":""}" data-spell-cat="${t.id}">
              ${t.label}
            </button>
          `).join("")}
        </div>
      </div>
    </div>

    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
        <span>⚡</span> High-Impact Combat Synergies
      </h3>

      <div class="grid-cards" style="grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));">
        ${G.map(t=>`
          <div class="synergy-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: #fff; font-size: 1rem;">${t.title}</span>
              <span class="glass-pill glass-pill-gold" style="font-size: 0.72rem; padding: 2px 8px;">${t.rating}</span>
            </div>

            <div class="synergy-pills">
              ${t.sequence.map((n,r)=>`
                <span class="glass-pill" style="font-size: 0.76rem; background: rgba(255, 255, 255, 0.08);">${n}</span>
                ${r<t.sequence.length-1?'<span style="color: var(--gold-light); font-size: 0.8rem;">➔</span>':""}
              `).join("")}
            </div>

            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
              ${t.effect}
            </p>
          </div>
        `).join("")}
      </div>
    </div>

    <div>
      <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
        <span>📜</span> Spell Grimoire (${o.length})
      </h3>

      <div class="grid-cards" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
        ${o.map(t=>{let n="#ef4444";return t.category==="force"&&(n="#a855f7"),t.category==="control"&&(n="#eab308"),t.category==="utility"&&(n="#06b6d4"),t.category==="curse"&&(n="#22c55e"),`
            <div class="glass-card" style="padding: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <div>
                  <h4 style="font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 4px;">
                    ${t.name}
                  </h4>
                  <span class="spell-badge-type" style="background: ${n}22; color: ${n}; border: 1px solid ${n}55;">
                    ${t.type}
                  </span>
                </div>

                <div style="text-align: right;">
                  <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Cooldown</span>
                  <div style="font-weight: 700; color: #fff; font-size: 0.95rem;">${t.cooldown}</div>
                </div>
              </div>

              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
                ${t.description}
              </p>

              <div style="padding: 10px 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: var(--radius-md);">
                <div style="font-size: 0.72rem; color: var(--gold-light); font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">
                  ⚔️ Combat Synergy
                </div>
                <div style="font-size: 0.82rem; color: #cbd5e1; line-height: 1.4;">
                  ${t.synergy}
                </div>
              </div>

              <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; color: var(--text-muted);">
                <span>Breaks:</span>
                <span style="font-weight: 600; color: #fff;">${t.shieldBreaker}</span>
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `,e.querySelectorAll("[data-spell-cat]").forEach(t=>{t.addEventListener("click",()=>{c({spellCategoryFilter:t.dataset.spellCat})})})}function O(e){var o;const a=u().activeTab||"overview";e.innerHTML=`
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
        <button class="hub-tab-btn ${a==="overview"?"active":""}" data-tab="overview">
          <span>Overview</span>
        </button>
        <button class="hub-tab-btn ${a==="puzzles"?"active":""}" data-tab="puzzles">
          <span>Puzzles & Mysteries</span>
        </button>
        <button class="hub-tab-btn ${a==="arithmancy"?"active":""}" data-tab="arithmancy">
          <span>Arithmancy Calculator</span>
        </button>
        <button class="hub-tab-btn ${a==="collectibles"?"active":""}" data-tab="collectibles">
          <span>Collectibles Tracker</span>
        </button>
        <button class="hub-tab-btn ${a==="spells"?"active":""}" data-tab="spells">
          <span>Spell Codex</span>
        </button>
      </div>
    </div>

    <div id="hub-tab-content"></div>
  `;const s=e.querySelector("#hub-tab-content");a==="overview"?j(s):a==="puzzles"?K(s):a==="arithmancy"?I(s):a==="collectibles"?P(s):a==="spells"&&q(s),(o=e.querySelector("#hub-back-btn"))==null||o.addEventListener("click",()=>{c({view:"showcase"})}),e.querySelectorAll(".hub-tab-btn").forEach(t=>{t.addEventListener("click",()=>{c({activeTab:t.dataset.tab})})})}function j(e){var i,a,s;e.innerHTML=`
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
          ${x.find(o=>o.id==="merlin-trials-overview").archetypes.map(o=>`
            <div style="padding: 16px; border-radius: var(--radius-md); background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08);">
              <h5 style="color: var(--gold-light); font-size: 1rem; font-weight: 700; margin-bottom: 6px;">
                ${o.name}
              </h5>
              <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 8px;">
                ${o.spells.map(t=>`
                  <span class="glass-pill" style="font-size: 0.68rem; padding: 1px 6px;">${t}</span>
                `).join("")}
              </div>
              <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">
                ${o.method}
              </p>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `,(i=e.querySelector("#goto-arithmancy-tab"))==null||i.addEventListener("click",()=>{c({activeTab:"arithmancy"})}),(a=e.querySelector("#goto-demiguise-tab"))==null||a.addEventListener("click",()=>{c({activeTab:"collectibles",collectibleCategoryFilter:"Demiguise"})}),(s=e.querySelector("#goto-chests-tab"))==null||s.addEventListener("click",()=>{c({activeTab:"collectibles",collectibleCategoryFilter:"Eye Chest"})})}function K(e){e.innerHTML=`
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
      ${x.filter(i=>i.id!=="merlin-trials-overview").map(i=>`
        <div class="glass-card" style="padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <span class="glass-pill glass-pill-gold">${i.category}</span>
              <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">Diff: ${i.difficulty}</span>
            </div>

            <h3 style="font-family: var(--font-serif); font-size: 1.35rem; font-weight: 700; color: #fff; margin-bottom: 8px;">
              ${i.title}
            </h3>

            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 14px;">
              ${i.summary}
            </p>

            <div style="margin-bottom: 14px; padding: 10px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: var(--radius-md);">
              <div style="font-size: 0.72rem; color: var(--gold-light); font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">
                Required Spells
              </div>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${i.spells.map(a=>`
                  <span class="glass-pill" style="font-size: 0.72rem; padding: 2px 8px;">${a}</span>
                `).join("")}
              </div>
            </div>

            <div style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 16px;">
              <strong>Core Mechanism:</strong> ${i.solution}
            </div>
          </div>

          <button class="glass-button open-puzzle-guide-btn" data-guide-id="${i.id}" style="width: 100%;">
            View Step-by-Step Walkthrough ➔
          </button>
        </div>
      `).join("")}
    </div>
  `,e.querySelectorAll(".open-puzzle-guide-btn").forEach(i=>{i.addEventListener("click",()=>{const a=x.find(s=>s.id===i.dataset.guideId);a&&E({title:a.title,category:a.category,steps:a.steps,solution:a.solution,reward:a.reward,spells:a.spells})})})}function N(e){var s,o;const a=u().activeModal;if(!a){e.innerHTML="";return}e.innerHTML=`
    <div class="modal-backdrop" id="modal-backdrop-el">
      <div class="modal-dialog">
        <button class="modal-close-btn" id="modal-close-btn">&times;</button>

        <div class="glass-pill glass-pill-gold" style="margin-bottom: 8px;">
          ${a.category||"Guide Walkthrough"}
        </div>

        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff; margin-bottom: 12px;">
          ${a.title}
        </h2>

        ${a.spells?`
          <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px;">
            ${a.spells.map(t=>`
              <span class="glass-pill" style="font-size: 0.72rem; padding: 2px 8px;">${t}</span>
            `).join("")}
          </div>
        `:""}

        <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
          ${a.solution||""}
        </div>

        ${a.steps&&a.steps.length?`
          <div style="margin-bottom: 24px;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--gold-light); margin-bottom: 12px;">
              Sequential Instructions
            </h4>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${a.steps.map((t,n)=>`
                <div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px; border-radius: var(--radius-md); background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06);">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: rgba(217, 160, 68, 0.2); border: 1px solid rgba(217, 160, 68, 0.4); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; color: var(--gold-light); flex-shrink: 0;">
                    ${n+1}
                  </span>
                  <span style="font-size: 0.9rem; color: #e2e8f0; line-height: 1.5;">${t}</span>
                </div>
              `).join("")}
            </div>
          </div>
        `:""}

        ${a.reward?`
          <div style="padding: 12px 16px; border-radius: var(--radius-md); background: rgba(217, 160, 68, 0.12); border: 1px solid rgba(217, 160, 68, 0.3); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.82rem; text-transform: uppercase; color: var(--gold-light); font-weight: 700;">Guaranteed Reward</span>
            <span style="font-weight: 700; color: #fff; font-size: 0.92rem;">${a.reward}</span>
          </div>
        `:""}
      </div>
    </div>
  `,(s=e.querySelector("#modal-close-btn"))==null||s.addEventListener("click",f),(o=e.querySelector("#modal-backdrop-el"))==null||o.addEventListener("click",t=>{t.target.id==="modal-backdrop-el"&&f()})}const k=document.getElementById("app");function S(){const e=u();let i=`
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
  `;k.querySelector("#nav-mount")||(k.innerHTML=i);const a=document.getElementById("nav-mount"),s=document.getElementById("main-content"),o=document.getElementById("modal-mount");H(a),e.view==="showcase"?B(s):e.view==="hogwarts"&&O(s),N(o)}document.addEventListener("keydown",e=>{e.key==="Escape"&&f()});T(S);S();
