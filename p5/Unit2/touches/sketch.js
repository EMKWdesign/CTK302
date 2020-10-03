let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length; //automatically available to us
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("If you can read this, \ndo me a favor and touch the screen", 5, 22) ;
      break ;

      case 1:
       text("Haha nice! That tickles. \ndo it again.", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("Woah! Hahaha! \nMore! More! Hahaha!", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("HAHAHAHA! Oh my gosh- I can barely breathe \n It tickles so much! HAHA-", 5, 22) ;
            // put a picture here
      break ;

      case 4:
      text("HeeHeeHaHA! HeHeHeHo! AhhahaHeHe! \nHohohohoh! HeeHeehoo! Haha~!", 5, 22) ; 
            // put a picture here
      break ;

  }

}
