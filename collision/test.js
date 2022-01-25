import { Box } from "../box.js";

/** @typedef {import('../../state.js').tState} tState */

export class Box1 extends Box {
  constructor(x, y, w, h) {
    super(x, y, w, h);
  }
  /** @param {tState} state */
  draw(state) {
    const ctx = state.ctx;
    ctx.strokeStyle = "#cecece";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
  /** @param {tState} state */
  update(state) {
    this.draw(state);
    const mouse = state.mouse;
    this.x = mouse.x;
    this.y = mouse.y;
  }
  update2(state) {
    this.draw(state);
    this.x = this.x;
    this.y = this.y;
  }
}
