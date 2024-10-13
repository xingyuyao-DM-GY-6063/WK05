// TODO: animation across the screen
//       wrap around
//       bounce
//let x;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);

 // x = 0;
}

function draw() {
  background(20);
  //draw stuff
  let xpos = 10 * frameCount;
  ellipse(xpos % width, height / 2, 100);
//ellipse(x % width);
  //update some parameter
  //x = x + 8;

  // check if need to reset x 
  //if (x > width) {
    //x = 0;
  //}
}
