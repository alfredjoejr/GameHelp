export const spellCategories = [
  { id: "all", label: "All Spells" },
  { id: "damage", label: "Damage (Red)", color: "#ef4444" },
  { id: "force", label: "Force (Purple)", color: "#a855f7" },
  { id: "control", label: "Control (Yellow)", color: "#eab308" },
  { id: "utility", label: "Utility (Cyan)", color: "#06b6d4" },
  { id: "curse", label: "Unforgivable (Green)", color: "#22c55e" }
];

export const spellsList = [
  {
    id: "confringo",
    name: "Confringo",
    category: "damage",
    type: "Damage (Red)",
    cooldown: "10s",
    shieldBreaker: "Red Shields",
    description: "Long-range bolt that explodes on impact, dealing high thermal damage and igniting secondary targets.",
    synergy: "Pairs with Glacius for massive thermal shock damage or Accio for point-blank ignition."
  },
  {
    id: "diffindo",
    name: "Diffindo",
    category: "damage",
    type: "Damage (Red)",
    cooldown: "15s",
    shieldBreaker: "Red Shields",
    description: "A slashing slash that cuts through multiple foes in a straight line at moderate distance.",
    synergy: "Cast immediately following Glacius for a 4x to 5x critical damage multiplier."
  },
  {
    id: "bombarda",
    name: "Bombarda",
    category: "damage",
    type: "Damage (Red)",
    cooldown: "15s",
    shieldBreaker: "Red Shields",
    description: "Heavy explosive impact that blasts heavy obstacles and throws groups of enemies backward.",
    synergy: "Use after Descendo when enemies are grounded to maximize splash radius."
  },
  {
    id: "incendio",
    name: "Incendio",
    category: "damage",
    type: "Damage (Red)",
    cooldown: "8s",
    shieldBreaker: "Red Shields",
    description: "A close-quarters burst of intense flame. Critical for igniting Inferi and web clearing.",
    synergy: "Accio brings distant targets into point-blank range for maximum fire spread."
  },
  {
    id: "accio",
    name: "Accio",
    category: "force",
    type: "Force (Purple)",
    cooldown: "8s",
    shieldBreaker: "Purple Shields",
    description: "Summons objects and foes toward you. Also activates guide mechanisms, bridges, and platforms.",
    synergy: "Prime setup spell. Follow immediately with Incendio or Descendo."
  },
  {
    id: "depulso",
    name: "Depulso",
    category: "force",
    type: "Force (Purple)",
    cooldown: "10s",
    shieldBreaker: "Purple Shields",
    description: "Repels objects and enemies with tremendous kinetic force. Launches enemies off cliffs.",
    synergy: "Use in puzzle chambers to push enchanted blocks across gaps."
  },
  {
    id: "descendo",
    name: "Descendo",
    category: "force",
    type: "Force (Purple)",
    cooldown: "10s",
    shieldBreaker: "Purple Shields",
    description: "Slams airborne objects and targets violently onto the stone floor.",
    synergy: "Cast while target is suspended in mid-air via Levioso for massive slam damage."
  },
  {
    id: "flipendo",
    name: "Flipendo",
    category: "force",
    type: "Force (Purple)",
    cooldown: "5s",
    shieldBreaker: "Purple Shields",
    description: "Flips targets and objects upward and backward. Essential for Merlin trial dice alignment.",
    synergy: "Disrupts Dugbog lunges; hitting Dugbogs by the tongue deals lethal damage."
  },
  {
    id: "levioso",
    name: "Levioso",
    category: "control",
    type: "Control (Yellow)",
    cooldown: "8s",
    shieldBreaker: "Yellow Shields",
    description: "Levitates targets and objects into the air, leaving them helpless and vulnerable.",
    synergy: "Combine with 3 standard Basic Casts, followed by Descendo."
  },
  {
    id: "glacius",
    name: "Glacius",
    category: "control",
    type: "Control (Yellow)",
    cooldown: "10s",
    shieldBreaker: "Yellow Shields",
    description: "Freezes enemies solid, stopping all attacks and dramatically amplifying next damage strike.",
    synergy: "Pair with Diffindo or Bombarda for maximum single-target burst."
  },
  {
    id: "arresto-momentum",
    name: "Arresto Momentum",
    category: "control",
    type: "Control (Yellow)",
    cooldown: "15s",
    shieldBreaker: "Yellow Shields",
    description: "Slows target velocity to near zero. Freezes swinging pendulums in clock towers.",
    synergy: "Freezes an elite troll or animagus while dealing with surrounding adds."
  },
  {
    id: "transformation",
    name: "Transformation",
    category: "control",
    type: "Control (Yellow)",
    cooldown: "20s",
    shieldBreaker: "Yellow Shields",
    description: "Transforms enemies and inanimate objects into alternate forms, such as explosive barrels.",
    synergy: "Turn an enemy into a barrel, then cast Ancient Magic Throw to crush another foe."
  },
  {
    id: "lumos",
    name: "Lumos",
    category: "utility",
    type: "Utility (Cyan)",
    cooldown: "0s",
    shieldBreaker: "Environment",
    description: "Illuminates dark dungeons, guides golden moths, and repels Devil's Snare vines.",
    synergy: "Essential for Moth Frames and illuminating hidden cavern inscriptions."
  },
  {
    id: "disillusionment",
    name: "Disillusionment",
    category: "utility",
    type: "Utility (Cyan)",
    cooldown: "0s",
    shieldBreaker: "Environment",
    description: "Blends your body into the surroundings, providing complete invisibility to open Eye Chests.",
    synergy: "Allows sneak attacks with Petrificus Totalus for instant one-shot takedowns."
  },
  {
    id: "avada-kedavra",
    name: "Avada Kedavra",
    category: "curse",
    type: "Unforgivable (Green)",
    cooldown: "90s",
    shieldBreaker: "Breaks All",
    description: "The Killing Curse. Instantly kills any enemy regardless of health, level, or boss tier.",
    synergy: "With Avada Kedavra Mastery talent, kills all cursed enemies across the entire battlefield."
  },
  {
    id: "crucio",
    name: "Crucio",
    category: "curse",
    type: "Unforgivable (Green)",
    cooldown: "20s",
    shieldBreaker: "Breaks All",
    description: "Inflicts excruciating pain over time and curses the victim. Basic attacks spread curse to others.",
    synergy: "Use Crucio Mastery to tag multiple enemies with the curse icon, priming Avada Kedavra."
  },
  {
    id: "imperio",
    name: "Imperio",
    category: "curse",
    type: "Unforgivable (Green)",
    cooldown: "30s",
    shieldBreaker: "Breaks All",
    description: "Temporarily forces the enemy to fight as your loyal companion with boosted damage.",
    synergy: "Cast on heavy executioners or armored trolls to clear mobs without taking damage."
  }
];

export const combatSynergies = [
  {
    title: "Glacial Shatter Burst",
    rating: "S-Tier Damage",
    sequence: ["Glacius", "Diffindo"],
    effect: "Glacius amplifies the subsequent physical damage by up to 500%. Diffindo slices through the frozen enemy for guaranteed massive critical damage."
  },
  {
    title: "Aerial Gravity Slam",
    rating: "A-Tier Control",
    sequence: ["Levioso", "Basic Cast x3", "Accio", "Descendo"],
    effect: "Juggles the enemy indefinitely in mid-air, resetting fall physics before slamming them headfirst into the stone floor."
  },
  {
    title: "Pyrotechnic Funnel",
    rating: "A-Tier AoE",
    sequence: ["Accio", "Incendio", "Depulso"],
    effect: "Pulls a crowd into flame radius, burns with Incendio, then blasts burning targets away into walls or surrounding hazards."
  },
  {
    title: "Curse Chain Wipeout",
    rating: "S-Tier Boss & Mob Clear",
    sequence: ["Crucio", "Basic Cast x4", "Avada Kedavra"],
    effect: "Spreads curse marks to all surrounding enemies via Crucio Mastery, then single-casts the killing curse to eliminate every cursed foe simultaneously."
  }
];
