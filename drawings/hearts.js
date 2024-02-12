// const heartScale = 100;
let heartScale = 0;
const hearThickness = 10;
const maximumHeartScale = 40;

let heartColor;

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

function heartSetup() {
  //set color
  heartColor = color(255, 0, 0);
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
 * draw one heart
 */
function drawHeart() {
  for (let theta = 0; theta < 360; theta = theta + 0.5) {
    //change theta to pi style
    const radiansTheta = degreesToRadians(theta);

    //get radius of this theta
    const radius = heartScale * radiusForHeart(radiansTheta);

    //get html coordinates
    const htmlCoordinates = polarToHtml(radius, radiansTheta);

    //recalculate y coordinate so heart can be centered
    // this will move the y coordinate 1 / 5 up the screen
    htmlCoordinates.y = yTranslation(htmlCoordinates.y, -1 / 5);

    //draw a point at these coordinates
    circle(htmlCoordinates.x, htmlCoordinates.y, hearThickness);

    //fill the inside of the heart
    fillInsideHeart(radius, radiansTheta);
  }

  randomColor.setAlpha(255);
  fill(randomColor);

  //update heart scale
  heartScale = heartScale + 0.1;
  //check heart scale has not gone beyond maximum
  if (heartScale > maximumHeartScale) {
    heartScale = 0;
  }
}

/**
 * After drawing the outside heart, fill the inside of the heart as well
 * @param {Number} radius original heart radius
 * @param {Number} radiansTheta angle theta in radians
 */
function fillInsideHeart(radius, radiansTheta) {
  let nextRadius = radius - hearThickness;
  while (nextRadius > 0) {
    //get html coordinates
    const htmlCoordinates = polarToHtml(nextRadius, radiansTheta);

    
    //recalculate y coordinate so heart can be centered
    // this will move the y coordinate 1 / 5 up the screen
    htmlCoordinates.y = yTranslation(htmlCoordinates.y, -1 / 5);

    //draw circle
    circle(htmlCoordinates.x, htmlCoordinates.y, hearThickness);

    nextRadius -= hearThickness;
  }
}

