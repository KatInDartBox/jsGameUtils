/**
 * get position of object relative to first point
 * @param {number} startX
 * @param {number} startY
 * @param {number} angle in radian
 * @param {number} speed
 * @returns {{x:number,y:number}}
 */
export const getNextPosition = (startX, startY, angle, speed) => ({
  x: Math.cos(angle) * speed + startX,
  y: Math.sin(angle) * speed + startY,
});
