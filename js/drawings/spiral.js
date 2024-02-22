const spiralRotationValue = document.getElementById("spiral-rotation-value");
const toggleNoise = document.getElementById("toggle-noise-button");

let spiralOffset = 0;
let withNoise = false;

/**
 * draw one spiral. This is the one that we will use in class.
 */
function drawSpiral() {
  //reset background
  background(0, 30);

  //go through all the possible angles with a changing increment and draw a point with changing radius
  let increment = 5;
  for (let theta = 0; theta < 7 * 360; theta = theta + increment) {
    //calclulate a new radius bigger than the one before
    const radius = 0.3 * theta;

    // calculate noise if needed
    let currentNoise = 0;
    if (withNoise) {
      currentNoise = 30 * noise(radius);
    }

    const noisedRadius = radius + currentNoise;

    //get html coordinates
    const htmlCoordinates = polarToCartesian(
      noisedRadius,
      theta + spiralOffset
    );

    //draw a point at these coordinates
    circle(htmlCoordinates.x, htmlCoordinates.y, 16);

    if (theta % 360 === 0) {
      // update increment
      increment = increment / 2;
    }
  }

  // spiralOffset = spiralOffset - 1;

  //update html info
  spiralRotationValue.innerHTML = floor(spiralOffset) % 360;
}

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
  spiralOffset = spiralOffset + event.delta / 10;

  //return false will block page scrolling
  return false;
}

//on click, add or remove noise
toggleNoise.onclick = () => {
  withNoise = !withNoise;

  if (withNoise) {
    toggleNoise.innerHTML = "Remove Noise";
  } else {
    toggleNoise.innerHTML = "Add Noise";
  }
};
