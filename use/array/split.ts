import { useShuffle } from "../random/shuffle.ts";

export interface Sliceable {
  slice<T>(start?: number | undefined, end?: number | undefined): Sliceable & T;
}

interface SplitOptions {
  ratio: [number, number];
  shuffle?: boolean;
}

/** Split arrays by their first axis */
export function useSplit(
  options: SplitOptions = { ratio: [7, 3], shuffle: false },
  ...arr: (ArrayLike<unknown> & Sliceable)[]
): [(ArrayLike<unknown> & Sliceable)[], (ArrayLike<unknown> & Sliceable)[]] {
  if (!arr.every((x) => x.length === arr[0].length)) {
    throw new Error("All arrays must have equal length!");
  }
  const { ratio, shuffle } = options;
  const idx = Math.floor(arr[0].length * (ratio[0] / (ratio[0] + ratio[1])));
  if (!shuffle) {
    return [arr.map((x) => x.slice<typeof x>(0, idx)), arr.map((x) => x.slice<typeof x>(idx))];
  } else {
    const shuffled = useShuffle(0, arr[0].length);
    const x1 = shuffled.slice(0, idx);
    const x2 = shuffled.slice(idx);
    return [
      arr.map<ArrayLike<unknown>>((x) =>
        x1.map((i) => x[i])
      ) as (ArrayLike<unknown> & Sliceable)[],
      arr.map<ArrayLike<unknown>>((x) =>
        x2.map((i) => x[i])
      ) as (ArrayLike<unknown> & Sliceable)[],
    ];
  }
}
