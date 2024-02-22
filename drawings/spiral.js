let offset = 0;

/**
 * draw one spiral. This is the one that we will use in class.
 */
function drawSpiral() {
  //reset background
  background(0, 30);

  //go through all the possible angles witn an increment of 0.5 and draw a point with changing radius
  for (let theta = 0; theta < 10 * 360; theta = theta + 0.1) {
    //calclulate a new radius bigger than the one before
    const radius = 0.3 * theta;

    //get html coordinates
    const htmlCoordinates = polarToCartesian(radius, theta + offset);

    //draw a point at these coordinates
    circle(htmlCoordinates.x, htmlCoordinates.y, 16);
  }

  offset = offset - 1;
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
