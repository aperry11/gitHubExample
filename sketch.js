let cup;
let hand;
let moody;
let anim;

function preload() {
  cup = loadImage("cup.png");
  hand = loadImage("hand.png");
  moody = loadImage("moody.jpg");
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  anim = 0;
}

function draw() {
  imageMode(CORNER);
  image(moody, 0, 0, width ,height - 160);
  imageMode(CENTER);

  rect(0, 430, width, 300);

  push();
  translate(width / 2 + 150, height / 2);
  rotate(radians(270));
  image(hand, 0, 0);

  pop();

  image(cup, anim, height / 2);

  if (anim < width / 2 - 40) {
    anim = anim + 1;
  }
  
}
