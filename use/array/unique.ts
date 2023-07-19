/**
 * Remove duplicate values in an array.
 * @param {T[]} arr Array of strings.
 * @returns {T[]}
 */
export function useUnique<T>(arr: ArrayLike<T>): T[] {
  const array = Array.from(arr);
  return array.filter((x, i) => array.indexOf(x) === i);
}