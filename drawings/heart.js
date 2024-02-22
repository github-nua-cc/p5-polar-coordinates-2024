let heartOffset = 0;

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
  return radius;
}

/**
 * draw one heart
 */
function drawHeart() {
  //additional translation to place heart a bit higner
  translate(0, -height / 6);

  //background 0, 3
  background(0, 3);

  //define heart constants
  const heartThickness = 4;
  const maximumHeartScale = 100;

  //loop - only one circle
  for (let theta = 0; theta < 360; theta = theta + 0.1) {
    //get radius of this theta
    const radius = heartOffset * radiusForHeart(theta);

    //get html coordinates
    const htmlCoordinates = polarToCartesian(radius, theta);

    //draw a point at these coordinates
    circle(htmlCoordinates.x, htmlCoordinates.y, heartThickness);
  }

  //update heart scale
  heartOffset = heartOffset + 0.5;
  //check heart scale has not gone beyond maximum
  if (heartOffset > maximumHeartScale) {
    heartOffset = 0;
    background(0);
  }
}
