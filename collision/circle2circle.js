import { getDistance2Point } from "../vector.js";

/** @typedef {{x:number,y:number}} tPoint */

/**
 *
 * @param {number} x1 center x coordinate circle 1
 * @param {number} y1 center y coordinate circle 1
 * @param {number} r1 circle 1 radius
 * @param {number} x2 center x coordinate circle 2
 * @param {number} y2 center y coordinate circle 2
 * @param {number} r2 circle 2 radius
 *
 */
export const is2CircleCollide = (x1, y1, r1, x2, y2, r2) => {
  const c1 = { x: x1, y: y1, r: r1 };
  const c2 = { x: x2, y: y2, r: r2 };
  const dist = getDistance2Point(c2, c1);

  return dist <= r1 + r2;
};
