import Particle from './entities/Particle.js';
import config from './config.js';
import { array } from './utils/misc.js';

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const mouse = { x: undefined, y: undefined };
/**@type {Array<Particle>} */
const particles = array(config.particle.amount, () => {
  const configuration = {
    position: { x: canvas.width / 2, y: canvas.height / 2 },
    config: config.particle
  };

  return new Particle(configuration);
});

(function animate() {
  window.requestAnimationFrame(animate);
  /* Creating the trial effect by setting the background color of the canvas with an alpha value.*/
  ctx.fillStyle = `${config.scene.color}${parseInt(config.scene.alpha,10).toString(16)}`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.draw(ctx);
    particle.update(mouse);
  });
})(0)

canvas.addEventListener('pointermove', event => {
  const screen = canvas.getBoundingClientRect();
  mouse.x = (event.clientX - screen.left) / (screen.right - screen.left) * canvas.width;
  mouse.y = (event.clientY - screen.top) / (screen.bottom - screen.top) * canvas.height;
});
canvas.addEventListener('pointerout', event => {
  mouse.x = undefined;
  mouse.y = undefined;
});