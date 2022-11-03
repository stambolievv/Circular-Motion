import Vector2D from '../utils/Vector2D.js';
import { getRandomFloat, getRandomInt } from '../utils/misc.js';

export default class Particle {
  constructor({ position, config = {} } = {}) {
    this.factor = getRandomInt(config.factor.inner, config.factor.outer);

    this.position = new Vector2D(position);
    this.velocity = new Vector2D().set(this.factor);
    this.config = config;

    this.angle = getRandomInt(0, Math.PI * 2);
    this.hue = getRandomInt(this.config.color.hue.min, this.config.color.hue.max);
    this.lightness = getRandomInt(this.config.color.lightness.min, this.config.color.lightness.max);
    this.lineWidth = getRandomFloat(this.config.lineWidth.min, this.config.lineWidth.max);

    this.lastPosition = this.position.clone();
    this.lastMousePosition = this.position.clone();
  }

  /**
   * @description Creates a path, moves to the last position, and then draws a line to the current position. Then adds the `changingHueSpeed` to the hue, which is then used to create a color variable.
   * @param {CanvasRenderingContext2D} context - The context of the canvas.
   */
  draw(context) {
    this.hue += this.config.changingHueSpeed;
    const color = `hsl(${this.hue}, 100%, ${this.lightness}%)`;

    context.beginPath();
    context.moveTo(...this.lastPosition.toArray());
    context.lineTo(...this.position.toArray());
    context.closePath();

    context.strokeStyle = color;
    context.lineWidth = this.lineWidth;
    context.stroke();
  }

  /**
   * @description It's updating the position of the particle by adding the velocity to the last mouse position.
   * @param {object} mouse - The current mouse position.
   */
  update(mouse) {
    /* Updating the position of the particle. */
    this.lastPosition.copy(this.position);
    this.angle += this.factor * this.config.rotationSpeed;

    /* It's calculating the difference between the mouse position and the last mouse position. */
    const mouseVector = new Vector2D({ x: mouse.x, y: mouse.y });
    const difference = mouseVector.subtract(this.lastMousePosition);
    const modified = difference.multiplyScalar(this.config.followSpeed);
    /* It's checking if the mouse is moving. If it is, it's adding the modified vector to the last mouse position. */
    if (mouseVector.length !== 0) this.lastMousePosition.addSelf(modified);

    /* It's calculating the velocity of the particle. */
    const velocity = this.velocity.multiplyScalar(Math.cos(this.angle), Math.sin(this.angle));
    const lastPosition = this.lastMousePosition.add(velocity);
    /* It's setting the current position of the particle to the last position. */
    this.position.copy(lastPosition);
  }
}