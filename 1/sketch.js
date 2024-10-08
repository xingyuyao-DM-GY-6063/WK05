// TODO: use map() to change shape's size

function setup() {
  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER);
}

function draw() {
  background(255, 20, 120);
  let mw = map(mouseX,0,width,300,50);
  rect(width / 2, height / 2, mw);
}

function mouseClicked(){
  background(random(255));
}