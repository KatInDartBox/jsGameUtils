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
  const v = {
    x: p2.x - p1.x,
    y: p2.y - p1.y,
  };

  if (Math.abs(v.x) === 0) v.x = 0;
  if (Math.abs(v.y) === 0) v.y = 0;
  return v;
};
/** @param {tVector} vector */
export const getMagnitude = (vector) => {
  return (vector.x ** 2 + vector.y ** 2) ** 0.5;
};

/**
 *
 * @param {tPoint} p1
 * @param {tPoint} p2
 * @returns {number}
 */
export const getDistance2Point = (p1, p2) => {
  return getMagnitude(getVector2Point(p1, p2));
};

/**
 * @param {tVector} vector
 * @return {number} angle in radian
 * */
export const getVectorAngle = (vector) => {
  return Math.atan2(vector.y, vector.x);
};

/**
 *
 * @param {tPoint} p1
 * @param {tPoint} p2
 */
export const getUnit = (p1, p2) => {
  const v = getVector2Point(p1, p2);
  const vm = getMagnitude(v);
  return {
    x: v.x / vm,
    y: v.y / vm,
  };
};

/**
 *
 * @param {tPoint} p1
 * @param {tPoint} p2
 */
export const getNormUnit = (p1, p2) => {
  const unit = getUnit(p1, p2);
  return {
    x: -unit.y,
    y: unit.x,
  };
};

/**
 *
 * @param {tVector} v1
 * @param {tVector} v2
 */
export const dot2Vector = (v1, v2) => {
  return v1.x * v2.x + v1.y * v2.y;
};

/**
 *
 * @param {tVector} v1
 * @param {tVector} v2
 */
export const cross2VectorValue = (v1, v2) => {
  return v1.x * v2.y - v1.y * v2.x;
};
