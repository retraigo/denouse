/**
 * Add zeros to the beginning of a number till it reaches a certain digit count.
 * @param {number} num - Number to add zeros to.
 * @param {number} digits - Number of digits the number has to reach.
 */

export function addZero(num: number, digits = 3): string {
  const arr = new Array(digits).fill(0);
  return `${arr.join("").slice(0, 0 - num.toString().length)}${num}`;
}
export default addZero;
