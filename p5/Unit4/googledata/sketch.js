var font;
var bubbles = [];
let img;

function preload() {
  song1 = loadSound("assets/Danny.m4a");
  img1 = loadImage('assets/minecraft.png');
  img2 = loadImage('assets/Survey.png');
  song1.loop();
  song1.pause();
}

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1Df3I8M1v370PGMLTxYBJzITD0mEjR-84uIi_KAVf5t8';
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(1000, 812);

  font = loadFont("assets/1_Minecraft-Regular.otf");
  song1.play();
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Monster, data[i].Farm, data[i].Pet, data[i].Animal)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('blue');
  image(img1, 0, 0, width, height);
  image(img2, 250, 50, 500, 140);
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }
rectMode(CORNER);
textAlign(LEFT);
textSize(20);
rect(750, 757, 230, 30);
text("Fill Out Survey Here", 765, 778);
rect(20, 534, 320, 260);
text("Key:\n\n1.) Favorite Monster Mob\n\n2.) Favorite Farm Animal\n\n3.) Favorite Tameable Pet\n\n4.) Favorite Animal Overall", 50, 570);
}


//https://forms.gle/J8j85Fq9Xjt4GahE9
// my Bubble class
class Bubble {

  constructor(myMonster, myFarm, myPet, myAnimal) {
    this.monster = myMonster;
    this.farm = myFarm;
    this.pet = myPet;
    this.animal = myAnimal;
    this.pos = createVector(random(width), random(height));

  }


  display() {
    textFont(font);
    textSize(12);
    textAlign(CENTER);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, 80, 80);
    text(this.monster, this.pos.x, this.pos.y - 20);
    text(this.farm, this.pos.x, this.pos.y - 5);
    text(this.pet, this.pos.x, this.pos.y + 10);
    text(this.animal, this.pos.x, this.pos.y + 25);
  }
  drive() {
    this.pos.x += 2;
    if (this.pos.x > width) this.pos.x = 0;
  }
}

function mousePressed(){
  if ((mouseX > 750) && (mouseX < 980) && (mouseY > 757) && (mouseY < 787)){
    //range accounting for text length
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSf_FSpREuA9TfMX3kZDDi4S1iiZ3HhY8ddcc7nCDkVoNBwIhA/viewform?usp=sf_link");
}}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause()
  } else {
    song1.loop();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
