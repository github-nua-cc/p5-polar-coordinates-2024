let randomColor;

function setup() {
  //create canvas of wohle screen
  createCanvas(windowWidth, windowHeight);

  // set up background to greyscale 220
  background(0);

  //remove stroke
  noStroke();

  //set a random color to be the fill
  randomColor = generateRandomColor();
}

function draw() {}
