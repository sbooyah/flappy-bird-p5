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
  if (gameState == 'start') {           // START GAMESTATE
    background(50);
    textAlign(CENTER);
    text('Hello Bird Friend', width/2, height/2);
    text('Press ENTER to play', width/2, height/2 + 30);
  } else if (gameState == 'play'){      // PLAY GAMESTATE
    background(50);
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