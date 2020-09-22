let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
 switch(state){
   case 0:
   background('orange');
   text("What do you call a fake noodle?", 250, 250);
   break;


   case 1:
   background('purple');
    text("...An impasta!", 250, 250);
   break;



 }
}

function mouseReleased(){
  state++ ;
  if (state > 1){
    state = 0;
  }
}
