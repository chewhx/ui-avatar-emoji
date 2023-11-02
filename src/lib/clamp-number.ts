export function clampNumber(input: number, min: number, max: number): number {
  return Math.min(Math.max(input, min), max);
}
