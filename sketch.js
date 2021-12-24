class Bird{
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.dy = 0;
    this.w = w;
    this.h = h;
    this.g = 0.19;
  }
  show() {
    fill(0, 100, 100);
    ellipse(this.x, this.y, this.w, this.h);
  }
  update() {
    this.dy = this.dy + this.g;
    if (this.y > height) {
      this.y = -20
    }
    this.y = this.y + this.dy;
  }
}

class Tower{
  constructor() {
    this.x = width;
    this.topY = -2;
    this.dx = -5;
    this.width = 100;
    this.opening = 200;
    this.topHeight = this.randomize();
    this.botY = this.topHeight + this.opening;
    this.botHeight = height - this.botY;
  }
  randomize() {
    return Math.floor(Math.random() * (500 - 100 + 1) + 100);
  }
  show() {
    fill(0, 100, 50);
    rect(this.x, this.topY, this.width, this.topHeight);
    fill(200, 100, 50);
    rect(this.x, this.botY, this.width, this.botHeight);
  }
  update() {
    if (this.x + this.width < 0) {
      this.x = width;
      this.topHeight = this.randomize();
      this.botY = this.topHeight + this.opening;
      this.botHeight = height - this.botY;
    }
   this.x+= this.dx;
  }
  text() {
    text(`Top Tower x: ${this.x} - topY: ${this.topY} - width: ${this.width} - topHeight: ${this.topHeight}`, 20, 20);
    text(`Bot Tower x: ${this.x} - botY: ${this.botY} - width: ${this.width} - botHeight: ${this.botHeight}`, 20, 40);
    text(`opening ${this.opening}`, 20, 60)
  }
}

let bird;
let tower;
let gameState = 'play';

function setup() {
  createCanvas(800, 800);
  colorMode(HSL, 359, 100, 100, 100);
  bird = new Bird(width/2, height/2, 20, 20);
  tower = new Tower;
}

function draw() {
  if (gameState == 'start') {
    background(220);
    textAlign(CENTER);
    text('Hello Bird Friend', width/2, height/2);
    text('Press ENTER to play', width/2, height/2 + 30);
  } else if (gameState == 'play'){
    background(220);
    tower.update();
    tower.show();
    tower.text();
    bird.update();
    bird.show();
  }
}

function keyPressed() {
  if (keyCode === 32) {
    bird.dy = -7.5;     
  } if (keyCode === 13) {
    gameState = 'play';
  }
}