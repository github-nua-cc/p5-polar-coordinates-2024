function polarToHtml(radius, theta) {
  //get x and y for cartesian
  const cartesianX = radius * cos(theta);
  const cartesianY = radius * sin(theta);

  //get x and y for html
  const htmlX = canvasSize / 2 + cartesianX;
  const htmlY = canvasSize / 2 - cartesianY;

  //build object from coordinates
  const htmlCoordinates = { x: htmlX, y: htmlY };
  return htmlCoordinates;
}

function degreesToRadians(thetaInDegrees) {
  return (thetaInDegrees * PI) / 180;
}

//the archimedes spiral formula is r = a * theta, where a is a number of our choice
// we can choose a to be any number, so let's choose something that looks good!
function radiusForSpiral(theta) {
  // a is a ratio that has been found empirically
  return (50 / 2880) * windowWidth * theta;
}

function setup() {
  noStroke();

  //canvas size
  canvasSize = 0;

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
  // create a canvas depending on the window size
  // windowWidth and windowHeight are variables given to us by by p5.js
  //get lower width or height as reference
  if (windowWidth > windowHeight) {
    canvasSize = windowHeight / 2;
    createCanvas(canvasSize, canvasSize);
  } else {
    canvasSize = windowWidth / 2;
    createCanvas(canvasSize, canvasSize);
  }

  // set up background to greyscale 220
  background(220);

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
