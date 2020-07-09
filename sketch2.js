let recEdge = 0;
let recEdgeIncrement = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(30);
}

function draw() {
  background(0);

  // RGB, HSB, HSL
  colorMode(RGB, 255);

  strokeWeight(10);
  stroke(100, 150, 200);
  fill(200, 150, 100);

  point(50, 50);
  line(0, 100, 200, 100)

  triangle(400, 50, 300, 100, 500, 75);

  quad(600, 20, 400, 200, 800, 200, 700, 20);

  // CENTER, RADIUS, CORNER, CORNERS
  ellipseMode(CENTER);
  ellipse(windowWidth / 4, windowHeight /2, 200, 400 )

  // CORNER, CORNERS, RADIUS, CENTER
  rectMode(CORNER);
  rect(windowWidth * 0.5, windowHeight * 0.33,  200, 400);

  fill(200, 100, 150, 100);
  rect(200, 400, 500, 500, recEdge);
  
  recEdge += recEdgeIncrement;

  if (recEdge === 255) {
    recEdgeIncrement = -1;
  }
  else if (recEdge === 0) {
    recEdgeIncrement = 1;
  }
}