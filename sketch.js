var fixedRect, movingRect;
var A , B
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  A = createSprite(800,300,50,60)
  B = createSprite(300,100,50,50)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(touching(movingRect , A)=== true){
    movingRect.shapeColor = "red";
   //fixedRect.shapeColor = "red";
   A.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
   // fixedRect.shapeColor = "green";
   A.shapeColor = "green";
  }
  if(touching(movingRect , B)=== true){
    movingRect.shapeColor = "red";
   //fixedRect.shapeColor = "red";
   B.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
   // fixedRect.shapeColor = "green";
   B.shapeColor = "green";
  }
  drawSprites();
}
function touching(mRect , fRect){
  if (mRect.x - fRect.x < fRect.width/2 + mRect.width/2
    && fRect.x - mRect.x < fRect.width/2 + mRect.width/2
    && mRect.y - fRect.y < fRect.height/2 + mRect.height/2
    && fRect.y - mRect.y < fRect.height/2 + mRect.height/2) {
 return true
}
else {
return false
}
}