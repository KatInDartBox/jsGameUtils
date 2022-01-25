import { getUnit, getDistance2Point, dot2Vector } from "../vector.js";
import { getBboxPolygon, getPolygonProjection } from "./poly2poly.js";
import { is2RectCollide } from "./rect2rect.js";

/** @typedef {{x:number,y:number} tPoint} */
/** @typedef {{x:number,y:number} tVector} */
/** @typedef {tPoint[]} tPolygon */
/** @typedef {{x:number,y:number,radius:number}} tCircle */

/**
 *
 * @param {tCircle} circle
 * @param {tPolygon} polygon
 */
export const isCircleAndPolygonCollide = (circle, polygon) => {
  const cBox = getCircleBox(circle);
  const pBox = getBboxPolygon(polygon);
  const isBoxCollide = is2RectCollide(cBox, pBox);
  if (!isBoxCollide) return false;

  const axis = getAxis(polygon, circle);
  const circleMinMax = getCircleProjection(circle, axis);
  const polygonMinMax = getPolygonProjection(polygon, axis);

  if (
    circleMinMax.min > polygonMinMax.max || //
    polygonMinMax.min > circleMinMax.max
  ) {
    return false;
  } else {
    return true;
  }
};

/**
 * @param {tCircle} circle
 */
export const getCircleBox = (circle) => {
  return {
    x: circle.x - circle.radius,
    y: circle.y - circle.radius,
    width: circle.radius * 2,
    height: circle.radius * 2,
  };
};

/**
 *
 * @param {tPolygon} polygon
 * @param {tCircle} circle
 */
const getAxis = (polygon, circle) => {
  let minDistToCenter = getDistance2Point(polygon[0], circle);
  let axis = getUnit(polygon[0], circle);
  const len = polygon.length;

  for (let i = 1; i < len; i++) {
    const point = polygon[i];
    const dist = getDistance2Point(point, circle);
    if (dist < minDistToCenter) {
      minDistToCenter = dist;

      axis = getUnit(point, circle);
    }
  }
  return axis;
};

/**
 *
 * @param {tCircle} circle
 * @param {tVector} axis
 */
export const getCircleProjection = (circle, axis) => {
  const distCenter = dot2Vector(circle, axis);
  return {
    min: distCenter - circle.radius,
    max: distCenter + circle.radius,
  };
};

// const circle = {
//   x: 11,
//   y: 11,
//   radius: 3,
// };
// const polygon = [
//   { x: 2, y: 6 },
//   { x: 5, y: 3 },
//   { x: 8, y: 3 },
//   { x: 11, y: 6 },
//   { x: 8, y: 9 },
//   { x: 5, y: 9 },
// ];
// const t1 = isCircleAndPolygonCollide(circle, polygon);

// console.log("t1 ", t1);
