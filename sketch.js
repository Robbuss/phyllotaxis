var n = 0;
var c = 8;

function setup() {
    createCanvas(750, 750);
    angleMode(DEGREES)
    colorMode(HSB)
    background(0);
}

function draw() {
    var a = n * 137.3;
    var r = c * sqrt(n);

    var x = r * cos(a) + width / 2;
    var y = r * sin(a) + height / 2;
    fill(a % 256, n % 255,255);
    ellipse(x, y, 12, 12);
    noStroke();
    n++

}