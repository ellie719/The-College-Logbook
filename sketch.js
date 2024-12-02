var goof=0


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
    background(84, 93, 203, 150); //an RGB color for the canvas' background
}

//The draw function happens over and over again
function draw() {

  //circle
  strokeWeight(2);
  stroke(142, 132, 194, 100) // an RGB color for the circle's border
  fill(98, 80, 186, 200); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),34); //  
  fill(181, 133, 204, mouseY);
  ellipse(random(height),random(width),10,15); // center of canvas, 20px dia
  textFont('Roboto');
  textSize(50);
  text(':P', 227,260);
  ellipse(mouseX, mouseY,13,20)
  ellipse(random(height), 40, 34);
  ellipse(random(height), 460,34);
  

  



}

function mousePressed(){
  if (goof>=255) {
    goof=0;
  }else{
     goof=goof+1.5;

  }

 goof=goof+1.5;
}