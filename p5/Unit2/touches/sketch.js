let numberOfTouches ;
let myFont;
function preload() {
  myFont = loadFont('assets/dogicapixel.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);
 textSize(12);
}

function draw() {
  clear();
  numberOfTouches = touches.length; //automatically available to us
  text(numberOfTouches + ' touches', 20, 40);

  switch(numberOfTouches) {
    case 0:
      background:('white');
      text("If you can read this, \nDo me a favor and touch the screen.", 20, 80) ;
      break ;

      case 1:
      push();
      background:('lightBlue');
      text("Haha nice! That tickles. \nDo it again. \n(Add a finger)", 20, 80) ;
      pop();
      // put a picture here
      break ;

      case 2:
        push();
      background:('pink');
      text("Woah! Hahaha! \nMore! More! Hahaha! \n(Add a finger)", 20, 80) ;
      pop();
            // put a picture here
      break ;

      case 3:
        push();
      background:('lavender');
     text("HAHAHAHA! Oh my gosh- I can barely breathe \n It tickles so much! HAHA- \n(Add a finger)", 20, 80) ;
     pop();
            // put a picture here
      break ;

      case 4:
        push();
      background:('moccasin');
      text("HeeHeeHaHA! HeHeHeHo! AhhahaHeHe! \nHohohohoh! HeeHeehoo! Haha~! \n(Add a finger)", 20, 80) ;
      pop();
            // put a picture here
      break ;

  }

}
