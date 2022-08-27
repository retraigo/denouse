import type { Matrix } from "./_types.ts";

/**
 * Combine two matrices directly, choosing the larger of two values.
 * @param m1 First matrix.
 * @param m2 Second matrix.
 * @returns Matrix with the larger of both matrices' dimensions.
 */
export function combineMatrixByMax(...m: Matrix[]) {
  const rows = (Math.max(...m.map(x => Math.max(...x.map(y => y.length)))));
  const columns = Math.max(...m.map(x =>x.length));
  const result: Matrix = [];
  let i = 0;
  while (i < rows) {
    result[i] = []
    let j = 0;
    while (j < columns) {
      result[i][j] = Math.max(...m.map(x => x[i]?.[j] || 0));
      j += 1;
    }
    i += 1;
  }
  return result;
}

/**
 * Combine two matrices directly, choosing the smaller of two values.
 * @param m1 First matrix.
 * @param m2 Second matrix.
 * @returns Matrix with the larger of both matrices' dimensions.
 */
 export function combineMatrixByMin(...m: Matrix[]) {
    const rows = (Math.max(...m.map(x => Math.max(...x.map(y => y.length)))));
    const columns = Math.max(...m.map(x =>x.length));
    const result: Matrix = [];
    let i = 0;
    while (i < rows) {
      result[i] = []
      let j = 0;
      while (j < columns) {
        const r = Math.min(...m.map(x => x[i]?.[j] || 9999))
        result[i][j] = r !== 9999 ? r : 0;
        j += 1;
      }
      i += 1;
    }
    return result;
  }
  