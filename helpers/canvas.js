//initially canvas size is zero
let canvasSize = 0;

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
  // calculate canvas size depending on window width and height
  canvasSize = getCanvasSize(windowWidth, windowHeight);
  createCanvas(canvasSize, canvasSize);

  // set up background to greyscale 220
  background(220);
}