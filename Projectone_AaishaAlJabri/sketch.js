// Constants
let Y_AXIS = 1;
let X_AXIS = 2;
let c1, c2, b1, b2;
let x, y;
let cloud1;
let cloud2;
let cloud3;
let lightyellow;
let lightblue;
let lightpink;
let lillypink;
let lilly1;
let lilly2;
let lilly3;
let lilly4;
let stars = [];
let swan1;
let swan2;
let swan3;
let lake = [];

function setup() {
  //createCanvas(displayWidth, displayHeight);
  createCanvas(500, 500);
  x = width / 2;
  y = height;
  //setting object variables
  lightyellow = color(251, 252, 225);
  lightblue = color(224, 255, 254);
  lightpink = color(191, 75, 244, 80);
  lillypink = color(184, 67, 19, 90);
  swancolor1 = color(255, 255, 234);
  swancolor2 = color(217, 255, 248);
  cloud1 = new Clouds();
  cloud2 = new Clouds();
  cloud3 = new Clouds();
  lilly1 = new Waterlilly();
  lilly2 = new Waterlilly();
  lilly3 = new Waterlilly();
  lilly4 = new Waterlilly();
  for (let i = 0; i < 100; i++) { //sets up the array for the star objects, keeps 
    //creating those objects 100 times
    stars.push(new Star());
  }
  for (let i = 0; i < 10; i++) {
    lake.push(new Lake());
  }
  //creating swan objects from their class
  swan1 = new Swan();
  swan2 = new Swan();
  swan3 = new Swan();

  frameRate(30); //setting framerate for project to 30
}

function draw() {
  console.log(frameCount);
  sky();
  //mountain 1 
  noStroke()
  fill(63, 41, 96);
  triangle(2, 400, 200, 150, 300, 400);
  //mountain peek
  noStroke()
  fill(245, 248, 240);
  quad(144, 220, 200, 150, 225, 210, 200, 190);
  //shadow on mountain 1
  fill(48, 11, 64);
  triangle(250, 400, 200, 150, 310, 400);
  //mountain2
  noStroke()
  fill(81, 41, 96);
  triangle(200, 400, 350, 100, 600, 400);
  //mountain 2 peek
  noStroke()
  fill(245, 248, 240);
  quad(435, 200, 350, 100, 300, 200, 350, 150);
  //shadow on mountain 2
  fill(48, 11, 64);
  triangle(500, 400, 350, 100, 610, 400);
  //mountain 3  
  noStroke()
  fill(81, 41, 96);
  triangle(0, 400, 0, 100, 143, 400);
  //mountain 4
  noStroke()
  fill(63, 41, 96);
  triangle(400, 400, 500, 100, 700, 400);
  //hill
  fill(163, 134, 213);
  ellipse(250, 500, 700, 300);
  //lake 
  fill(196, 217, 237);
  ellipse(250, 500, 550, 290);
  //adding details to the lake using an array
  
  push();
  scale(0.1);
  translate(250,250);
  for (let i = 0; i < lake.length; i++) { //array for water that loops until it
      //creates 10 of the class's objects
      lake[i].move(); //calls move method from Lake class
      lake[i].display(); // calls display methid from Lake class
    }
  pop();
  
  
  //drawing the clouds by calling them from their class
  push();
  translate(-10, 10);
  scale(1); //changing the size of the cloud
  cloud1.display(lightyellow, 0); //call the first object from 
  //the Cloud class
  cloud1.cloudmove(1);
  pop();
  // calling the second object from the Cloud class
  cloud2.display(lightyellow, 70);
  cloud2.cloudmove(-1);
  //calling another instance of the second cloud object
  push();
  scale(0.5);
  cloud2.display(lightblue, 300);
  cloud2.cloudmove(-1);
  pop();
  // calling the third object from the Cloud class
  cloud3.display(lightblue, 100);
  cloud3.cloudmove(2);

  //calling first group o fwater lillies
  lilly1.display(300, 800, lightpink, 0.5);
  lilly1.movepetals(100, 200, 300, 400);
  lilly3.display(700, 800, lightpink, 0.5);
  lilly3.movepetals(90, 190, 290, 390);
  
  //calling swan objects
  push();
  scale(0.5);
  translate(-200, 600);
  swan1.display(swancolor1);//first swan 
  swan1.move(1000);
  pop();

  if (frameCount > 100) { //shows second second after some time
    push();
    scale(0.3);
    translate(-300, 1200);
    swan2.display(swancolor1);
    swan2.move(1800);
    pop();
  }
  if (frameCount > 200) {// shows third swan after 200 frames
    push();
    scale(0.3);
    translate(-300, 1300);
    swan3.display(swancolor2);
    swan3.move(1800);
    pop();
  }

  //calling the lilly objects from their class
  lilly2.display(500, 900, lillypink, 0.5);
  lilly2.movepetals(120, 220, 320, 420);
  lilly3.display(150, 950, lillypink, 0.5);
  lilly3.movepetals(130, 230, 330, 430);
  lilly4.display(800, 1030, lightpink, 0.5);
  lilly4.movepetals(150, 250, 350, 450);
  if (frameCount > 200) {// shows third swan after 200 frames
    push();
    scale(0.3);
    translate(-300, 1300);
    swan3.display(swancolor2);
    swan3.move(1800);
    pop();
  }
}

function sky() { //drawing the sky

  if (y < (height / 2)) { //when the sun is higher than the middle of
    //the screen the background color chnages 
    c1 = color(125, 212, 204); //set variable for the first gradiant color 
    c2 = color(255, 212, 204); //set variable for the second gradiant color
    setGradient(0, 0, 600, 600, c1, c2, Y_AXIS); //gradiant day time background
  } else { //night time when the sun is lower tham the middle of the screen
    //background color chnages that to indicates chnage of time
    c1 = color(201, 109, 178); // second background gradiant first  color
    c2 = color(120, 175, 204); //second background gradiant second  color
    setGradient(0, 0, 600, 600, c1, c2, Y_AXIS); // gradiant night time background
    for (let i = 0; i < stars.length; i++) { //array for stars that loops until it
      //creates 100 of the star objects
      stars[i].move(); //calls move method from stars class
      stars[i].display(); // calls display methid from stars class
    }
  }
  //drawing sun
  noStroke();
  fill(250, 235, 126); //yellow color
  ellipse(x, y, 90, 90); //sun 
  y = y - 1; //changes its position (y-coordinate) over time 

  // Reset to the bottom
  if (y < 0) { //if it leaves the screen
    y = height; //y is back to its original value
  }
}
//function for creating gradiant effect for the night and time backgrounds 
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}
class Clouds { //setting cloud class
  constructor() {
    this.x = 150;
    this.n = 190;
    this.p = 150;
    this.q = 110;
  }
  display(color_cloud, y_location) {
    fill(color_cloud);
    arc(this.x, 100 + y_location, 160, 50, PI + .1, -0.1, OPEN);
    arc(this.n, 90 + y_location, 40, 40, PI + .1, -0.1, OPEN);
    arc(this.p, 80 + y_location, 70, 70, PI + .1, -0.1, OPEN);
    arc(this.q, 90 + y_location, 40, 40, PI + .1, -0.1, OPEN);
  }
  cloudmove(cloud_speed) {
    this.x = this.x + cloud_speed;
    this.n = this.n + cloud_speed;
    this.p = this.p + cloud_speed;
    this.q = this.q + cloud_speed;

    if (this.x > width && this.n > width && this.p > width && this.q > width) {
      this.x = 150 - 50;
      this.n = 190 - 50;
      this.p = 150 - 50;
      this.q = 110 - 50;
    }
    if (this.x < 0 && this.n < 0 && this.p < 0 && this.q < 0) {
      this.x = 150 + 200;
      this.n = 190 + 200;
      this.p = 150 + 200;
      this.q = 110 + 200;
    }
  }
}
class Waterlilly {
  constructor() {
    this.m = 5;
    this.n = 2;
    this.count = 6;
  }

  display(x_lilly, y_lilly, color, size) {
    push();
    scale(size);
    translate(x_lilly, y_lilly);
    fill(color);
    rotate(PI / this.n)
    noStroke();
    for (let i = 0; i < this.count; i++) {
      ellipse(0, 30, 20, 80);
      rotate((PI / this.m));
    }
    pop();
    push(); //leaves
    scale(0.5);
    translate(x_lilly, y_lilly);
    fill(91, 120, 78);
    rotate(PI);
    ellipse(0, -10, 50, 10);
    fill(152, 215, 168);
    ellipse(0, -10, 35, 10);
    pop();
  }
  movepetals(timechange1, timechange2, timechange3, timechange4) {
    if (frameCount > timechange1) {
      this.n = 1;
      this.m = 20;
      this.count = 6;
    }
    if (frameCount > timechange2) {
      this.n = 1;
      this.m = 30;
      this.count = 6;
    }
    if (frameCount > timechange3) {
      this.n = 2;
      this.m = 5;
      this.count = 6;
    }
    if (frameCount > timechange4) {
      this.count = 11;
      this.m = 10;
      this.n = 2;
    }
  }
}
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(5, 5);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    noStroke();
    fill(225, 212, 34);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
class Swan {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.ex = 255;
    this.ey = 150;
    this.d = 15;
  }
  display(color) {
    //drawing the moving swan

    //body of the swan
    fill(color);
    beginShape();
    curveVertex(270 + this.x, 150);
    curveVertex(270 + this.x, 150);
    curveVertex(250 + this.x, 120);
    curveVertex(230 + this.x, 125);
    curveVertex(220 + this.x, 150);
    curveVertex(225 + this.x, 175);
    curveVertex(240 + this.x, 200);
    curveVertex(270 + this.x, 230);
    curveVertex(250 + this.x, 250);
    curveVertex(220 + this.x, 200);
    curveVertex(150 + this.x, 210);
    curveVertex(120 + this.x, 200);
    curveVertex(150 + this.x, 300);
    curveVertex(200 + this.x, 320);
    curveVertex(280 + this.x, 300);
    curveVertex(320 + this.x, 250);
    curveVertex(270 + this.x, 200);
    curveVertex(250 + this.x, 175);
    curveVertex(275 + this.x, 175);
    curveVertex(270 + this.x, 150);
    curveVertex(270 + this.x, 150);
    endShape()

    beginShape(); //beak of the swan 
    fill(255, 255, 94);
    //noStroke();
    curveVertex(269 + this.x, 177);
    curveVertex(269 + this.x, 177);
    curveVertex(295 + this.x, 180);
    curveVertex(270 + this.x, 150);
    curveVertex(270 + this.x, 150);
    endShape();
    //eye
    push();
    translate(this.ex + this.x, this.ey);
    stroke(0);
    strokeWeight(3);
    fill(255);
    ellipse(0, 0, this.d, this.d);
    this.angle = atan2(this.ey - mouseY, this.ex - mouseX);
    rotate(this.angle);
    fill(0, 255, 0);
    ellipse(this.d / 8, this.d / 8, this.d / 2, this.d / 2);
    pop();

  }
  move(limit) {
    this.x = this.x + 3;
    if (this.x > limit) {
      this.x = 0;
      console.log(this.x);
    }
  }
}
class Lake {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  display() {
    beginShape();
    stroke(255,255,246);
    strokeWeight(5);
    curveVertex(200 + this.x, 0);
    curveVertex(200 + this.x, 0);
    curveVertex(225 + this.x, 50);
    curveVertex(250 + this.x, 0);
    curveVertex(275 + this.x, 50);
    curveVertex(300 + this.x, 0);
    curveVertex(325 + this.x, 50);
    curveVertex(350 + this.x, 0);
    curveVertex(350 + this.x, 0);
    endShape();
  }
  move() {
  this.y+= this.y+ random(0,1);
  this.x+= this.x+ random(-1,1);
  if (this.x >900){
    this.x+= this.x+ random(-5,5);
  }
}
}

