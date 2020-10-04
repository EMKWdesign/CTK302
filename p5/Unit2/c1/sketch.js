var x = 0 ;
var velocity = 0 ;
var mic;
var vol;
var c = 'green';

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);
  fill('blue');
  rect(x, 300, 75, 70);
  x = x + velocity;

  vol = (mic.getLevel()).toFixed(2);
  velocity = 0;
  if (vol > .10) {
    //speed
    velocity = 10;
  }

//loop
  if (x>width) x=0;

  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


function touchStarted() {
  getAudioContext().resume();
}
