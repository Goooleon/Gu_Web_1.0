var yoff = 0.0;

function setup() {
  var canvas = createCanvas(500, 500);

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
}

function draw() {
    background(251,251,251);
    noFill();
    strokeWeight(8);
  translate(width / 2, height / 2);

  var radius = 150;

  beginShape();
  var xoff = 0;
var a = mouseX;
    a = map(a, 0, width, 0 , 1)
    
  for (var a = 0; a < TWO_PI; a += 0.1) {
    var offset = map(noise(xoff, yoff), 0, 1, -25, 120);
    var r = radius + offset;
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
    xoff += 0.1 + mouseX / 150000;
    //ellipse(x, y, 4, 4);
  }
  endShape();

  yoff += 0.01 + mouseY / 400000;
}