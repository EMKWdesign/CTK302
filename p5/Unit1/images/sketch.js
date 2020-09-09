var img1, img2, img3;

function setup() {
  createCanvas(800, 800);

  img1 = loadImage("assets/cat.png")
  img2 = loadImage("assets/clown.jpg")
  img3 = loadImage("assets/hand.jpg")

  imageMode(CENTER);
}

function draw() {
  background(100);

  image(img1, width / 2, height / 2, 200, 200)
  image(img2, width / 2, height / 2 - 220, 200, 200)
  image(img3, width / 2, height / 2 + 220, 200, 200)

}
