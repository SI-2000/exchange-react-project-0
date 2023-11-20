export function roundTo(n, digits) {
  if (digits === undefined) {
    digits = 0;
  }

  let multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  let test = Math.round(n) / multiplicator;

  return test.toFixed(digits);
}
