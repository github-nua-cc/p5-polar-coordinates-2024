function setup() {
  noStroke();

  setUpCanvas();

  //set a random color to be the fill
  const randomColor = generateRandomColor();
  fill(randomColor);
}

function draw() {
  //draw a spiral
  drawSpiral();
}
