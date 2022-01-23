import { getBoundingClientRect } from "./getBoundingClientRect.js";

export class Box {
  /**
   *
   * @param {number} x top left x coordinate
   * @param {number} y top left y coordinate
   * @param {number} width
   * @param {number} height
   */
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get bbox() {
    return getBoundingClientRect(this.x, this.y, this.width, this.height);
  }
}
