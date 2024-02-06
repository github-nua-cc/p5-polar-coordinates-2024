// const heartScale = 100;
let heartScale = 0;
const heartStroke = 8;

/**
 * Get r for the given theta
 * @param {Number} theta
 * @returns
 */
function radiusForHeart(theta) {
  const radius =
    2 -
    2 * sin(theta) +
    (sin(theta) * Math.sqrt(Math.abs(cos(theta)))) / (sin(theta) + 1.4);
  return heartScale * radius;
}

function heartSetup() {
  //set color
  const heartColor = color(255, 0, 0);
  fill(heartColor);
}

/**
 * Update the scale of the heart for the next drawing
 * In intervals of 0.5, resets at 100
 */
function updateHeartScale() {
  heartScale += 0.5;
  if (heartScale > 100) {
    heartScale = 0;
  }
}

/**
 *
 */
function drawInnerHearts(radius, piTheta) {
  //get html coordinates
  const htmlCoordinates = polarToHtml(radius, piTheta);

  //adjust y axis
  htmlCoordinates.y = htmlCoordinates.y - canvasSize / 3;

  //draw circle
  circle(htmlCoordinates.x, htmlCoordinates.y, heartStroke);
}

/**
 * draw hearts
 */
function drawHearts() {
  for (let theta = 0; theta < 360; theta = theta + 0.01) {
    //change theta to pi style
    const piTheta = degreesToRadians(theta);

    //get radius of this theta
    const radius = radiusForHeart(piTheta);

    drawInnerHearts(radius, piTheta);
  }

  //calculate heart scale for the next drawing
  updateHeartScale();
}
