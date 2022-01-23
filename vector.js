/** @typedef {{x:number,y:number} tPoint} */
/** @typedef {tPoint} tVector */

/**
 *
 * @param {number} vx
 * @param {number} vy
 * @returns {tVector}
 */
export const getVector = (vx, vy) => {
  return { x: vx, y: vy };
};

/**
 *
 * @param {tPoint} p1
 * @param {tPoint} p2
 * @returns {tVector}
 */
export const getVector2Point = (p1, p2) => {
  return {
    x: p2.x - p1.x,
    y: p2.y - p2.y,
  };
};
/** @param {tVector} vector */
export const getMagnitute = (vector) => {
  return (vector.x ** 2 + vector.y ** 2) ** 0.5;
};
/**
 * @param {tVector} vector
 * @return {number} angle in radian
 * */
export const getVectorAngle = (vector) => {
  return Math.atan2(vector.y, vector.x);
};
