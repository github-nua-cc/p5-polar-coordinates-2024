let offset = 0;
const spiralStroke = 20;
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
    const newColor = generateRandomColor(255 - colorIndex * 5);

    //save color in index
    colors.push(newColor);
  }

  //fill and paint
  fill(colors[colorIndex]);
  circle(htmlCoordinates.x, htmlCoordinates.y, spiralStroke);
}

/**
 * Draw all the points for main spiral and inner spirals for this radius and theta
 * @param {Number} radius
 * @param {Number} piTheta
 */
function drawPointsAtThisRadiusTheta(radius, piTheta) {
  //nextRadius is the radius at which we are drawing the next point which will be update throuhgouth the while
  let nextRadius = radius;
  //colorIndex is the index color of this spiral, as set in the setup, which will also be update throughout the while
  let colorIndex = 0;

  while (nextRadius > spiralStroke / 2) {
    if (shouldDrawHere(nextRadius, piTheta, colorIndex))
      //draw circle
      drawACircleWithIndex(nextRadius, piTheta, colorIndex);

    //update radius
    nextRadius = nextRadius - spiralStroke / 2;
    colorIndex++;
  }
}

//the archimedes spiral formula is r = a * theta, where a is a number of our choice
// we can choose a to be any number, so let's choose something that looks good!
/**
 * Get r for the given theta
 * @param {Number} theta
 * @returns
 */
function radiusForSpiral(theta) {
  // a is a ratio that has been found empirically
  return (50 / 2880) * windowWidth * theta;
}

/**
 * function that manages the drawing of all spirals
 */
function drawSpirals() {
  //drawing a circle using degrees
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

/**
 * draw one spiral. This is the one that we will use in class.
 */
function drawSpiral() {

  noLoop();

  //go through all the possible angles witn an increment of 0.5 and draw a point with changing radius
  for (let theta = 0; theta < 6 * 360; theta = theta + 0.1) {
    //transform the theta to radians
    const radiansTheta = degreesToRadians(theta);
    console.log(radiansTheta);

    //calclulate a new radius bigger than the one before
    const radius = 10 * radiansTheta;

    const radiusNoise = 30 * noise(radius);
    // const radiusNoise = 0;

    //get html coordinates
    const htmlCoordinates = polarToHtml(radius + radiusNoise, radiansTheta + offset);

    //draw a point at these coordinates
    circle(htmlCoordinates.x, htmlCoordinates.y, 16);
  }

  // offset = offset - 0.1;
}

const scrollValue = document.getElementById("scroll-value");

/**
 * add whatever delta offset is detected by the mouseWheel event
 * - delta is a keyword commonly used in mathematics to define an increase or decrease in value
 * - it can be a positive or negaative number
 * The function is also set to block the scrolling of the page
 * @param {WheelEvent} event
 * @returns
 */
function mouseWheel(event) {
  // add the value stored in event.delta to the offset
  offset = offset + event.delta / 10;

  scrollValue.innerHTML = Math.floor(event.delta);

  //return false will block page scrolling
  return false;
}