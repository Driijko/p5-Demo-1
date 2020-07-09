let angle = 0.0;
let speed = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {

  // background(0);
  stroke(255, 10);

  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  strokeWeight(20);
  line(0, 0, 200, 0);
  translate(200, 0);
  rotate(angle * 2.0);
  strokeWeight(10);
  line(0, 0, 200, 0);
  translate(200, 0);
  rotate(angle * 2.5);
  strokeWeight(5);
  line(0, 0, 200, 0);

  angle += speed;

}