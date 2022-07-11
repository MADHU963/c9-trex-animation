var trex; 
var trexRunning;

function preload(){
trexRunning= loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup() {
  createCanvas(400,400);
 trex = createSprite(200,200,30,30);
 trex.addAnimation("running",trexRunning)

}

function draw() 
{
   background("black");

  if (keyIsDown(RIGHT_ARROW)) 
  {
   trex.position.x =trex.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
   trex.position.x=trex.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
   trex.position.y =trex.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
   trex.position.y =trex.position.y + 5;
  }

  drawSprites();
}




