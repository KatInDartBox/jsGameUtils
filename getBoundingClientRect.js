/** @typedef {{x:number,y:number} tPos} */

/**
 * @typedef {Object} tBbox
 * @property {number} left
 * @property {number} right
 * @property {number} top
 * @property {number} bottom
 * @property {number} width
 * @property {number} height
 * @property {tPos} center
 * @property {tPos} centerTop
 * @property {tPos} centerBottom
 * @property {tPos} centerLeft
 * @property {tPos} centerRight
 *
 */

/**
 * @param {number} x0 top left x coordinate of obj
 * @param {number} y0 top left y coordinate of obj
 * @param {number} width
 * @param {number} height
 * @return {tBbox}
 */

export const getBoundingClientRect = (x0, y0, width, height) => {
  /** @type {tBbox} */
  let obj = {};
  obj.left = x0;
  obj.right = x0 + width;
  obj.top = y0;
  obj.bottom = y0 + height;
  obj.center = { x: (obj.left + obj.right) / 2, y: (obj.top + obj.bottom) / 2 };
  obj.centerTop = { x: obj.center.x, y: obj.top };
  obj.centerBottom = { x: obj.center.x, y: obj.bottom };
  obj.centerLeft = { x: obj.left, y: obj.center.y };
  obj.centerRight = { x: obj.right, y: obj.center.y };
  obj.width = width;
  obj.height = height;
  return obj;
};
