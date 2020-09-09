var f1, f2;

function setup() {
  createCanvas(800,800);

f1 = loadFont ("assets/Alien.ttf");
f2 = loadFont ("assets/CloisterBlack.ttf");

textAlign (CENTER);
}

function draw() {
  background(100);

  textFont(f1);
  textSize(150);
  text("aliens", width/2, height/2 - 100);

  textFont(f2);
  textSize(72);
  text("Very Cool", width/2, height/2 + 100);

}
