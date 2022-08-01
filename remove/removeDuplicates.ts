/**
 * Remove duplicate values in an array.
 * @param {T[]} arr Array of strings.
 * @returns {T[]}
 */
export function removeDuplicates<T>(arr: T[]): T[] {
  return arr.filter((x, i) => arr.indexOf(x) === i);
}
