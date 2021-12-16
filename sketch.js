var InvisibleGround;
var Enemy;
var bg, bgImg;
var player;
var villian;
function preload()
{
  bgImg = loadImage("Images/bg2.jpg")
	
}

function setup() {
	createCanvas(800, 600);
  bg = createSprite(displayWidth/2-100, displayHeight/2-100, 800, 600)
  bg.addImage(bgImg)
	player = createSprite(50,423, 50, 100)
	villian = createSprite(750, 423, 50, 100)
  InvisibleGround = createSprite(400, 480, 800, 10)
  InvisibleGround.visible = false
	


	

}
function draw() {
 
  background(0);
  
  if(keyDown("UP_ARROW")){
	  player.y = player.y-20

  }
  if(keyDown("Down_ARROW")){
	player.y = player.y+20
  }
  if(keyDown("RIGHT_ARROW")){
	player.x = player.x+20
   
  }
  if(keyDown("LEFT_ARROW")){
	player.x = player.x-20
  }
  spawnEnemy();
  drawSprites();
 
}

function spawnEnemy(){
  if(frameCount % 60 === 0){
    Enemy = createSprite(780, 423, 50, 100)
    Enemy.velocityX = -3

  }
   
  

}



