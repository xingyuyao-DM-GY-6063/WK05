// TODO: time with map() and mod

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);

  //period of our
  let P = 3000;

  let counter = millis() % P;
  let md = map(counter,0,P,20,800);
  let mr = map(counter,0,P,100,255);
  fill("pink");
  fill(mr,50,50);

  ellipse(width / 2, height / 2, md);
}


