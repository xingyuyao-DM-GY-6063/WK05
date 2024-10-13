// TODO: global state variables

let cc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  cc = 0;
  md = 200;
}

function draw() {
  //if (cc > 50) {
    //fill(200, 0, 200);
  //}
  let md = map(cc,0,10,200,10);
  //ellipse(width / 2, height / 2, 5*cc);
  ellipse(width / 2, height / 2, md);
}

function mouseReleased() {
  cc += 1;

  print(cc,md);
}
