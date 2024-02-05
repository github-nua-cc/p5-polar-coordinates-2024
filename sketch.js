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

  //give a fill
  fill(color(0, 200, 200))

  // to draw a point in the centre:
  circle(centre.x, centre.y, 50)
}
