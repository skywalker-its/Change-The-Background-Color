
var r= 0;
var g= 150;
var b= 255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(1200,400);
}


function draw(){
  background(255,255,255);
  
  // Use the map() function to change color of red, green, and blue

  // change the value of Red based on the mouse movement about the X axis
  r= map(mouseX,0,1200,0,255);
  // change the value of Green based on the mouse movement about the X axis
  g= map(mouseX,0,1200,0,255);
  // change the value of Blue based on the mouse movement about the X axis
  b= map(mouseX,0,1200,0,255);
  
  
  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);

  // Create an ellipse that will move around with your mouse about the X axis.
  fill("yellow");
  ellipseMode(CENTER);
  ellipse(mouseX,mouseY,30,30);
}