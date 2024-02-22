function setup() {
  //create canvas of wohle screen
  createCanvas(windowWidth, windowHeight - 60);

  // set up background to greyscale 220
  background(0);

  //remove stroke
  noStroke();

  //set angle mode to degrees
  angleMode(DEGREES);

  //set a random color to be the fill
  generateRandomColor();

  //fill with random color
  fill(randomColor);
}

function draw() {

  //translate to middle
  translate(width / 2, height / 2);

  //draw the circle
  // drawCircle();

  //draw the spiral
  // drawSpiral();

  //draw the heart
  drawHeart();
}
