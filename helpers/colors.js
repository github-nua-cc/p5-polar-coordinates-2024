function generateRandomColor(alpha = 255) {

  //generate random rgbs
  const r = random(255);
  const g = random(255);
  const b = random(255);

  //get new color
  const newColor = color(r, g, b, alpha);

  //return new color
  return newColor;
}
