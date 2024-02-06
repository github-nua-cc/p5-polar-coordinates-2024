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