let randomColor;

function setup() {
  noStroke();

  setUpCanvas();

  //set a random color to be the fill
  randomColor = generateRandomColor();
}


function draw() {
  //reset canvas
  setUpCanvas();

  //fill drawing with random color
  fill(randomColor);

  //draw a spiral
  drawSpiral();

}