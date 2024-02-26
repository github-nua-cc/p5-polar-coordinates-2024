const n = 2;
const d = 29;

function drawRose() {
  noLoop();

  //draw rose
  for (let theta = 0; theta < 360; theta += 0.01) {
    const radius = 200 * sin(n * theta);

    const cartesianCoordinates = polarToCartesian(radius, theta);

    circle(cartesianCoordinates.x, cartesianCoordinates.y, 8);
  }

  //draw lines in white
  stroke(color(255, 255, 255));
  // strokeWeight(10);
  let index = 1;
  let walkerPosition = { radius: 0, theta: 0 };
  let nextWalkerPosition = { radius: sin(n * d), theta: index * d };

  while (index < 361) {
    console.log("x: " + nextWalkerPosition.x + ", y: " + nextWalkerPosition.y);

    const cartesianCoordinates = polarToCartesian(
      200 * walkerPosition.radius,
      walkerPosition.theta
    );
    const cartesianCoordinatesNext = polarToCartesian(
      200 * nextWalkerPosition.radius,
      nextWalkerPosition.theta
    );

    line(
      cartesianCoordinates.x,
      cartesianCoordinates.y,
      cartesianCoordinatesNext.x,
      cartesianCoordinatesNext.y
    );

    index++;
    walkerPosition = nextWalkerPosition;
    nextWalkerPosition = { radius: sin(index * n * d), theta: index * d };
  }
}
