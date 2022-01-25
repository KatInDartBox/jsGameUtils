import { getNormUnit, dot2Vector } from "../vector.js";
import { is2RectCollide } from "./rect2rect.js";

/** @typedef {{x:number,y:number} tPoint} */
/** @typedef {{x:number,y:number} tVector} */
/** @typedef {tPoint[]} tPolygon */

/**
 *
 * @param {tPoint[]} convectPoly1 convect polygon 1 with at least 2 points
 * @param {tPoint[]} convectPoly2 convect polygon 2 with at least 2 points
 */
export const is2PolyCollide = (convectPoly1, convectPoly2) => {
  const bbox1 = getBboxPolygon(convectPoly1);
  const bbox2 = getBboxPolygon(convectPoly2);

  const isBboxCollide = is2RectCollide(bbox1, bbox2);
  if (!isBboxCollide) return false;

  const normAxis1 = getNormUnits(convectPoly1);
  const normAxis2 = getNormUnits(convectPoly2);

  const normsAxisAll = [...normAxis1, ...normAxis2];
  const normsAxis = filterAxis(normsAxisAll);
  const len = normsAxis.length;

  for (let i = 0; i < len; i++) {
    const axis = normsAxis[i];

    const isCollide = is2PolyCollideByAxis(convectPoly1, convectPoly2, axis);
    if (!isCollide) return false;
  }
  return true;
};

/**
 * @param {tPoint[]} convectPoly convect polygon 1 with at least 3 edges
 *
 */
export const getNormUnits = (convectPoly) => {
  const points = convectPoly;
  const len = points.length;
  if (points.length <= 1) {
    throw new Error("getNormUnits required at least 2 points");
  }
  let p0 = points[0];
  let norms = [];

  for (let i = 1; i <= len; i++) {
    const pi = i === len ? points[0] : points[i];
    const ni = getNormUnit(p0, pi);
    norms.push(ni);
    p0 = pi;
  }
  return norms;
};

/**
 * @param {tPolygon} polygon
 * @param {tVector} projectionAxis
 */
export const getPolygonProjection = (polygon, projectionAxis) => {
  const axis = projectionAxis;
  const points = polygon;
  const len = points.length;

  let min = dot2Vector(polygon[0], axis);
  let max = dot2Vector(polygon[0], axis);

  for (let i = 1; i < len; i++) {
    const projection = dot2Vector(polygon[i], axis);
    if (projection >= max) {
      max = projection;
    }
    if (projection <= min) {
      min = projection;
    }
  }
  return { min, max };
};

/**
 * @param {tPolygon} poly1
 * @param {tPolygon} poly2
 * @param {tPolygon} projectionAxis
 */
export const is2PolyCollideByAxis = (poly1, poly2, projectionAxis) => {
  const p1 = getPolygonProjection(poly1, projectionAxis);
  const p2 = getPolygonProjection(poly2, projectionAxis);

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
 * @param {tPolygon} polygon
 * @param {(point:tPoint)=>number} iterator
 */
export const getMinMax = (polygon, iterator) => {
  let min = iterator(polygon[0]);
  let max = iterator(polygon[0]);
  const len = polygon.length;
  for (let i = 1; i < len; i++) {
    const v = iterator(polygon[i]);
    if (v <= min) {
      min = v;
    }
    if (v >= max) {
      max = v;
    }
  }
  return { min, max };
};
/**
 *
 * @param {tPolygon} polygon
 */
export const getBboxPolygon = (polygon) => {
  const xMinMax = getMinMax(polygon, (p) => p.x);
  const yMinMax = getMinMax(polygon, (p) => p.y);
  const x = xMinMax.min;
  const y = yMinMax.min;
  const width = Math.abs(xMinMax.max - xMinMax.min);
  const height = Math.abs(yMinMax.max - yMinMax.min);

  return { x, y, width, height };
};

/**
 *
 * @param {tPoint[]} axises
 */
export const filterAxis = (axises) => {
  let loopedObj = {};
  let usedAxises = [];
  /** @param {tPoint} axis */
  const getKey = (axis) => {
    const x = axis.x.toString().slice(0, 8);
    const y = axis.y.toString().slice(0, 8);
    return `${x}||${y}`;
  };
  for (let i = 0; i < axises.length; i++) {
    const axis = axises[i];
    const keyPositive = getKey(axis);
    const keyNegative = getKey({ x: -axis.x, y: -axis.y });
    if (loopedObj[keyPositive] || loopedObj[keyNegative]) {
      continue;
    } else {
      usedAxises.push(axis);
      loopedObj[keyPositive] = true;
      loopedObj[keyNegative] = true;
    }
  }
  return usedAxises;
};

// const p1 = [
//   { x: 6, y: 15 },
//   { x: 7, y: 8 },
//   { x: 16, y: 6 },
// ];
// const p2 = [
//   { x: 2, y: 6 },
//   { x: 5, y: 3 },
//   { x: 8, y: 3 },
//   { x: 11, y: 6 },
//   { x: 8, y: 9 },
//   { x: 5, y: 9 },
// ];
// const t1 = is2PolyCollide(p1, p2);

// console.log("t1 ", t1);
