var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 500, 50, 50);
  fixedRect.shapeColor="green"
  movingRect=createSprite(200, 100, 50, 50);
  movingRect.shapeColor="green"

  fixedRect.velocityY=-7;
  movingRect.velocityY=7;
}
function draw() {
  background("black"); 

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2&&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
      fixedRect.velocityX=fixedRect.velocityX*(-1);
      movingRect.velocityX=movingRect.velocityX*(-1);
  }


  if(movingRect.y - fixedRect.y<fixedRect.height/2 + movingRect.height/2&&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
fixedRect.velocityY=fixedRect.velocityY*(-1);
movingRect.velocityY=movingRect.velocityY*(-1);
  }

  drawSprites();
}