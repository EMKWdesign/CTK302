var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  push();
  translate(x, 0);
  rect(0, 250, 50, 50);
  x = x + 5;
  if (x > width) {
    x = 0;
    pop();

  }
}

function setup() {
  createCanvas(500, 500);
}
