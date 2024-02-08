function setup() {
  noStroke();

  noLoop();

  setUpCanvas();
}

function draw() {
  //set a random color to be the fill
  const randomColor = generateRandomColor();
  fill(randomColor);

  //draw a circle
  drawCircle();
}
