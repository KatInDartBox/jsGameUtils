import * as pkg from "../numbers/random.js";

const rnd = pkg.getRandomInteger;
/**
 *
 * @param {number} constraint
 * @param {number} width
 * @param {number} height
 * @returns {{x:number,y:number}}
 */
export const getOutSidePosition = (constraint, width, height) => {
  /* case
  case1: x=-constrain, y=rnd(0,height)
  case2: x=width+constrain, y=rnd(0,height)
  case3: x=rnd(0,width), y=-constrain 
  case4: x=rnd(0,width), y=height+constrain
  */
  const pos0 = {
    x: -constraint,
    y: rnd(0, height),
  };
  const pos1 = {
    x: width + constraint,
    y: rnd(0, height),
  };
  const pos2 = {
    x: rnd(0, width),
    y: -constraint,
  };
  const pos3 = {
    x: rnd(0, width),
    y: height + constraint,
  };
  const posIndex = rnd(0, 3);
  const positions = [pos0, pos1, pos2, pos3];
  return positions[posIndex];
};

// const a1 = getOutSidePosition(5, 35, 15);
// const a2 = getOutSidePosition(10, 50, 70);
// const a3 = getOutSidePosition(2, 22, 42);
// const a4 = getOutSidePosition(4, 34, 14);

// console.log(`from test:\n`, {
//   a1,
//   a2,
//   a3,
//   a4,
// });
