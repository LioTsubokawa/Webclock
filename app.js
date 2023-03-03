let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(720, 400);
  stroke(255);

  let radius = min(width, height) / 5;
  secondsRadius = radius * 0.9;
  minutesRadius = radius * 0.5;
  hoursRadius = radius * 0.4;
  clockDiameter = radius * 2;

  cx = width / 2;
  cy = height / 2;
}

function draw() {
  background(255);

  // Draw the clock background
  noStroke();

  fill(140,154,175);
  ellipse(120, cy, clockDiameter+25 , clockDiameter+25 );
  fill(255);
  ellipse(120, cy, clockDiameter , clockDiameter );

  fill(236,187,147);
  ellipse(cx, cy, clockDiameter+25, clockDiameter+25);
  fill(255);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  fill(35,65,87);
  ellipse(600, cy, clockDiameter+25 , clockDiameter+25 );
  fill(255);
  ellipse(600, cy, clockDiameter , clockDiameter)

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(0);
  strokeWeight(1);
  line(600, cy, 600 + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(120, cy, 120 + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  strokeWeight(2);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = 120 + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  strokeWeight(2);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = 600 + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
}

