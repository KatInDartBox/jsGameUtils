/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number} could be min or max
 */
export const getRnd = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
