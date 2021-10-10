var angle;
var lenm;

function setup() {
    createCanvas(400, 400);
    angle = createSlider(0, PI/2, PI/4, 0.01);
    lenm = createSlider(0.1, 0.8, 0.66, 0.01);
}

function draw() {
    background(51);
    stroke(255);
    translate(200, height);
    branch(100 * lenm.value());
}

function branch(len){
    line(0, 0, 0, - len);
    translate(0, -len);
    if (len > 5){
        push();
        rotate(angle.value());
        branch(len * lenm.value());
        pop();
        push();
        rotate(-angle.value());
        branch(len * lenm.value());
        pop();
    }
}