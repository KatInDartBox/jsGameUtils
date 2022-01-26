import { getBoundingClientRect } from "./getBoundingClientRect.js";

/** @typedef {import('./getBoundingClientRect.js').tBbox} tBbox */

/**
 *
 * @param {tBbox} bBox
 * @returns
 */
export function getVerticesBbox(bBox) {
  return [
    { x: bBox.left, y: bBox.top },
    { x: bBox.right, y: bBox.top },
    { x: bBox.right, y: bBox.bottom },
    { x: bBox.left, y: bBox.bottom },
  ];
}

/**
 * @param {number} x0 top left x coordinate of obj
 * @param {number} y0 top left y coordinate of obj
 * @param {number} width
 * @param {number} height
 * @return
 */
export function getVerticesRect(x0, y0, width, height) {
  const box = getBoundingClientRect(x0, y0, width, height);
  return getVerticesBbox(box);
}
