export const MAX_CENTER = 27;

export function solveTriangle(triangle) {
  const { center, corners } = triangle;
  const known = corners.filter(value => value !== null);
  const knownSum = known.reduce((total, value) => total + value, 0);
  const blanks = corners.length - known.length;

  if (center === null) {
    return { status: "need-center" };
  }

  if (blanks === 0) {
    return knownSum === center
      ? { status: "balanced" }
      : { status: "mismatch", sum: knownSum, center };
  }

  if (blanks > 1) {
    return { status: "too-many", blanks };
  }

  const answer = center - knownSum;

  if (answer < 0 || answer > 9) {
    return { status: "out-of-range", answer };
  }

  return { status: "solved", answer, center, known };
}

export function parseCenter(raw) {
  const digits = String(raw).replace(/\D/g, "");
  if (!digits) return null;
  return Math.min(parseInt(digits, 10), MAX_CENTER);
}
