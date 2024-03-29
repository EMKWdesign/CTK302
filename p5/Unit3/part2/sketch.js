let cars = [];

function setup() {
  createCanvas(500, 500);

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
}

function draw() {
  background('grey');
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
}

class Car {

  constructor() {
    //attributes
    this.pos = createVector(100, 100);
    //velocity & particle angle: positive positive is aimed down to the right
    this.vel = createVector(random(10), random(10));
    //color rgb
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    //opacity or alpha
    this.a = random(200, 255);
    //size
    this.s = random(10, 20);
  }
  //methods
  display() {
    //if you create an attribute, you must use the attribute
    fill(this.r, this.g, this.b, this.a, this.s);
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel);
    //opacity lessens
    this.a = this.a - 5;

  }



}
