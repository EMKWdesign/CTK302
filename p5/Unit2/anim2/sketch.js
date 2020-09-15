var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  //Background
  background('lightBlue');
  noStroke();
  //groundback (appears behind avatar)
  fill('darkOliveGreen');
  rect(0, 450, 500, 45);

  //textbox
  let s = 'This is Cowboye. He is just a simple cowpoke that heards cattle all day long. Yeehaw.';
  fill(50);
  text(s, 10, 10, 300, 100); // Text wraps within text box

//animated avatar
  push();
  translate(x, 0);
  scale(.5);
  avatar();
  x = x + 5;
  if (x > width) {
    x = -400;
  }
  pop();

  //groundfront (appears in front of avatar)
  fill('oliveDrab');
  rect(0, 460, 500, 40);

}
