// The rose has n petals if n is odd, and 2n petals if n is even.
const n = 4;
// d is a positive integer and the angles are in degrees - degree at which 'the walker turns'
let d = 29;

//walkerArray
let walkerCoordinatesArray = [];

function updateWalkerArray(newD) {
  if (d === newD && walkerCoordinatesArray.length != 0) {
    return false;
  }

  d = newD;

  walkerCoordinatesArray = [];

  for (let index = 0; index < 361; index++) {
    const angle = (index * d) % 360;
    const radius = 200 * sin(n * angle);
    const cartesianCoordinates = polarToCartesian(radius, angle);
    walkerCoordinatesArray.push({
      x: cartesianCoordinates.x,
      y: cartesianCoordinates.y,
    });
  }

  return true;
}

function drawRose() {
  //reset background and stroke
  noStroke();

  //only redraw if d has been updated
  if (!updateWalkerArray(d)) return;

  //draw rose
  for (let theta = 0; theta < 360; theta += 0.01) {
    const radius = 200 * sin(n * theta);

    const cartesianCoordinates = polarToCartesian(radius, theta);

    circle(cartesianCoordinates.x, cartesianCoordinates.y, 8);
  }

  //draw lines in white
  stroke(color(255, 255, 255));

  beginShape(LINES);
  for (point of walkerCoordinatesArray) {
    vertex(point.x, point.y);
  }
  endShape();
}
