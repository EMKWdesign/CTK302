var f1, f2;

function setup() {
  createCanvas(800,800);

f1 = loadFont ("assets/Aveto.ttf");
f2 = loadFont ("assets/BigDesigner.ttf");

textAlign (CENTER);
}

function draw() {
  background(100);
  textFont(f1);
  textSize(60);

  text("aliens", width/2, height/2 - 100);
  textFont(f2);
  textSize(30);
  text("Very Cool", width/2, height/2 + 100);

}
