export function isValidNumber(input: any): boolean {
  if (
    typeof input === 'number' ||
    (typeof input === 'string' && !isNaN(Number(input)))
  ) {
    return true;
  }
  return false;
}
