//initially canvas size is zero
let canvasSize = 0;

//the archimedes spiral formula is r = a * theta, where a is a number of our choice
// we can choose a to be any number, so let's choose something that looks good!
function radiusForSpiral(theta) {
  // a is a ratio that has been found empirically
  return (50 / 2880) * windowWidth * theta;
}

function setup() {
  noStroke();

  //colors
  colors = [];

  //populate colors
  for (let i = 0; i < 255; i = i + 5) {
    let newColor = color(random(255), random(255), random(255), 255 - i);
    colors.push(newColor);
  }
}

function draw() {

  setUpCanvas();

  drawSpirals();  
}
