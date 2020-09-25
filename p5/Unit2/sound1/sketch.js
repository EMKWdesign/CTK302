var song1;

function preload(){
  song1 = loadSound("assets/nice.mp3");
}

function setup() {
createCanvas (500, 500);
  song1.loop();
}

function draw() {
  background('grey');

}
function mouseReleased(){
  if (song1.isPlaying()){
    song1.pause()
  } else {
    song1.loop();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
