const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// setting correct scaling (by default it's 300x150px):
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 10;

const backgroundLayer1 = new Image();
backgroundLayer1.src = "./layers/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "./layers/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "./layers/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "./layers/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "./layers/layer-5.png";

let x = 0;
// let x2 = 2400;

class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }
  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = 0;
    } else this.x = Math.floor(this.x - this.speed);
    // if (this.x <= -this.width) this.x = 0;
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x + 2400, this.y, this.width, this.height);
  }
}

const layer1 = new Layer(backgroundLayer1, 0.2);
const layer2 = new Layer(backgroundLayer2, 0.4);
const layer3 = new Layer(backgroundLayer3, 0.6);
const layer4 = new Layer(backgroundLayer4, 0.8);
const layer5 = new Layer(backgroundLayer5, 1);

const gameObjects = [layer1, layer2, layer3, layer4, layer5];

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // ctx.drawImage(backgroundLayer3, x, 0);
  // ctx.drawImage(backgroundLayer3, x + 2400, 0);
  // x < -2400 ? (x = 0) : (x -= gameSpeed);
  gameObjects.forEach((object) => {
    object.update();
    object.draw();
  });

  // ctx.drawImage(backgroundLayer4, x, 0);
  // if (x < -2400) x = 2400 + x2 - gameSpeed;
  // x -= gameSpeed;

  // ctx.drawImage(backgroundLayer4, x2, 0);
  // if (x2 < -2400) x2 = 2400 + x - gameSpeed;
  // x2 -= gameSpeed;

  requestAnimationFrame(animate);
}

animate();
