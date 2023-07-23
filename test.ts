import { useRange, useSeries } from "./use/array/range.ts";
import { useUnique } from "./use/array/unique.ts";
import { useShuffle } from "./use/random/shuffle.ts";

Deno.bench("noop", () => {})

Deno.bench("fl", () => {useUnique(useSeries(1000))})

console.log(useUnique([1, 2, 3, 3, 2, 4]))

/*
console.log(
  matrix.combineMatrixByMax(
    [[2, 2], [3, 4]],
    [[2, 5, 6], [2, 3, 0], [1, 9, 2]],
    [[1], [5], [9]],
  ),
);


console.log(
    matrix.combineMatrixByMin(
      [[2, 2], [3, 4]],
      [[2, 5, 6], [2, 3, 0], [1, 9, 2]],
      [[1], [5], [9]],
    ),
  );
  */