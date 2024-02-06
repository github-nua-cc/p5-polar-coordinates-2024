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

let offset = 0;

function draw() {

  setUpCanvas();
  
  //set stroke
  let stroke = 20;

  //drawing a circle using radians and degrees
  for (let theta = 0; theta < 7 * 360; theta = theta + 1) {
    //change theta to pi style
    const piTheta = degreesToRadians(theta);

    //get radius
    const radius = radiusForSpiral(piTheta);

    //get html coordinates for this degree
    const htmlCoordinates = polarToHtml(radius, piTheta + offset);
    fill(colors[0]);
    circle(htmlCoordinates.x, htmlCoordinates.y, stroke);

    //populate interior with random colors
    let nextRadius = radius - stroke / 2;
    let colorIndex = 1;
    while (nextRadius > stroke / 2 && colorIndex < colors.length) {
      const nextCoordinates = polarToHtml(nextRadius, piTheta + offset);

      //fill circle
      fill(colors[colorIndex]);
      circle(nextCoordinates.x, nextCoordinates.y, stroke);

      //update radius
      nextRadius = nextRadius - stroke / 2;
      colorIndex++;
    }
  }

  offset = offset + 0.04;
}
