let x = window.innerWidth / 2;
let y = window.innerHeight;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // frameRate(1);
}

function draw() {

  background(0);

  strokeWeight(20);
  stroke(255);

  // translate(
  //   Math.floor(random(0, windowWidth / 2)),
  //   Math.floor(random(0, windowHeight / 2))
  // )

  // line(0, 0, 100, 100);

  push();
  
  translate(windowWidth / 2, windowHeight / 2);
  angleMode(DEGREES);
  rotate(angle);
  angle += 5;

  line(-100, -100, 100, 100);

  pop();

  line(0, 0, 100, 100);
  


  

}