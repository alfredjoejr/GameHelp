const ORDER = [
  ["top", 0], ["top", 1], ["top", 2],
  ["bottom", 0], ["bottom", 1], ["bottom", 2]
];

const blankTriangle = () => ({ center: null, corners: [null, null, null] });

const puzzle = {
  top: { center: 15, corners: [4, 8, null] },
  bottom: { center: 12, corners: [2, 1, null] },
  selected: { tri: "top", slot: 2 },
  doorId: ""
};

export const getPuzzle = () => puzzle;

export function getSelectedValue() {
  const { tri, slot } = puzzle.selected;
  return puzzle[tri].corners[slot];
}

export function selectSlot(tri, slot) {
  puzzle.selected = { tri, slot };
}

export function setCorner(value) {
  const { tri, slot } = puzzle.selected;
  puzzle[tri].corners[slot] = value;
}

export function setCenter(tri, value) {
  puzzle[tri].center = value;
}

export function moveSelection(step) {
  const { tri, slot } = puzzle.selected;
  const index = ORDER.findIndex(([t, s]) => t === tri && s === slot);
  const [nextTri, nextSlot] = ORDER[(index + step + ORDER.length) % ORDER.length];
  puzzle.selected = { tri: nextTri, slot: nextSlot };
}

export function clearPuzzle() {
  puzzle.top = blankTriangle();
  puzzle.bottom = blankTriangle();
  puzzle.selected = { tri: "top", slot: 0 };
}

export function loadExample() {
  puzzle.top = { center: 15, corners: [4, 8, null] };
  puzzle.bottom = { center: 12, corners: [2, 1, null] };
  puzzle.selected = { tri: "top", slot: 2 };
}

export function setDoor(id) {
  puzzle.doorId = id;
}
