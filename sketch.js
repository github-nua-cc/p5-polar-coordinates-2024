// Convert a radius and theta to to an x and y object
// In order to use this function, we can do the following anywhere in the code:
// const cartesian = polarToCartesian(radius, theta);
// If we use cartesian.x afterwards, that contains the x coordinate value
// if we use cartesian.y afterwards, that contains the y coordinate value
function polarToCartesian(radius, theta) {
  return { x: radius * cos(theta), y: -radius * sin(theta) };
}

// Convert an x and y in cartesian to html
// In order to use this function, we can do the following anywhere in the code:
// const html = cartesianToHtml(cartesian); -> where cartesian is an object of type {x: xCoordinate, y: yCoordinate}
// If we use html.x afterwards, that contains the x coordinate value in html form
// if we use html.y afterwards, that contains the y coordinate value in html form
function cartesianToHtml(cartesian) {
  const centre = { x: canvasSize / 2, y: canvasSize / 2 };
  return { x: centre.x + cartesian.x, y: centre.y + cartesian.y };
}

function polarToHtml(radius, theta) {
  const cartesianCoordinates = polarToCartesian(radius, theta);
  const htmlCoordinates = cartesianToHtml(cartesianCoordinates);
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
