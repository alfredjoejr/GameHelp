export const arithmancyBeasts = [
  { value: 0, name: "Demiguise", meaning: "Zero (Invisible Beast)", icon: "0️⃣", glyph: "🦉" },
  { value: 1, name: "Unicorn", meaning: "One (Single Horn)", icon: "1️⃣", glyph: "🦄" },
  { value: 2, name: "Graphorn", meaning: "Two (Dual Horns)", icon: "2️⃣", glyph: "🦏" },
  { value: 3, name: "Runespoor", meaning: "Three (Three Heads)", icon: "3️⃣", glyph: "🐍" },
  { value: 4, name: "Fwooper", meaning: "Four (Singing Owl)", icon: "4️⃣", glyph: "🦜" },
  { value: 5, name: "Quintaped", meaning: "Five (Five Legs)", icon: "5️⃣", glyph: "🦀" },
  { value: 6, name: "Salamander", meaning: "Six (Fire Lizard)", icon: "6️⃣", glyph: "🦎" },
  { value: 7, name: "Manticore", meaning: "Seven (Spiked Tail)", icon: "7️⃣", glyph: "🦂" },
  { value: 8, name: "Acromantula", meaning: "Eight (Eight Legs)", icon: "8️⃣", glyph: "🕷️" },
  { value: 9, name: "Hydra", meaning: "Nine (Nine Heads)", icon: "9️⃣", glyph: "🐉" }
];

export const puzzleGuides = [
  {
    id: "arithmancy-doors",
    title: "Arithmancy Door Numbers",
    category: "Math & Symbols",
    spells: ["None Required (Pure Deduction)"],
    difficulty: "Medium",
    reward: "Rare Gear, House Tokens, Collection Chests",
    summary: "Hogwarts features 12 sealed Arithmancy doors bordered with 10 beast carvings numbered sequentially 0 to 9.",
    solution: "The large number in the center circle equals the sum of the three surrounding points. One point is an integer, one is an animal glyph, and the third is a question mark (? or ??). Subtract known values from the center target to reveal the missing beast value, then roll the matching wall dial.",
    interactiveType: "arithmancy-tool",
    steps: [
      "Face the door and read the top triangle: Center target = Tip + Left + Right.",
      "Identify the beast value (e.g., Unicorn is 1, Hydra is 9, Quintaped is 5).",
      "Calculate the missing value: Target - Number - Beast Value = Required Animal.",
      "Locate the single '?' dial nearby and roll it to that beast.",
      "Repeat calculation for the bottom '??' triangle and roll the double '??' dial.",
      "Return to the door and interact to open the chamber."
    ]
  },
  {
    id: "viaduct-bridge",
    title: "Viaduct Bridge Fire Grate",
    category: "Mechanisms",
    spells: ["Incendio", "Confringo"],
    difficulty: "Easy",
    reward: "Legendary Gear & 3 Collection Chests",
    summary: "Connects the Library Annex to the Great Hall. Four unlit braziers line the stone walkway beside a sealed bronze manhole.",
    solution: "Look at the floor crest near the northwest bridge corner. Each symbol (Key, Shield, Double Circle, Triangle) is paired with a Roman numeral (I, II, III, IV). Light all four braziers with fire, then interact with the gear beneath each brazier until the Roman numeral matches its symbol.",
    steps: [
      "Check the bronze circular plate on the floor for the pairing guide.",
      "Cast Incendio on all 4 stone braziers so the mechanisms can turn.",
      "Triangle symbol = Roman numeral I",
      "Two overlapping circles = Roman numeral II",
      "Key symbol = Roman numeral III",
      "Spiked crest / sun = Roman numeral IV",
      "Once matched, the manhole unlocks, dropping you into the aqueduct chamber below."
    ]
  },
  {
    id: "merlin-trials-overview",
    title: "The 9 Merlin Trial Archetypes",
    category: "Exploration",
    spells: ["Accio", "Depulso", "Flipendo", "Incendio", "Confringo", "Lumos", "Reparo"],
    difficulty: "Varies",
    reward: "Permanent Gear Inventory Slot Expansions",
    summary: "Created by Merlin of Slytherin. Scattered across 95 Highland locations, activated with Mallowsweet leaves.",
    archetypes: [
      {
        name: "Giant Stone Sphere",
        spells: ["Depulso", "Accio", "Wingardium Leviosa"],
        method: "Locate the massive stone ball on an elevated hill and guide it into the concave bowl carved into the ground."
      },
      {
        name: "Flipendo Cube Alignment",
        spells: ["Flipendo"],
        method: "Stand in front of pillars with stacked dice. Cast Flipendo from different angles so the top dice symbol matches the bottom pillar symbol orientation."
      },
      {
        name: "Timed Torch Braziers",
        spells: ["Confringo", "Incendio"],
        method: "Identify 3 torches on pillars of descending heights. Light the tallest one first and immediately sprint/shoot the remaining two before they submerge."
      },
      {
        name: "Moths to Hollow Cubes",
        spells: ["Lumos"],
        method: "Find 3 stone blocks with crystals inside. Cast Lumos near hovering blue moths in nearby bushes to lead three groups into their corresponding blocks."
      },
      {
        name: "Stone Pillar Parkour",
        spells: ["Movement Only"],
        method: "Climb atop the first stone monolith. Jump from pillar to pillar until reaching the finish without falling onto the ground."
      },
      {
        name: "Shattered Statues",
        spells: ["Reparo"],
        method: "Three stone statues instantly explode upon trial start. Track down the rubble pieces and mend all three with Reparo."
      },
      {
        name: "Small Marbles into Plates",
        spells: ["Accio", "Wingardium Leviosa"],
        method: "Three indented stone platforms require 5 small stone balls each. Pull the balls out from crevices and deposit them onto the pads."
      },
      {
        name: "Exploding Rune Stones",
        spells: ["Confringo", "Bombarda"],
        method: "Five stone orbs perched atop pillars or hidden behind breakable vines must be destroyed."
      },
      {
        name: "Butterfly Swarm Escort",
        spells: ["Lumos"],
        method: "Lumos attracts the swarm to your wand; guide them safely into the illuminated garden pedestal."
      }
    ]
  },
  {
    id: "moth-mirrors",
    title: "Moth to the Frame Mirrors",
    category: "Hidden Chambers",
    spells: ["Lumos"],
    difficulty: "Easy",
    reward: "Field Guide Pages",
    summary: "Ornate silver and black glass mirror frames hanging throughout the castle that show blank obsidian surfaces.",
    solution: "Cast Lumos directly in front of the mirror to project a black-and-white landscape memory. Identify the depicted architectural feature nearby, walk to it, find the golden moth perched on a pillar or wall, cast Lumos to draw the moth to your wand tip, and escort it back to the frame.",
    steps: [
      "Stand before the mirror and cast Lumos to reveal the location hint.",
      "Explore the immediate 30-meter radius for matching stairs, tapestries, or statues.",
      "Cast Lumos near the moth; it will tether to your wand.",
      "Walk back to the mirror and cancel Lumos or basic cast to snap the moth into the brooch."
    ]
  },
  {
    id: "clock-tower-doors",
    title: "Clock Tower Pendulum Doors",
    category: "Mechanisms",
    spells: ["Arresto Momentum", "Glacius"],
    difficulty: "Medium",
    reward: "Secret Castle Chambers & Rare Loot",
    summary: "The Hospital Wing and Defence Against the Dark Arts courtyard share a colossal ticking pendulum with 4 brass sigils on the guide bar.",
    solution: "Each floor has a locked iron gate marked with one of the 4 symbols (Unicorn, Owl, Two Serpents, Chimera). Freeze the swinging pendulum with Arresto Momentum or Glacius precisely when it aligns with that symbol to unlock the corresponding floor gate.",
    steps: [
      "Observe the symbol etched on the barred door you want to enter.",
      "Position yourself on the wooden walkway facing the pendulum rod.",
      "Wait for the pendulum weight to sweep directly over the matching glyph.",
      "Cast Arresto Momentum to freeze the pendulum in place.",
      "Dash through the door before the freeze effect expires."
    ]
  },
  {
    id: "chess-rooms",
    title: "Transfiguration Chess Puzzles",
    category: "Dungeon Secrets",
    spells: ["Transformation", "Wingardium Leviosa", "Depulso"],
    difficulty: "Hard",
    reward: "Collection Chests & Highlands Lore",
    summary: "Hidden inside Treasure Vaults in Feldcroft, Cragcroftshire, and Coast caverns featuring a life-sized stone chessboard.",
    solution: "Cast Revelio to find a miscellaneous object (urn, stone vase, chair) emitting a white aura. Cast Transformation to turn the object into the missing chess piece (Bishop, Knight, or Queen), then use Wingardium Leviosa to position it for an unavoidable checkmate against the enemy King.",
    steps: [
      "Enter the vault and inspect the enemy King on the board.",
      "Locate the loose urn or cauldron in the corners using Revelio.",
      "Cast Transformation on the urn to convert it into a chess piece.",
      "Move the piece into the checkmate position (e.g., Bishop diagonal to King).",
      "The enemy King shatters, revealing the chest."
    ]
  }
];
