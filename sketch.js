let randomColor;

function setup() {
  //create canvas of wohle screen
  createCanvas(windowWidth, windowHeight);

  // set up background to greyscale 220
  background(0);

  //remove stroke
  noStroke();

  //set angle mode to degrees
  angleMode(DEGREES);

  //set a random color to be the fill
  randomColor = generateRandomColor();

  //fill with random color
  fill(randomColor);
}

function draw() {
  //translate to middle
  translate(windowWidth / 2, windowHeight / 2);

  //draw the circle
  drawCircle();
}
