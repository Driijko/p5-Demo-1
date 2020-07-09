function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
  background(0);
}

function draw() {

  background(0);

  strokeWeight(Math.floor(random(0, 20)));
  stroke(
    Math.floor(random(0, 255)),
    Math.floor(random(0, 255)),
    Math.floor(random(0, 255)),
    Math.floor(random(0, 255)),
  )
  fill(
    Math.floor(random(0, 255)),
    Math.floor(random(0, 255)),
    Math.floor(random(0, 255)),
    Math.floor(random(0, 255)),
  )

  ellipse(
    Math.floor(random(windowWidth * 0.33, windowWidth * 0.75)),
    Math.floor(random(windowHeight * 0.33, windowHeight * 0.75)),
    Math.floor(random(100, 400)),
    Math.floor(random(100, 400))
  )
}