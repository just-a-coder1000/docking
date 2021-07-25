var iss;
var issImg;
var spaceCraft;
var spaceCraftImg;
var hasDocked = false;
var bg;
var left;
var right;
var up;
var down;
var dock;
var bg2;

function preload(){
issImg = loadImage("images/iss.png");
spaceCraftImg = loadImage("images/spacecraft1.png");
bg = loadImage("images/spacebg.jpg");
left = loadImage("images/spacecraft3.png");
right = loadImage("images/spacecraft4.png");
up = loadImage("images/spacecraft2.png");
down = loadImage("images/spacecraft2.png");
bg2 = loadImage("images/spacebg.jpg");
}

function setup() {
  createCanvas(800,400);

  dock = createSprite(330, 235, 20, 10);
 // dock.debug = true;

  iss = createSprite(400, 200, 50, 50);
  iss.addImage("space", issImg);

  spaceCraft = createSprite(500, 300, 20, 20);
  spaceCraft.addImage("spaceCraft", spaceCraftImg);
  spaceCraft.scale = 0.2;
  //spaceCraft.debug = true;
  spaceCraft.setCollider("circle", 10, -170, 50)
}

function draw() {
  background(bg); 
  
  if(!hasDocked){

  if(keyDown(LEFT_ARROW)){
    
    spaceCraft.destroy();
    spaceCraft = createSprite(spaceCraft.x, spaceCraft.y, 20, 20);
    spaceCraft.addImage(left);
    spaceCraft.scale = 0.2;
    //spaceCraft.debug = true;
  spaceCraft.setCollider("circle", 10, -260, 50)
    spaceCraft.velocityX = 1;

  }

  if(keyDown(RIGHT_ARROW)){
    
    spaceCraft.destroy();
    spaceCraft = createSprite(spaceCraft.x, spaceCraft.y, 20, 20);
    spaceCraft.addImage(right);
    spaceCraft.scale = 0.2;
    //spaceCraft.debug = true;
  spaceCraft.setCollider("circle", 10, -260, 50)
    spaceCraft.velocityX = -1;
    
  }

  if(keyDown(UP_ARROW)){
    
    spaceCraft.destroy();
    spaceCraft = createSprite(spaceCraft.x, spaceCraft.y, 20, 20);
    spaceCraft.addImage(up);
    spaceCraft.scale = 0.2;
    //spaceCraft.debug = true;
  spaceCraft.setCollider("circle", 10, -260, 50)
    spaceCraft.velocityY = -1;
    
  }

  if(keyDown(DOWN_ARROW)){
    
    spaceCraft.destroy();
    spaceCraft = createSprite(spaceCraft.x, spaceCraft.y, 20, 20);
    spaceCraft.addImage(down);
    spaceCraft.scale = 0.2;
   // spaceCraft.debug = true;
  spaceCraft.setCollider("circle", 10, -260, 50)
    spaceCraft.velocityY = 1;
    
  }
  }

  if(spaceCraft.isTouching(dock)){

    stroke("yellow");
    strokeWeight(10);
    fill("red");
    textSize(30);
    text("Docked succesfully", 250, 370);
    spaceCraft.velocityX = 0;
    spaceCraft.velocityY = 0;
  }

  drawSprites();
}