// Constants
let Y_AXIS = 1;
let X_AXIS = 2;
let c1, c2,b1,b2;
let x,y;
function setup() {
  createCanvas(500, 500);
	x= width/2
	y=height;
}
function draw() {
	if (y< (height/2)){
    c1= color(125,212,204);
    c2= color(255,212,204);
	 setGradient(0, 0, 600, 600, c1, c2, Y_AXIS);
 }else{
	  c1= color(201,109,178);
    c2= color(120,175,204);
	 	setGradient(0, 0, 600, 600, c1, c2, Y_AXIS);
 }
  noStroke();
  fill(250,235,126);
  ellipse(x, y, 90, 90);
	 y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
	//mountain 1 
	 noStroke()
  fill(63,41,96);
  triangle(2,400,200,150,300,400);
  //mountain peek
  noStroke()
  fill(245,248,240);
	quad(143,220,200,150,225,210,200,190);
	//mountain2
	noStroke()
  fill(81,41,96);
  triangle(200,400,350,100,600,400);
  //mountain peek
  noStroke()
  fill(245,248,240);
	quad(143,220,200,150,225,210,200,190);
  //mountain 3  
	noStroke()
  fill(81,41,96);
  triangle(0,400,0,100,143,400);
  //mountain peak
	noStroke()
  fill(245,248,240);
	quad(143,220,200,150,225,210,200,190);
	noStroke()
  fill(63,41,96);
  triangle(400,400,500,100,700,400);
	//hill
	fill(163,134,213);
	ellipse(250,500,700,300);
	
	//cloud 1
	fill('#f9f5e5');
	
  arc(250, 290, 180, 60, PI + .1, -0.1, OPEN);
  arc(210, 280, 50, 50, PI + .1, -0.1, OPEN);
  arc(250, 260, 80, 80, PI + .1, -0.1, OPEN);
  arc(290, 280, 50, 50, PI + .1, -0.1, OPEN);
}
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


