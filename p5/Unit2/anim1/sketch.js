var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  textSize(50);
  text("Spaghetti ~",x, 250);
  x = x + 3;

  if (x > width) {
    x = 0;
  }
}
function setup() {
  createCanvas(500, 500);
}
