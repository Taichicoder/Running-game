var boy, path, leftBoundary, rightBoundary;
var pathimg, boyimg;
var i;
function preload(){
pathimg=loadImage("path.png");
boyimg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG", "jake5.png")  
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY=5;
  path.scale=1.2;
  
  boy = createSprite(180, 340, 30, 30);
  boy.addAnimation("JakeRunning", boyimg);
  
  leftBoundary = createSprite(0,0,100, 800);
  leftBoundary.visible=false;
  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible=false;
}

function draw() {
  background(0);
  
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
boy.x=World.mouseX;
  path.velocityY=4;
  
  if(path.y>400){
    path.y=height/2;
  }
  drawSprites();
}
