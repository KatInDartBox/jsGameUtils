import { getBoundingClientRect } from "./getBoundingClientRect.js";

export class Round {
  /**
   *
   * @param {number} x center x coordinate
   * @param {number} y center y coordinate
   * @param {number} radius
   */
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  get bbox() {
    return getBoundingClientRect(this.x - this.radius, this.y - this.radius, this.radius, this.radius);
  }
}
