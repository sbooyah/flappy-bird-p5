let bird;
let tower1;
let tower2;
let gameState = 'play';

function setup() {
  createCanvas(800, 800);
  colorMode(HSL, 359, 100, 100, 100);
  bird = new Bird(width/2, height/2, 20, 20);
  tower1 = new Tower(0, 100, 50);
  tower2 = new Tower(100, 100, 50);
  tower2.x+= width/2 + tower2.width/2;
}

function draw() {
  if (gameState == 'start') {           // START GAMESTATE
    background(50);
    tower1.x = width;
    tower2.x = width + width/1.8;
    textAlign(CENTER);
    text('Hello Bird Friend', width/2, height/2);
    text('Press ENTER to play', width/2, height/2 + 30);
  } else if (gameState == 'play'){      // PLAY GAMESTATE
    background(50);
    tower1.update(); 
    tower2.update();
    tower1.show();
    tower2.show();
    bird.update();
    bird.show();
  }
}

function keyPressed() {
  if (keyCode === 32) {
    bird.dy = -0.55;     
  } 
  if (keyCode === 13) {
    gameState = 'play';
  }
  if (keyCode === ESCAPE) {
    gameState = 'start';
  }
}