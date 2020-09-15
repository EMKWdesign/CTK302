function avatar() {
  //body
  fill('white');
  rect(225, 300, 250, 250);


  //head
  fill(255);
  ellipse(350, 300, 250, 250);


  //pants
  fill('midnightBlue');
  rect(225, 450, 250, 125);
  fill('midnightBlue');
  rect(225, 550, 70, 300);
  fill('midnightBlue');
  rect(405, 550, 70, 300);

  //leg circle
  fill('lightBlue');
  ellipse(350, 575, 110, 110);



  //Shoe details

  fill('sienna');
  rect(225, 840, 70, 80);

  fill('sienna');
  rect(405, 840, 70, 80);

  fill('sienna');
  ellipse(230, 840, 65, 65);

  fill('sienna');
  ellipse(290, 840, 65, 65);

  fill('sienna');
  ellipse(410, 840, 65, 65);

  fill('sienna');
  ellipse(470, 840, 65, 65);

  //leg boxes
  fill('lightBlue');
  rect(295, 750, 110, 170);

  fill('lightBlue');
  rect(0, 750, 225, 170);

  fill('lightBlue');
  rect(475, 750, 225, 170);

  //Shoes
  fill('sienna');
  ellipse(225, 925, 110, 110);

  fill('sienna');
  ellipse(405, 925, 110, 110);

  //soles

  fill('sienna');
  rect(170, 920, 125, 10);

  fill('sienna');
  rect(350, 920, 125, 10);

  fill('oliveDrab');
  triangle(225, 930, 260, 920, 260, 930);
  fill('oliveDrab');
  triangle(405, 930, 440, 920, 440, 930);

  //cowboye hat
  fill('sienna');
  rect(155, 190, 390, 50);
  fill('sienna');
  ellipse(155, 190, 100, 100);
  fill('lightBlue');
  ellipse(205, 140, 110, 100);
  fill('sienna');
  ellipse(545, 190, 100, 100);
  fill('lightBlue');
  ellipse(495, 140, 110, 100);

  fill('sienna');
  ellipse(300, 170, 150, 200);
  fill('sienna');
  ellipse(400, 170, 150, 200);
  fill('sienna');
  rect(225, 170, 250, 50);
  fill('white');
  rect(225, 240, 250, 50);

  //nose
  fill('pink');
  ellipse(360, 360, 50, 50);
  fill('black');
  arc(315, 370, 100, 100, 245, HALF_PI);
  fill('white');
  rect(190, 330, 120, 80);
  fill('white');
  ellipse(190, 370, 80, 80);
  fill('white');
  ellipse(315, 370, 80, 80);
  blendMode(DARKEST);
  fill('pink');
  ellipse(360, 360, 50, 50);
  blendMode(BLEND);
  fill('black');
  ellipse(360, 366, 10, 10);
  fill('black');
  ellipse(315, 415, 10, 10);


  if (mouseIsPressed) {
    //eyez
    fill('black');
    rect(235, 300, 50, 10);
    fill('black');
    rect(335, 300, 50, 10);
  } else {
    //eyez
    fill('black');
    ellipse(260, 300, 50, 50);
    fill('black');
    ellipse(360, 300, 50, 50);
  }
}
