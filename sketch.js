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
  const centre = { x: windowWidth / 2, y: windowHeight / 2 };
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
  return (50 / 2880 * windowWidth) * theta;
}

function setup() {

  // create a canvas of size windowWidth x windowHeight
  // windowWidth and windowHeight are variables given to us by by p5.js
  createCanvas(windowWidth, windowHeight);

  noStroke();
}

let offset = 0;

function draw() {
  // set up background to greyscale 220
  background(220);

  //set stroke
  const stroke = 20;

  //drawing a circle using radians and degrees
  for (let theta = 0; theta < 7 * 360; theta = theta + 0.1) {
    //change theta to pi style
    const piTheta = degreesToRadians(theta);

    //get radius
    const radius = radiusForSpiral(piTheta);

    //get html coordinates for this degree
    const htmlCoordinates = polarToHtml(radius, piTheta + offset);

    //draw circle
    circle(htmlCoordinates.x, htmlCoordinates.y, stroke);
  }
  
  offset = offset + 0.01;
}