let offset = 0;

function drawSpirals() {
  //set stroke
  let stroke = 20;

  //drawing a circle using radians and degrees
  for (let theta = 0; theta < 7 * 360; theta = theta + 1) {
    //change theta to pi style
    const piTheta = degreesToRadians(theta);

    //get radius
    const radius = radiusForSpiral(piTheta);

    //get html coordinates for this degree
    const htmlCoordinates = polarToHtml(radius, piTheta + offset);
    fill(colors[0]);
    circle(htmlCoordinates.x, htmlCoordinates.y, stroke);

    //populate interior with random colors
    let nextRadius = radius - stroke / 2;
    let colorIndex = 1;
    while (nextRadius > stroke / 2 && colorIndex < colors.length) {
      const nextCoordinates = polarToHtml(nextRadius, piTheta + offset);

      //fill circle
      fill(colors[colorIndex]);
      circle(nextCoordinates.x, nextCoordinates.y, stroke);

      //update radius
      nextRadius = nextRadius - stroke / 2;
      colorIndex++;
    }
  }

  offset = offset + 0.04;
}
