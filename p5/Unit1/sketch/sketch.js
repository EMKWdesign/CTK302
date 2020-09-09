function setup() {
createCanvas(800,800);
rectMode(CENTER);
}

function draw() {
fill(random(255),random(255), random(255), random(255));
rect(mouseX, mouseY,random(100),random(100));
}
