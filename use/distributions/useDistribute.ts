/**
 * Get n evenly distributed numbers in a range.
 * @param n Number of numbers to generate.
 * @param min Lower limit of range.
 * @param max Upper limit of range.
 * @returns Array of n evenly distributed numbers.
 */
export function useEvenlyDistribute(n: number, min = 0, max = 1): Float32Array {
  const res = new Float32Array(n);
  let i = 0;
  do {
    res[i] = min + ((i * (max - min)) / (n + 1));
    i += 1;
  } while (i < n)
  return res;
}
