const heartScale = 100;
const heartStroke = 8;

//the formula for a heart is radius = sin(theta) * Math.sqrt(Math.abs(cos(theta))) / (sin(theta) + 7 / 5) * 2 * sin(theta) + 2;
// we have also found an empirical scale to scale it up
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
 * draw hearts
 */
function drawHearts() {
  for (let theta = 0; theta < 360; theta = theta + 0.01) {
    //change theta to pi style
    const piTheta = degreesToRadians(theta);

    //get radius of this theta
    const radius = radiusForHeart(piTheta);

    //get html coordinates
    const htmlCoordinates = polarToHtml(radius, piTheta);

    //adjust y axis
    htmlCoordinates.y = htmlCoordinates.y - canvasSize / 3;

    //draw circle
    circle(htmlCoordinates.x, htmlCoordinates.y, heartStroke);
  }
}
