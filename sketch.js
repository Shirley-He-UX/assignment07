var capture;
var mic;
function setup() {
  createCanvas(500,500);
  
  mic = new p5.AudioIn();
  capture = createCapture(VIDEO);
  capture.size(500,500);
  
  capture.hide();
  
  mic.start();
  angleMode(DEGREES);
  background(0);

}

function draw() {
  
  var myImg=capture.loadPixels();
  var vol=mic.getLevel();
  var h =map(vol,0,1,0,height*2);
  translate(width/2,height/2);
  push();
  for(var i=0;i<=500;i+=30){
    rotate(30);
    //tint(255,100);
    tint(50,50,205,200);
    image(myImg, 0, 0, 500-i, 500-i);
  }
  pop();
  
  for(var i=-250;i<251;i+=20){
         noStroke();
          fill(255);
          ellipse(sin(frameCount+i)*h,i,6);
          ellipse(cos(frameCount+i)*h,i,6);
          strokeWeight(1);
          stroke(255);
          line(sin(frameCount+i)*h,i,cos(frameCount+i)*h,i);
     }
}
