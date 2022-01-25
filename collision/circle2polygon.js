import { dot2Vector } from "../vector.js";
import { is2RectCollide } from "./rect2rect.js";
import { getBboxPolygon, filterAxis, getNormUnits, getPolygonProjection } from "./poly2poly.js";
/** @typedef {{x:number,y:number} tPoint} */
/** @typedef {{x:number,y:number} tVector} */
/** @typedef {tPoint[]} tPolygon */
/** @typedef {{x:number,y:number,radius:number}} tCircle */

/**
 *
 * @param {tCircle} circle convect polygon 1 with at least 2 points
 * @param {tPoint[]} polygon convect polygon 2 with at least 2 points
 */
export const isCircleAndPolygonCollide = (circle, polygon) => {
  const bbox1 = getCircleBox(circle);
  const bbox2 = getBboxPolygon(polygon);

  const isBboxCollide = is2RectCollide(bbox1, bbox2);
  if (!isBboxCollide) return false;

  const normsAxis = filterAxis(getNormUnits(polygon));
  const len = normsAxis.length;

  for (let i = 0; i < len; i++) {
    const axis = normsAxis[i];

    const isCollide = is2PolyCollideByAxis(circle, polygon, axis);
    if (!isCollide) return false;
  }
  return true;
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
 * @param {tCircle} circle
 * @param {tPolygon} poly
 * @param {tPolygon} projectionAxis
 */
export const is2PolyCollideByAxis = (circle, poly, projectionAxis) => {
  const p1 = getCircleProjection(circle, projectionAxis);
  const p2 = getPolygonProjection(poly, projectionAxis);

  if (
    p2.min > p1.max || //
    p1.min > p2.max
  ) {
    return false;
  } else {
    return true;
  }
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
