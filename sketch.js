var n = 0;
var c = 8;
var up = true;

function setup() {
    createCanvas(750, 750);
    angleMode(DEGREES)
    colorMode(HSB)
    background(0);
}

function draw() {
    var a = n * 137.5;
    var r = c * sqrt(n);

    var x = r * cos(a) + width / 2;
    var y = r * sin(a) + height / 2;
    fill(a % 256, n % 256, c * 255);
    ellipse(x, y, 12, 12);
    noStroke();
    n++
    if(n === 4100){
        n = 0;
    }
}