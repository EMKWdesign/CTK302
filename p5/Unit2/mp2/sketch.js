var x = 0;
var velocity = 0;
var mic;
var vol;
var c = 'lightBlue';
let numberOfTouches;
let img;

function preload() {
  img1 = loadImage('assets/fish1.png');
  img6 = loadImage('assets/fish6.png');
  img8 = loadImage('assets/fish8.png');

  img5 = loadImage('assets/fish5.png');
  img7 = loadImage('assets/fish7.png');
  img8 = loadImage('assets/tank.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(12);
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  clear();
  numberOfTouches = touches.length; //automatically available to us
    //numberOfTouches = 2;
  text(numberOfTouches + 'touches', 20, 40);

  background(c);
image(img8,0 ,0 , width, height);
  x = x + velocity;
  vol = (mic.getLevel()).toFixed(2);

  velocity = random(2);
  if (vol > .05) {
    //speed
    velocity = random(8,10);
  }



  switch (numberOfTouches) {
    case 0:
      text("If you can read this, \nDo me a favor and touch the screen.", 20, 80);
      break;

    case 1:
      image(img1, x - 200, 100, 200, 200);
      text("Haha nice! That tickles. \nDo it again. \n(Add a finger)", 20, 80);

      // put a picture here
      break;

    case 2:
      image(img1, x - 200, 100, 200, 200);
      image(img6, x - 300, 350, 200, 200);
      text("Woah! Hahaha! \nMore! More! Hahaha! \n(Add a finger)", 20, 80);
      // put a picture here
      break;

    case 3:
    image(img1, x - 200, 100, 200, 200);
    image(img6, x - 300, 350, 200, 200);
      image(img8, x - 400, 550, 200, 200);
      text("HAHAHAHA! Oh my gosh- I can barely breathe \n It tickles so much! HAHA- \n(Add a finger)", 20, 80);
      // put a picture here
      break;

  }
}

function touchStarted() {
  getAudioContext().resume();
}
