//instead of var myCar# you can have multiples without needing copy
var cars = [];

function setup() {
  createCanvas(800, 800);

  //"for loop"
  for (var i = 0; i < 20; i++) {
    cars.push(new Car());

  }

}

  function draw() {
    background('lightblue');

    for (var i = 0; i < cars.length; i++) {
      cars[i].display();
      cars[i].drive();
    }
  }

    // our car class
    function Car() {
      //attributes
      this.pos = createVector(random(width), random(height));
      this.vel = createVector(random(-5, 5), random(-5, 5));
      //methods
      this.display = function() {
        rect(this.pos.x, this.pos.y, 100, 100);
      }

      this.drive = function() {
        this.pos.add(this.vel);
        //This loops from all sides
        if (this.pos.x > width) this.pos.x = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y > height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;
      }
    }
