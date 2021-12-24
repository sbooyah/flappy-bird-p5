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
    if (this.y > height - (this.w/2)) {{
      this.dy = 0;
      this.y = height - (this.w/2)
    }}
    this.y = this.y + this.dy;
  }
}