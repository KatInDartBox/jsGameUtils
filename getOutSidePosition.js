import { getRnd as rnd } from "./getRnd.js";

/** @typedef {'top'|'bottom'|'left'|'right'} tPosition */

/**
 *
 * @param {number} constraint
 * @param {number} width
 * @param {number} height
 * @param {tPosition[]} [positions]
 * @returns {{x:number,y:number}}
 */
export const getOutSidePosition = (constraint, width, height, positions) => {
  /* case
  left: x=-constrain, y=rnd(0,height)
  right: x=width+constrain, y=rnd(0,height)
  top: x=rnd(0,width), y=-constrain 
  bottom: x=rnd(0,width), y=height+constrain
  */
  positions = positions ? positions : ["top", "bottom", "left", "right"];
  const left = {
    x: -constraint,
    y: rnd(0, height),
  };
  const right = {
    x: width + constraint,
    y: rnd(0, height),
  };
  const top = {
    x: rnd(0, width),
    y: -constraint,
  };
  const bottom = {
    x: rnd(0, width),
    y: height + constraint,
  };
  const position = {
    top,
    bottom,
    left,
    right,
  };
  let usePositions = [];
  positions.forEach((pos) => {
    usePositions.push(position[pos]);
  });
  return usePositions[rnd(0, usePositions.length - 1)];
};

// const a1 = getOutSidePosition(5, 35, 15);
// const a2 = getOutSidePosition(10, 50, 70, ["top"]);
// const a3 = getOutSidePosition(2, 22, 42, ["left", "right"]);
// const a4 = getOutSidePosition(4, 34, 14, ["bottom"]);

// console.log(`from test:\n`, {
//   a1,
//   a2,
//   a3,
//   a4,
// });
