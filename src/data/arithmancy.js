export const beasts = [
  { value: 0, name: "Demiguise", glyph: "🐒", look: "Ape-like face framed by long, flowing hair" },
  { value: 1, name: "Unicorn", glyph: "🦄", look: "Horse head with a single straight horn" },
  { value: 2, name: "Graphorn", glyph: "🐃", look: "Hunched beast with two curved horns" },
  { value: 3, name: "Runespoor", glyph: "🐍", look: "Snake with three heads" },
  { value: 4, name: "Fwooper", glyph: "🐦", look: "Round bird with a tufted crest" },
  { value: 5, name: "Quintaped", glyph: "🦔", look: "Squat, hairy creature with five legs" },
  { value: 6, name: "Salamander", glyph: "🦎", look: "Lizard curled up in flames" },
  { value: 7, name: "Tentacled Beast", glyph: "🦑", look: "Squid-like creature with dangling tentacles" },
  { value: 8, name: "Acromantula", glyph: "🕷️", look: "Giant eight-legged spider" },
  { value: 9, name: "Hydra", glyph: "🐉", look: "Serpent body splitting into many heads" }
];

export const frameLayout = {
  left: [3, 2, 1, 0],
  top: [4, 5],
  right: [6, 7, 8, 9]
};

export const arithmancyDoors = [
  {
    id: "charms",
    wing: "Astronomy Wing",
    area: "Charms Classroom",
    hint: "From the Charms Classroom Floo Flame, walk down the hallway behind you. The door is on the left."
  },
  {
    id: "central-hall",
    wing: "Library Annex",
    area: "Central Hall",
    hint: "Take the stairs up from the Central Hall Floo Flame and check the upper walkway."
  },
  {
    id: "library",
    wing: "Library Annex",
    area: "Library",
    hint: "Toward the back of the Library, past the main book stacks."
  },
  {
    id: "potions",
    wing: "Bell Tower Wing",
    area: "Potions Classroom",
    hint: "Follow the corridor outside the Potions Classroom Floo Flame."
  },
  {
    id: "grand-staircase",
    wing: "Grand Staircase",
    area: "Grand Staircase Tower",
    hint: "A short way down the stairs from the Grand Staircase Tower Floo Flame."
  },
  {
    id: "ravenclaw",
    wing: "Grand Staircase",
    area: "Ravenclaw Tower",
    hint: "On the climb up toward Ravenclaw Tower."
  },
  {
    id: "great-hall",
    wing: "The Great Hall",
    area: "Great Hall",
    hint: "Along the corridor off the Great Hall Floo Flame, heading toward the courtyard exit."
  },
  {
    id: "divination-1",
    wing: "Astronomy Wing",
    area: "Divination Classroom I",
    hint: "On the wooden walkway leading up to the Divination Classroom."
  },
  {
    id: "divination-2",
    wing: "Astronomy Wing",
    area: "Divination Classroom II",
    hint: "Further along, up in the rafters past the classroom."
  },
  {
    id: "divination-3",
    wing: "Astronomy Wing",
    area: "Divination Classroom III",
    hint: "Near the Arithmancy classroom, past the other two Divination doors."
  },
  {
    id: "hospital-wing",
    wing: "South Wing",
    area: "Hospital Wing",
    hint: "Behind a locked door near the Hospital Wing.",
    locked: true
  },
  {
    id: "transfiguration",
    wing: "Bell Tower Wing",
    area: "Transfiguration Courtyard",
    hint: "Behind a locked door off the Transfiguration Courtyard, up the stairs.",
    locked: true
  }
];
