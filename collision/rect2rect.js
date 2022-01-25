import { getBoundingClientRect } from "../getBoundingClientRect.js";

/**
 *
 * @param {number} x1 top left x coordinate of obj1
 * @param {number} y1 top left y coordinate of obj1
 * @param {number} w1 width of obj1
 * @param {number} h1 height of obj1
 * @param {number} x2 top left x coordinate of obj2
 * @param {number} y2 top left y coordinate of obj2
 * @param {number} w2 width of obj2
 * @param {number} h2 height of obj2
 * @return {boolean}
 */
export const is2RectCollideRaw = (x1, y1, w1, h1, x2, y2, w2, h2) => {
  const b1 = getBoundingClientRect(x1, y1, w1, h1);
  const b2 = getBoundingClientRect(x2, y2, w2, h2);
  if (
    b2.left > b1.right || //
    b2.bottom < b1.top ||
    b1.left > b2.right ||
    b1.bottom < b2.top
  ) {
    return false;
  } else {
    return true;
  }
};

/**
 * @typedef {Object} tBox
 * @property {number} x top left x coordinate of obj
 * @property {number} y top left y coordinate of obj
 * @property {number} width
 * @property {number} height
 *
 *
 */

/**
 *
 * @param {tBox} obj1
 * @param {tBox} obj2
 * @return {boolean}
 */
export const is2RectCollide = (obj1, obj2) => {
  return is2RectCollideRaw(
    obj1.x,
    obj1.y,
    obj1.width,
    obj1.height, //
    obj2.x,
    obj2.y,
    obj2.width,
    obj2.height
  );
};
