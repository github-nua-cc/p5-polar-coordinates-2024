function setup() {
  //set no stroke
  noStroke();

  //setup the canvas - found in canvas.js
  setUpCanvas();

  //set no loop
  noLoop();
}

function draw() {
  //draw a few points using polar coordinates
  let radius = 0;

  //middle
  drawWithRandomColorAtPoint(0, 0);

  radius = 50;

  //right
  drawWithRandomColorAtPoint(radius, 0);

  //up
  drawWithRandomColorAtPoint(radius, 90);

  //left
  drawWithRandomColorAtPoint(radius, 180);

  //down
  drawWithRandomColorAtPoint(radius, 270);
}
