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
let rain=[];
let cloud5;
let cloud4;

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
  cloud4 = new Clouds();
  cloud5 = new Clouds();
  lilly1 = new Waterlilly();
  lilly2 = new Waterlilly();
  lilly3 = new Waterlilly();
  lilly4 = new Waterlilly();
  for (let i = 0; i < 100; i++) { //sets up the array for the star objects, keeps 
    //creating those objects 100 times
    stars.push(new Star());
  }
  for (let i = 0; i < 20; i++) { //sets up an array for the lake movement
    lake[i]= random((100,0));
    beginShape();//draws the wave shape 
  stroke(255,255,246);
  strokeWeight(5);
  curveVertex(i*200 , 0);
  curveVertex(i*200 , 0);
  curveVertex(i*225 , 50);
  curveVertex(i*250 , 0);
  curveVertex(i*275, 50);
  curveVertex(i*300, 0);
  curveVertex(i*325, 50);
  curveVertex(i*350, 0);
  curveVertex(i*350, 0);
  endShape();
          
  }
    for(var i = 0; i < 200; i++) {//sets up an array for the rain drops 
    rain[i] = new Rain();
    }
  //creating swan objects from their class
  swan1 = new Swan();
  swan2 = new Swan();
  swan3 = new Swan();

  frameRate(20); //setting framerate for project to 30
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
  ellipse(250, 500, 750, 270);
  //adding details to the lake using an array
  push();
  stroke(255,255,246); //color of the lines 
  strokeWeight(5);
  translate(-70, 430); //new location
  scale(0.1);//chnage size to fit the lake
  for(i = 0; i<100; i++){
    lake[i]= lake[i] +3; // adds movemenet to the y-coordinates
  beginShape();
  curveVertex(i*200 , 0+lake[i]);
  curveVertex(i*200 , 0+lake[i]);
  curveVertex(i*225 , 50+lake[i]);
  curveVertex(i*250 , 0+lake[i]);
  curveVertex(i*275, 50+lake[i]);
  curveVertex(i*300, 0+lake[i]);
  curveVertex(i*325, 50+lake[i]);
  curveVertex(i*350, 0+lake[i]);
  curveVertex(i*350, 0+lake[i]);
  endShape();
    if (lake[i] >= height/20){//resets the code so that teh wave appear as if they are moving
      //when they are really just movign up and down
      lake[i] = (random(-100,0));
    }
  }
  pop();// same thing but just changing the location  
  push();
  stroke(255,255,246);
  strokeWeight(5);
  translate(-70, 460); 
  scale(0.1);
  for(i = 0; i<100; i++){
    lake[i]= lake[i] +3;
  beginShape();
  curveVertex(i*200 , 0+lake[i]);
  curveVertex(i*200 , 0+lake[i]);
  curveVertex(i*225 , 50+lake[i]);
  curveVertex(i*250 , 0+lake[i]);
  curveVertex(i*275, 50+lake[i]);
  curveVertex(i*300, 0+lake[i]);
  curveVertex(i*325, 50+lake[i]);
  curveVertex(i*350, 0+lake[i]);
  curveVertex(i*350, 0+lake[i]);
  endShape();
  if (lake[i] >= height/20){
      lake[i] = (random(-100,0));
    }
  }
  pop();
  push();//changing the location again
    stroke(255,255,246);
  strokeWeight(5);
  translate(-60, 400); 
  scale(0.1);
  for(i = 0; i<100; i++){
    lake[i]= lake[i] +3;
  beginShape();
  curveVertex(i*200 , 0+lake[i]);
  curveVertex(i*200 , 0+lake[i]);
  curveVertex(i*225 , 50+lake[i]);
  curveVertex(i*250 , 0+lake[i]);
  curveVertex(i*275, 50+lake[i]);
  curveVertex(i*300, 0+lake[i]);
  curveVertex(i*325, 50+lake[i]);
  curveVertex(i*350, 0+lake[i]);
  curveVertex(i*350, 0+lake[i]);
  endShape();
    if (lake[i] >= height/20){
      lake[i] = (random(-100,0));
    }
  }
  pop();
  //changing the location again
   push();
  stroke(255,255,246);
  strokeWeight(5);
  translate(-60, 480); 
  scale(0.1);
  for(i = 0; i<100; i++){
    lake[i]= lake[i] +3;
  beginShape();
  curveVertex(i*200 , 0+lake[i]);
  curveVertex(i*200 , 0+lake[i]);
  curveVertex(i*225 , 50+lake[i]);
  curveVertex(i*250 , 0+lake[i]);
  curveVertex(i*275, 50+lake[i]);
  curveVertex(i*300, 0+lake[i]);
  curveVertex(i*325, 50+lake[i]);
  curveVertex(i*350, 0+lake[i]);
  curveVertex(i*350, 0+lake[i]);
  endShape();
    if (lake[i] >= height/20){
      lake[i] = (random(-100,0));
    }
  }
  pop();

  
  //drawing the clouds by calling them from their class
  push();
  translate(-10, 10); // moving the Cloud object's position
  scale(1); //changing the size of the cloud
  cloud1.display(lightyellow, 0); //call the first object from 
  //the Cloud class
  cloud1.cloudmove(1);//moves the clouds and sets the speed
  pop();
  // calling the second object from the Cloud class
  cloud2.display(lightyellow, 70);
  cloud2.cloudmove(-1);//moves the clouds and sets the speed
  //calling another instance of the second cloud object
  push();
  scale(0.5); //changing the cloud's size
  cloud2.display(lightblue, 300);
  cloud2.cloudmove(-1);//moves the clouds and sets the speed
  pop();
  // calling the third object from the Cloud class
  cloud3.display(lightblue, 100);
  cloud3.cloudmove(2);
  // calling the fourth object from the Cloud class
  cloud4.display(lightblue, -30);
  cloud4.cloudmove(-1);//moves the clouds and sets the speed
  // calling the fourth object from the Cloud class
  push();
  translate(-10,10); // moving the Cloud object's position
  scale(0.5);
  cloud5.display(lightyellow, -50);
  cloud5.cloudmove(2);
  pop();

  //calling first group of water lillies
  lilly1.display(300, 800, lightpink, 0.5); 
  lilly1.movepetals(100, 200, 300, 400);
  lilly3.display(700, 800, lightpink, 0.5);
  lilly3.movepetals(90, 190, 290, 390);
  
  //calling swan objects
  push();
  scale(0.5); //change the swan's size
  translate(-200, 600); //move its position
  swan1.display(swancolor1);//first swan 
  swan1.move(1000);
  pop();

  if (frameCount > 100) { //shows second swan after 100 frames
    push();
    scale(0.3);//size
    translate(-300, 1200);//position
    swan2.display(swancolor1);//color 
    swan2.move(1800);
    pop();
  }
  if (frameCount > 200) {// shows third swan after 200 frames
    push();
    scale(0.3);//size
    translate(-300, 1300);//position
    swan3.display(swancolor2);//color
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
  for(var i = 0; i < 200; i++) {
  rain[i].show();
  rain[i].update();
}
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
    this.x = 150; //this controls the x-coordinate of the first arc
    this.n = 190;//this controls the x-coordinate of the second arc
    this.p = 150;//this controls the x-coordinate of the third arc
    this.q = 110;//this controls the x-coordinate of the fourth arc
  }
  display(color_cloud, y_location) {//drawing the cloud and setting y_location
    //as a paramter for the display method to control where the cloud y-coordinate is
    fill(color_cloud); //this paramter controls the fill color for each cloud
    //using arcs to draw the cloud shapes
    arc(this.x, 100 + y_location, 160, 50, PI + .1, -0.1, OPEN);
    arc(this.n, 90 + y_location, 40, 40, PI + .1, -0.1, OPEN);
    arc(this.p, 80 + y_location, 70, 70, PI + .1, -0.1, OPEN);
    arc(this.q, 90 + y_location, 40, 40, PI + .1, -0.1, OPEN);
  }
  cloudmove(cloud_speed) {//move teh x-coordintaes of the clouds
    this.x = this.x + cloud_speed;
    this.n = this.n + cloud_speed;
    this.p = this.p + cloud_speed;
    this.q = this.q + cloud_speed;
//reseting x-coordinates if they are bigger than the width or less than zero 
//(if the clouds leave the screen.)
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
//seeting a class for the water lilly objects
class Waterlilly {
  constructor() {
    this.m = 5;
    this.n = 2;
    this.count = 6;
  }

  display(x_lilly, y_lilly, color, size) {
    push();
    scale(size);
    translate(x_lilly, y_lilly);//moves the lillies to a specific location on the screen
    fill(color);// parameter for the fill color
    rotate(PI / this.n) //how much the whole class is rotated by
    noStroke();
    for (let i = 0; i < this.count; i++) {//this.count determines the length of the loop
      ellipse(0, 30, 20, 80);//draws the water lilly
      rotate((PI / this.m));//rotates the ellipses to form the lilly shape
    }
    pop();
    push(); //drawing the leaves of the lillies
    scale(0.5);//changes the size of the leaves
    translate(x_lilly, y_lilly); //moves it to wherever each lilly is
    fill(91, 120, 78); //dark green 
    rotate(PI);//tilts it to the right position
    ellipse(0, -10, 50, 10);//draws the shape 
    fill(152, 215, 168);//light green
    ellipse(0, -10, 35, 10);//draw another leaf shape
    pop();
  }
  movepetals(timechange1, timechange2, timechange3, timechange4) { //change show the lillies 
    //look over time. I set those parameters so that each lilly could chnage at a different time
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
class Star {//class for the stars
  constructor() {
    this.x = random(width); //random x location for the stars to appear at 
    this.y = random(height);//random y location for the stars to appear at 
    this.diameter = random(5, 5);// random width and height fo each star object 
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed); //changing objects' x-coordinates 
    this.y += random(-this.speed, this.speed);//changing objects' y-coordinates
  }

  display() {
    noStroke();
    fill(225, 212, 34);
    ellipse(this.x, this.y, this.diameter, this.diameter);//draws the stars
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
    translate(this.ex + this.x, this.ey);// eye location
    stroke(0);
    strokeWeight(3);
    fill(255);
    ellipse(0, 0, this.d, this.d); //draw the eyes
    this.angle = atan2(this.ey - mouseY, this.ex - mouseX); //changes rotation of the 
    //eye to follow teh mouse coordinates
    rotate(this.angle); //rotating the eye
    fill(0, 255, 0);//eye details
    ellipse(this.d / 8, this.d / 8, this.d / 2, this.d / 2);//draw eye details
    pop();

  }
  move(limit) {//setting parameter for the point where each swan resets
    this.x = this.x + 3;
    if (this.x > limit) { // if the swans' x-coordinates is bigger than than the parameter 
      //then the swan resets and returns to zero
      this.x = 0;
      console.log(this.x);
    }
  }
}

  class Rain {// creating object for rain that appeard durin the day
  constructor(){
  this.x = random(0, width); //x-coordinate is randomized
  this.y = random(0, -height/2);//y-coordinate is randomized as well
  }
  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 5), random(1, 5)); // draws the ellipses to 
    //represent the rain and each drop has a random size between 1 and 5
  }
  update() {
    this.speed = random(5, 10); // the speed of each drop is randomized 
    this.gravity = 0.5; 
    this.y = this.y + this.speed*this.gravity;  // this is what makes the y-coordinates 
    //change over time 
    
    if (this.y > height/2) {//resetting the location of the y-coordinates of the rain drops
      //so that it starts from teh top again
      this.y = random(0, -height/2);
      this.gravity = 0;
}
}

  }
