/**
 * Calculate the canvas size for the current window width and window height
 * @returns
 */
function getCanvasSize() {
  if (windowWidth > windowHeight) {
    return windowHeight / 2;
  }
  if (windowHeight > windowWidth) {
    return windowHeight / 2;
  }
}

