var x = 0;
var velocity = 0;
var mic;
var vol;
var c = 'lightBlue';
let img;

function preload() {
  img1 = loadImage('assets/fish1.png');
  img2 = loadImage('assets/fish2.png');
  img3 = loadImage('assets/fish3.png');
  img4 = loadImage('assets/fish4.png');
  img5 = loadImage('assets/fish5.png');
  img6 = loadImage('assets/fish6.png');
  img7 = loadImage('assets/fish7.png');
  img8 = loadImage('assets/fish8.png');
  img9 = loadImage('assets/fish9.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);
  fill('blue');
  x = x + velocity;
  vol = (mic.getLevel()).toFixed(2);

  velocity = 1;
  if (vol > .05) {
    //speed
    velocity = 10;
  }

//swimming right
  image(img1, x - 200, 50, 200, 200);
  image(img5, x - 200, 250, 200, 200);
  image(img6, x - 200, 350, 200, 200);
  image(img7, x - 200, 450, 200, 200);
  image(img8, x - 200, 550, 200, 200);

//swimming left
image(img3, x - 200, 150, 200, 200);
  image(img2, x - 200, 500, 200, 200);
  image(img4, x - 200, 300, 200, 200);
  image(img9, x - 200, 100, 200, 200);

  //loop
  if (x > width + 200) x = 0;

  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


function touchStarted() {
  getAudioContext().resume();
}
