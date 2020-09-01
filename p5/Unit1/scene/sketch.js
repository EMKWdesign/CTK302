function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(640, 360);
}
function draw(){

  //Background
  background('lightBlue');
  noStroke();

  //trunk
fill('sienna');
rect(130, 120, 63, 250);
  //tree leaves1
fill ('darkGreen')
ellipse(100, 120, 150, 150);
  //tree leaves2
fill ('green')
ellipse(220, 120, 150, 150);
  //tree leaves3
fill ('green')
ellipse(160, 50, 150, 150);

  //hill
fill('darkGreen');
arc(320, 370, 640, 200, PI, TWO_PI);

  //chimney
fill('sienna');
rect(270, 40, 50, 70);
  //house
  fill('sienna');
rect(255, 120, 250, 250);
  //roof
fill('grey');
triangle(380, 20, 210, 150, 550, 150);
  //window
  fill('lightBlue');
rect(280, 180, 85, 90);
  //door
  fill('saddleBrown');
rect(395, 220, 85, 220);

  //sun
fill(255);
ellipse(560, 70, 110, 110);


fill('white');
text(mouseX + ',' + mouseY, 20, 20);
}
