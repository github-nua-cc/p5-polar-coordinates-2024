//initially canvas size is zero
let canvasSize = 0;

/**
 * Calculate the canvas size for the current window width and window height
 * @returns
 */
function getCanvasSize() {
  if (windowWidth > windowHeight) {
    return  windowHeight / 2;
  }
  if (windowHeight > windowWidth) {
    return windowWidth / 2;
  }
}

/**
 * Check if we should draw a point at the given radius. We will not draw a point when:
 * - radius is so small that it would overlapp with the beginning of the spiral
 * - colorIndex is out of range (we don't have enough colors)
 * @param {Number} radius in pixels
 * @param {Number} theta in radians
 * @returns
 */
function shouldDrawHere(nextRadius, theta) {
  //if the next radius at which I am going to draw is bigger than stroke / 2, the point would be drawn before the original spiral has begun
  if (nextRadius < stroke / 2) return false;

  //if point is fully outside of canvas we will not draw
  const htmlCoordiantes = polarToHtml(nextRadius, theta);
  if (
    htmlCoordiantes.x > canvasSize + stroke ||
    htmlCoordiantes.y > canvasSize + stroke
  )
    return false;

  //any other case is fine to draw
  return true;
}

/**
 * Generate a random color with given alpha
 * @param {Number} alpha from 0 to 255
 * @returns 
 */
function generateRandomColor(alpha = 255) {

  //generate random rgbs
  const r = random(255);
  const g = random(255);
  const b = random(255);

  //get new color
  const newColor = color(r, g, b, alpha);

  //return new color
  return newColor;
}

/**
 * Draw a point using a randomly generated color given the polar coordinates
 * @param {Number} radius in pixels
 * @param {Number} theta in degrees
 */
function drawPointWithRandomColorAndPolarCoordinates(radius, theta) {
  
  //generate and set fill to a new random color
  const randomColor = generateRandomColor();
  fill(randomColor);

  //get theta in radians
  const radiansTheta = degreesToRadians(theta);

  //get html coordinates
  const htmlCoordinates = polarToHtml(radius, radiansTheta);

  //draw the point
  circle(htmlCoordinates.x, htmlCoordinates.y, 50);
}

/**
 * returns the yCoordinate value plus the ratio multiplied by the canvas size
 * @param {Number} yCoordinate y coordinate that needs translating
 * @param {Number} ratio canvasSize proportion by which to translate y
 * @returns 
 */
function yTranslation(yCoordinate, ratio) {
  return yCoordinate + ratio * canvasSize;
}