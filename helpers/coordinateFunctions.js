function polarToHtml(radius, theta) {
  //get x and y for cartesian
  const cartesianX = radius * cos(theta);
  const cartesianY = radius * sin(theta);

  //get x and y for html
  const htmlX = canvasSize / 2 + cartesianX;
  const htmlY = canvasSize / 2 - cartesianY;

  //build object from coordinates
  const htmlCoordinates = { x: htmlX, y: htmlY };
  return htmlCoordinates;
}

function degreesToRadians(thetaInDegrees) {
  return (thetaInDegrees * PI) / 180;
}