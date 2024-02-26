const n = 3;
const d = 5;

function drawRose() {
  noLoop();

  //draw rose
  for (let theta = 0; theta < 360; theta += 0.5) {
    const radius = 200 * sin(n * theta);

    const cartesianCoordinates = polarToCartesian(radius, theta);

    circle(cartesianCoordinates.x, cartesianCoordinates.y, 8);
  }

  //draw lines in white
  fill(color(255, 255, 255));
  let finished = false;
  let index = 1;
  let walkerPosition = { x: 0, y: 0 };
  let nextWalkerPosition = { x: sin(n * d), y: d };

  while (!finished) {

    console.log(nextWalkerPosition.x, nextWalkerPosition.y)

    line(
      walkerPosition.x * 200,
      walkerPosition.y * 200,
      nextWalkerPosition.x * 200,
      nextWalkerPosition.y * 200
    );

    index++;
    walkerPosition = nextWalkerPosition;
    nextWalkerPosition = { x: sin(index * n * d), y: d };

    if ((nextWalkerPosition.x === 0 && nextWalkerPosition.y === 0) || index === 100)
      finished = true;
  }
}
