// The rose has n petals if n is odd, and 2n petals if n is even.
const n = 4;
// d is a positive integer and the angles are in degrees - degree at which 'the walker turns'
let d = 29;

//walkerArray
let walkerArray = [];

function updateWalkerArray(newD) {
  if (d === newD && walkerArray.length != 0) {
    return false;
  }

  d = newD;

  walkerArray = [];

  for (let index = 0; index < 361; index++) {
    const angle = (index * d) % 360;
    walkerArray.push({ radius: 200 * sin(n * angle), theta: angle });
  }

  return true;
}

function drawRose() {
  //reset background and stroke
  background(0);
  noStroke();

  //draw rose
  for (let theta = 0; theta < 360; theta += 0.01) {
    const radius = 200 * sin(n * theta);

    const cartesianCoordinates = polarToCartesian(radius, theta);

    circle(cartesianCoordinates.x, cartesianCoordinates.y, 8);
  }

  //draw lines in white
  stroke(color(255, 255, 255));

  updateWalkerArray(d);

  beginShape(LINES);
  for (point of walkerArray) {
    const cartesianPoint = polarToCartesian(point.radius, point.theta);

    vertex(cartesianPoint.x, cartesianPoint.y);
  }
  endShape();
}
