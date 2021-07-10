var trex, trex_running, edges;
var groundImage;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
edges=createEdgeSprites();
ground=createSprite(200,180,400,20);
ground.addImage("a",groundImage);
}


function draw(){
  //set background color 
  background("white");
  if(keyDown("space")) {
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.5;
  ground.velocityX=-2;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //logging the y position of the trex
  trex.collide(ground);
  drawSprites();
}