//instead of var myCar# you can have multiples without needing copy
var cars = [];
var frogPos;
var myState = 0;
var maxCars = 10;
var maxTimer = 30*60;
var timer = maxTimer;

function setup() {
  createCanvas(800, 800);


  frogPos = createVector(width / 2, height - 100);

  textAlign(CENTER);

}

function draw() {

  switch (myState) {
    case 0: // menu
      background('pink');
      fill('white');
      textSize(24);
      text("Welcome to my game! (click)", width / 2, height / 2);
      break;

    case 1: // game state
      game();
      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 3;
      }
      break;

    case 2: //win myState
      background('green');
      fill('white');
      textSize(24);
      text("You Win!", width / 2, height / 2);
      break;

    case 3: //lose
      background('red');
      fill('white');
      textSize(24);
      text("You Lose :(", width / 2, height / 2);
      break;
  }


}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //they won
    //reset maxTimer
    timer = maxTimer;
      //spawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }
      myState = 0;
      break;

    case 3: // they lost
    //reset maxTimer
    timer = maxTimer;
      //spawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());

      }
      myState = 0;
      break;
  }
}



function game() {

  background('lightblue');

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);

    }
  }

  if (cars.length == 0) {
    myState = 2;

  }


  //frog
  fill('green');
  ellipse(frogPos.x, frogPos.y, 50, 50);

  //call keyboard commands
  checkForKeys();


}

//keyboard commands
function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}



// our car class
function Car() {
  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  //methods
  this.display = function() {
    rect(this.pos.x, this.pos.y, 10, 10);
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
