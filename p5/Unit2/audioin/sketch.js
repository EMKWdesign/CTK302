var mic;
var vol;
var c = 'lightBlue';
let x = 0;
let img;
function preload() {
  img = loadImage('assets/fish.png');
}

function setup() {
  createCanvas(windowHeight, windowWidth);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
}

function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .02) { // if the volume is LOUD?
    // do something
    c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
    x = x + 1;
  }
  image(img, x, 200, 201, 129.5);

  // extra stuff for debugging
  textSize(18);
  text("Click the screen \n& make some noise! \nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
