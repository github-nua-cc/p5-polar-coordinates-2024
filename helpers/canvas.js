/**
 * Calculate the canvas size for the current window width and window height
 * @returns
 */
function getCanvasSize() {
  if (windowWidth > windowHeight) {
    return (2 * windowHeight) / 3;
  }
  if (windowHeight > windowWidth) {
    return (2 * windowHeight) / 3;
  }
}

/**
 * set up the canvas as we want it
 */
function setUpCanvas() {
  // get canvas size from helpers
  canvasSize = getCanvasSize(windowWidth, windowHeight);
  createCanvas(canvasSize, canvasSize);

  // set up background to greyscale 220
  background(220);
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
