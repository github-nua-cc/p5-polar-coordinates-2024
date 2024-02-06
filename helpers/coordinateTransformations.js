/**
 * Given a radius and an angle theta, transform this to html cooridnates
 * @param {Number} radius in pixels
 * @param {Number} theta in radians
 * @returns
 */
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

/**
 * Given a theta in degrees, transform it to radians
 * @param {Number} theta in degrees
 * @returns
 */
function degreesToRadians(theta) {
  return (theta * PI) / 180;
}
