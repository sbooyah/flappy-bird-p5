class Tower{
  constructor() {
    this.x = width;
    this.topY = -2;
    this.dx = -5;
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
    fill(0, 100, 100);
    text(`Top Tower 
          x: ${this.x} 
          topY: ${this.topY} 
          width: ${this.width} 
        topHeight: ${this.topHeight}`, 20, 20);
    text(`Bot Tower 
          x: ${this.x} 
          botY: ${this.botY} 
          width: ${this.width} 
          botHeight: ${this.botHeight}`, 20, 120);
    text(`opening ${this.opening}`, 20, 200)
  }
}