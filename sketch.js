let randomColor;

function setup() {
  noStroke();

  setUpCanvas();

  //set a random color to be the fill
  randomColor = generateRandomColor();
}


function draw() {
  //reset canvas
  // setUpCanvas();
  background(0);

  //fill drawing with random color
  fill(randomColor);

  //draw a heart
  // drawHeart();

  drawSpiral();
}