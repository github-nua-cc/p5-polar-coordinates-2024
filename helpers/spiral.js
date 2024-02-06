let offset = 0;
const stroke = 20;
let colors = [];

/**
 * Draw a circle with given radius and pitheta, extracting color from the position colorIndex
 * @param {Number} radius in pixels
 * @param {Number} piTheta in radians
 * @param {Number} colorIndex of the color array
 */
function drawACircleWithIndex(radius, piTheta, colorIndex) {
  //get html coordinates for this degree
  const htmlCoordinates = polarToHtml(radius, piTheta);

  //if color for this index is not set, set it for the first time
  if (colorIndex >= colors.length) {
    //create new color as a random color
    const newColor = color(
      random(255),
      random(255),
      random(255),
      255 - colorIndex * 5
    );

    //save color in index
    colors.push(newColor);
  }

  //fill and paint
  fill(colors[colorIndex]);
  circle(htmlCoordinates.x, htmlCoordinates.y, stroke);
}

/**
 * Check if we should draw a point at the given radius. We will not draw a point when:
 * - radius is so small that it would overlapp with the beginning of the spiral
 * - colorIndex is out of range (we don't have enough colors)
 * @param {Number} radius in pixels
 * @param {Number} theta in radians
 * @param {Number} colorIndex index of colors array
 * @returns
 */
function shouldDrawHere(nextRadius, theta, colorIndex) {
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

function drawPointsAtThisRadiusTheta(radius, piTheta) {
  //nextRadius is the radius at which we are drawing the next point which will be update throuhgouth the while
  let nextRadius = radius;
  //colorIndex is the index color of this spiral, as set in the setup, which will also be update throughout the while
  let colorIndex = 0;

  while (nextRadius > stroke / 2) {
    if (shouldDrawHere(nextRadius, piTheta, colorIndex))
      //draw circle
      drawACircleWithIndex(nextRadius, piTheta, colorIndex);

    //update radius
    nextRadius = nextRadius - stroke / 2;
    colorIndex++;
  }
}

/**
 * function that manages the drawing of all spirals
 */
function drawSpirals() {
  //drawing a circle using radians and degrees
  for (let theta = 0; theta < 7 * 360; theta = theta + 1) {
    //change theta to pi style
    const piTheta = degreesToRadians(theta);

    //get radius
    const radius = radiusForSpiral(piTheta);

    //draw inner spirals
    drawPointsAtThisRadiusTheta(radius, piTheta + offset);
  }

  offset = offset + 0.04;
}
