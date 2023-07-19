import { useSeries } from "../array/range.ts";

export function useShuffle<T>(arr: T[]): T[];
export function useShuffle(max: number): number[];
export function useShuffle(min: number, max: number): number[];
export function useShuffle<T>(
  maybeArr: number | T[],
  max?: number,
): T[] | number[] {
  if (Array.isArray(maybeArr)) {
    const idx = useShuffle(0, maybeArr.length);
    const res = new Array(maybeArr.length);
    let i = 0;
    while (i < maybeArr.length) {
      res[i] = maybeArr[idx[i]];
      i += 1;
    }
    return res;
  } else {
    const min = typeof max !== "undefined" ? maybeArr : 0;
    const max1 = typeof max !== "undefined" ? max : maybeArr;

    const arr = useSeries(min, max1);

    let i = arr.length - 1;
    while (i >= 1) {
      const j = Math.floor(Math.random() * i);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i -= 1;
    }
    return arr;
  }
}
