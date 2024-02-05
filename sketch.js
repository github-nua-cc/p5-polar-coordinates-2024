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

function setup() {
  // create a canvas of size windowWidth x windowHeight
  // windowWidth and windowHeight are variables given to us by by p5.js
  createCanvas(windowWidth, windowHeight);

  // set up background to greyscale 220
  background(220);

  // centre stores the centre in an object
  // centre.x gives the horizontal coordinate of the centre
  // centre.y gives the vertical coordinate of the centre
  const centre = { x: windowWidth / 2, y: windowHeight / 2 };

  //remove stroke
  noStroke();

  // to draw a point in the centre
  let radius = 0;
  let theta = 0;
  let htmlCoordinates = polarToHtml(radius, theta);
  fill(color(0, 200, 200));
  circle(htmlCoordinates.x, htmlCoordinates.y, 50);

  //to draw a point towards the rigth
  radius = 500;
  theta = 0;
  htmlCoordinates = polarToHtml(radius, theta);
  fill(color(0, 200, 0));
  circle(htmlCoordinates.x, htmlCoordinates.y, 50);

  //to draw a point towards the top
  radius = 500;
  theta = PI / 2;
  htmlCoordinates = polarToHtml(radius, theta);
  fill(color(200, 200, 0));
  circle(htmlCoordinates.x, htmlCoordinates.y, 50);

  //to draw a point towards the left
  radius = 500;
  theta = PI;
  htmlCoordinates = polarToHtml(radius, theta);
  fill(color(200, 0, 200));
  circle(htmlCoordinates.x, htmlCoordinates.y, 50);

  //to draw a point towards the bottom
  radius = 500;
  theta = (3 * PI) / 2;
  htmlCoordinates = polarToHtml(radius, theta);
  fill(color(0, 0, 200));
  circle(htmlCoordinates.x, htmlCoordinates.y, 50);
}
