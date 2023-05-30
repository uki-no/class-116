var noseX=0
var noseY=0
function preload(){
clown_nose= loadImage("https://i.postimg.cc/rFzV88sn/clwon-removebg-preview.png")
}

function setup(){
 canvas= createCanvas(300,300)
 canvas.center()
 video= createCapture(VIDEO)
 video.size(300,300)
 video.hide()

 poseNet= ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses)
}
function modelLoaded(){
console.log('Model is initialized')
}

function gotPoses(results){
   if(results.length>0){
   console.log(results)
   noseX= results[0].pose.nose.x
   noseY= results[0].pose.nose.y
   }
   
}



function draw(){
image(video,0,0,300,300)
//stroke(255,0,0)
//fill(0,255,0)
//circle(noseX,noseY,25)
image(clown_nose,noseX-10,noseY-10,24,24)
}

function ts(){
    save("clown_nose.png")
}
