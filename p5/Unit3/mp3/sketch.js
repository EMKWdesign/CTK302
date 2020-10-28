//instead of var myCar# you can have multiples without needing copy
var cars = [];
var frogPos;
var myState = 0;
var maxCars = 10;
var maxTimer = 30;
var timer = maxTimer;

let tank;
let fish;
let reflectfish;
let rotatefish;
let lose;
let win;


function setup() {
  createCanvas(2880 / 2, 2104 / 2);

  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  lose = loadSound('assets/lost.mp3');
  win = loadSound('assets/success.mp3');


  frogPos = createVector(width / 2, height - 300);
  textAlign(CENTER);
  imageMode(CENTER);
  tank = loadImage('assets/tank.png');
  fish = loadImage('assets/fish6.png');
  reflectfish = loadImage('assets/reflectfish.png');
  rotatefish = loadImage('assets/rotatefish.png');
}

function draw() {

  switch (myState) {
    case 0: // menu
      background('pink');
      image(fish, width / 2, height / 2);
      fill('white');
      textSize(24);
      text("Fish Tank!", width / 2, height / 2 - 200);
      text("- Click to Start -", width / 2, height / 2 + 200);
      break;

    case 1: // game state

      image(tank, 0, 0, 2880, 2104);
      game();
      if (frameCount % 60 == 0 && timer > 0) {
        // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
          timer --;
        }
      if (timer <= 0) {
        timer = maxTimer;
        lose.play();
        myState = 3;
      }
      fill('white');
      textSize(24);
      text("Time: " + timer, 1350, 50);
      text("Use the arrow keys to move.\n Collect all of the food with in 30 seconds to win.", 720, 100);
      break;

    case 2: //win myState

      background('green');
      image(fish, width / 2, height / 2);
      textSize(24);
      text("You Won!", width / 2, height / 2 - 200);
      text("- Click to Play Again -", width / 2, height / 2 + 200);
      break;

    case 3: //lose

      background('red');
      image(rotatefish, width / 2, height / 2);
      fill('white');
      textSize(24);
      text("You Lost :(", width / 2, height / 2 - 200);
      text("- Click to Play Again -", width / 2, height / 2 + 200);
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
      myState = 1;
      break;
  }
}



function game() {

  background('lightblue');
  image(tank, width / 2, height / 2, 2880 / 2, 2100 / 2);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 75) {
      cars.splice(i, 1);

    }
  }

  if (cars.length == 0) {
    win.play();
    myState = 2;

  }


  //frog
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  //call keyboard commands
  checkForKeys();


}


//keyboard commands
function checkForKeys() {
if (keyIsDown(UP_ARROW)) frogPos.y -= 7;


if (keyIsDown(UP_ARROW) && !(keyIsDown(RIGHT_ARROW))) {
  image(fish, frogPos.x, frogPos.y, 250, 171);
}

if (keyIsDown(DOWN_ARROW)) frogPos.y += 7;

if (keyIsDown(DOWN_ARROW) && !(keyIsDown(RIGHT_ARROW))) {
  image(fish, frogPos.x, frogPos.y, 250, 171);
}

if (keyIsDown(LEFT_ARROW) && !(keyIsDown(RIGHT_ARROW))) {
  image(fish, frogPos.x, frogPos.y, 250, 171);
}

if (keyIsDown(LEFT_ARROW)){frogPos.x -= 7;
  image(fish, frogPos.x, frogPos.y, 250, 171);
}

if (keyIsDown(RIGHT_ARROW)) {
  frogPos.x += 7;
  image(reflectfish, frogPos.x, frogPos.y, 250, 171);
}

if (!(keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)))
image(fish, frogPos.x, frogPos.y, 250, 171);


      if (frogPos.x < 0) frogPos.x = 0;
      if (frogPos.x > width) frogPos.x = width;
      if (frogPos.y < 0) frogPos.y = 0;
      if (frogPos.y > height) frogPos.y = height;
    }




      // our car class
      function Car() {
        //attributes
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-5, 5), random(-5, 5));
        //methods
        this.display = function() {
          fill('yellow');
          ellipse(this.pos.x, this.pos.y, 10, 10);
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

      function touchStarted() {
        getAudioContext().resume();
      }
