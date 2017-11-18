var mic;
var c=1;

function setup(){
    createCanvas(500,500);
    mic = new p5.AudioIn();
//    recorder = new p5.SoundRecorder();

    mic.start();
    
//    recorder.setInput(mic);
  background(0);
}

function draw() {
  background(0);
  var vol = mic.getLevel();
  var h=map(vol,0,1,0,height);
    if(mouseIsPressed==true){
        c++;
    }
      console.log(vol);
   for(var x=0; x<width;x+=width/c){
       for(var y = 0;y<height;y+=random(height/h)){
           for(var count=0; count<=height/h;count++){
               if(count%2==0){fill(255);}else{fill(0);}
           }
           rect(x,y,width/c,random(height/vol));
         }     
   }
}
