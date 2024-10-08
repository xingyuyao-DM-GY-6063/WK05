// TODO: mouse hover effect
function overlapRect(x,y,w,h,c){
  let betweenX = (mouseX > x) && (mouseX < x + w);
  let betweenY = (mouseY > y) && (mouseY < y +h);
  push();
  if (betweenX && betweenY) {
    fill(c);
  }
  rect(x, y, w, h);
  pop();

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
  let rx = 100;
  let ry = 50;
  let rw = 400;
  let rh = 200;

  fill(100);

  overlapRect(rx,ry,rw,rh,"deeppink");
  overlapRect(600,50,100,100,"powderblue");



  let cx = 200;
  let cy = 500;
  let cr = 150;

  let distMouse = dist(mouseX, mouseY, cx, cy);

  push();
  if (distMouse < cr) {
    fill(255, 2, 234);
  } else {
    fill(255);
  }
  ellipse(cx, cy, 2 * cr);
  pop();
}
