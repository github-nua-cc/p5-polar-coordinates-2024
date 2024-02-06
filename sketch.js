function setup() {
  //set no stroke
  noStroke();

  //setup the canvas - found in canvas.js
  setUpCanvas();

  //set no loop
  noLoop();
}

function draw() {
  //draw a few points using polar coordinates
  let radius = 0;
  theta = degreesToRadians(0);

  //middle
  let color = newRandomColor();
  fill(color);
  let htmlCoordinates = polarToHtml(radius, theta);
  circle(htmlCoordinates.x, htmlCoordinates.y, shapeStroke);

  radius = 50;

  //right
  color = newRandomColor();
  fill(color);
  theta = degreesToRadians(0);
  htmlCoordinates = polarToHtml(radius, theta);
  circle(htmlCoordinates.x, htmlCoordinates.y, shapeStroke);

  //up
  color = newRandomColor();
  fill(color);
  theta = degreesToRadians(90);
  htmlCoordinates = polarToHtml(radius, theta);
  circle(htmlCoordinates.x, htmlCoordinates.y, shapeStroke);

  //left
  color = newRandomColor();
  fill(color);
  theta = degreesToRadians(180);
  htmlCoordinates = polarToHtml(radius, theta);
  circle(htmlCoordinates.x, htmlCoordinates.y, shapeStroke);

  //down
  color = newRandomColor();
  fill(color);
  theta = degreesToRadians(270);
  htmlCoordinates = polarToHtml(radius, theta);
  circle(htmlCoordinates.x, htmlCoordinates.y, shapeStroke);
}
