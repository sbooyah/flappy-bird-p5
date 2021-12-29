class Tower{
  constructor(h, s, l) {
    this.x = width;
    this.h = h;
    this.s = s;
    this.l = l;
    this.topY = -2;
    this.dx = -0.3;
    this.width = 100;
    this.opening = 200;
    this.topHeight = this.randomize();
    this.botY = this.topHeight + this.opening;
    this.botHeight = height - this.botY + 1;
  }
  randomize() {
    return Math.floor(Math.random() * (500 - 100 + 1) + 100);
  }
  show() {
    fill(this.h, this.s, this.l);
    rect(this.x, this.topY, this.width, this.topHeight);
    rect(this.x, this.botY, this.width, this.botHeight);
  }
  update() {
    if (this.x + this.width < 0) {
      this.x = width;
      this.topHeight = this.randomize();
      this.botY = this.topHeight + this.opening;
      this.botHeight = height - this.botY;
    }
   this.x+= this.dx * deltaTime;
  }
  
}