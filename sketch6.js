let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, TWO_PI, 0, 0);
  background(0);
}

function draw() {

  background(0);

  let increment = 0.1;
  let angle = slider.value();

  
  translate(width/2, height);
  branch(200, 20, [45, 123, 89]);
  
  function branch(len, thickness, color) {

    strokeWeight(thickness);

    stroke(
      map(noise(color[0]), 0, 1, 0, 255),
      map(noise(color[1]), 0, 1, 0, 255),
      map(noise(color[2]), 0, 1, 0, 255) 
    );

    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 3) {

      color = [color[0] + increment, color[1] + increment, color[2] + increment];

      push();
      rotate(angle);
      branch(len * 0.67, thickness * 0.75, color);
      pop();

      push();
      rotate(-angle);
      branch(len*0.67, thickness * 0.75, color);
      pop();
    }
  }
}

