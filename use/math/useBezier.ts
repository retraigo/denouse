import { useEvenlyDistribute } from "../distributions/useDistribute.ts";

// TODO: ALLOW CUSTOM POINTS
// const POINT_0 = [0, 0], POINT_3 = [1, 1];

/**
 * A bezier curve is any curve defined by a set of control points P0...Pn
 * where `n` is the order of the curve. The curve starts at the first point
 * and ends at the last point while almost never passing through the
 * intermediate control points. The intermediate points instead control
 * the direction of the curve.
 */

/**
 * A linear bezier is a curve, or rather a straight line, between two given points P0 and P1.
 * @param num_points Number of points to obtain.
 * @returns Array of num_points points of the linear bezier curve (more like line).
 */
export function useLinearBezier(num_points: number): [number, number][] {
  return Array.from(useEvenlyDistribute(num_points)).map((t) => [t, t]);
}

/**
 * Quadratic bezier is a curve defined by four points P0, P1, P2.
 * The curve begins at P0 and ends at P2.
 * P1 defines directions in which the curve travels.
 * ```ts
 * useQuadraticBezier(9999999, .5,.7)
 * ```
 * @param num_points Number of points to obtain.
 * @param coordinates Coordinates in the order p1.x, p1.y.
 * @returns Array of num_points points of the quadratic bezier curve.
 */
export function useQuadraticBezier(
  num_points: number,
  ...coordinates: [number, number]
): [number, number][] {
  const curve: [number, number][] = [];
  const increment = useEvenlyDistribute(num_points)[1];
  let t = 0;
  do {
    curve.push([
      (2 * (1 - t) * t * coordinates[0]) + (t * t),
      (2 * (1 - t) * t * coordinates[1]) + (t * t),
    ]);
    t += increment;
  } while (t <= 1);
  return curve;
}

/**
 * Cubic bezier is a curve defined by four points P0, P1, P2, P3.
 * The curve begins at P0 and ends at P3.
 * P1 and P2 define directions in which the curve travels.
 * ```ts
 * useCubicBezier(9999999, .5,.7,.19,.96)
 * ```
 * @param num_points Number of points to obtain.
 * @param coordinates Coordinates in the order p1.x, p1.y, p2.x, p2.y.
 * @returns Array of num_points points of the cubic bezier curve.
 */
export function useCubicBezier(
  num_points: number,
  ...coordinates: [number, number, number, number]
): [number, number][] {
  const curve: [number, number][] = [];
  const increment = useEvenlyDistribute(num_points)[1];
  let t = 0;
  do {
    curve.push([
      //        Math.pow(1 - t, 3) * POINT_0[0] +
      3 * Math.pow(1 - t, 2) * t * coordinates[0] +
      3 * (1 - t) * Math.pow(t, 2) * coordinates[2] +
      Math.pow(t, 3), /* * POINT_3[0]*/

      //        Math.pow(1 - t, 3) * POINT_0[1] +
      3 * Math.pow(1 - t, 2) * t * coordinates[1] +
      3 * (1 - t) * Math.pow(t, 2) * coordinates[3] +
      Math.pow(t, 3), /* * POINT_3[1]*/
    ]);
    t += increment;
  } while (t <= 1);
  return curve;
}
