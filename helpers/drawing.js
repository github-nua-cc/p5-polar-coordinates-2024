// a stroke that is not changing for now but will change in the future
let shapeStroke = 16;

/**
 * Generate a new random color from rgb random codes
 * @returns new random color
 */
function newRandomColor() {
  //get random r g bs between 1 and 255
  const r = random(255);
  const g = random(255);
  const b = random(255);

  //get new color from the rgb code
  const newColor = color(r, g, b);

  //return new color
  return newColor;
}

/**
 * Draw a point of random color at the given radius and theta
 * @param {Number} radius in pixels
 * @param {Number} theta in in degrees
 */
function drawWithRandomColorAtPoint(radius, theta) {
  //generate new random color
  const color = newRandomColor();
  fill(color);

  //get theta in radians
  const thetaInRadians = degreesToRadians(theta);

  //get html coordinates
  const htmlCoordinates = polarToHtml(radius, thetaInRadians);

  //draw circle using a size of shapeStroke
  circle(htmlCoordinates.x, htmlCoordinates.y, shapeStroke);
}
