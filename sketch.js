let bird;
let tower1;
let tower2;
let gameState = 'play';

// background and ground images + scroll variables
let groundImg; // 1100 x 16
let groundScroll = 0;
let GROUND_SCROLL_SPEED = 0.125;
let GROUND_LOOPING_POINT = 80;
let backgroundImg; // 1157 x 288
let backgroundScroll = 0;
let BACKGROUND_SCROLL_SPEED = .07;
let BACKGROUND_LOOPING_POINT = 1146; 

function preload() {
  groundImg = loadImage('img/ground.png');
  backgroundImg = loadImage('img/background.png');
}

function setup() {
  createCanvas(800, 800);
  colorMode(HSL, 359, 100, 100, 100);
  bird = new Bird(width/2, height/2, 20, 20);
  tower1 = new Tower(0, 100, 50);
  tower2 = new Tower(100, 100, 50);
  tower2.x+= width/2 + tower2.width/2;
  image(backgroundImg, -backgroundScroll, 0);
  backgroundImg.resize(0, 800);

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
    backgroundScroll = (backgroundScroll + BACKGROUND_SCROLL_SPEED * deltaTime) % BACKGROUND_LOOPING_POINT;
    groundScroll = (groundScroll + GROUND_SCROLL_SPEED * deltaTime) % GROUND_LOOPING_POINT;
    image(backgroundImg, -backgroundScroll, 0);
    tower1.update(); 
    tower2.update();
    tower1.show();
    tower2.show();
    image(groundImg, -groundScroll, height-16);
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