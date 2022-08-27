import * as matrix from "./use/math/matrix/matrix.ts";

//Deno.bench("noop", () => {})

//Deno.bench("norm", () => {useGaussianArray(100000, 10, 0.23)})

//Deno.bench("fl", () => {useGaussianArray1(100000, 10, 0.23)})

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
  