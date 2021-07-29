
var monkey , monkey_running
var banana ,bananaImage, obstacles, obstaclesImage
var foodGroup, obstaclesGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
 
}



function setup() {
  var survivaltime=0
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  foodGroup=new Group()
  obstaclesGroup=new Group()
  score=0
  

  
}


function draw() {
  background(255)
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY=-12
  }
monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  spawnfood()
  spawnobstacles()
  drawSprites()
  textSize(20)
  fill("white")
  text("score"+score,500,50)
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityY=0
    obstaclesGroup.setVelocityXEach(0)
    foodGroup.setVelocityXEach(0)
    obstaclesGroup.setLifetimeEach(-1)
    foodGroup.setLifetimeEach(-1)
  }
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime"+survivalTime,100,50)
}
function spawnfood(){
  if(frameCount%80===0){
    banana=createSprite(600,250,40,10)
    banana.y=random(120,200)
    banana.velocityX=-5
    banana.lifetime=300
    monkey.depth=banana.depth+1
    banana.addImage(bananaImage)
    banana.scale=0.05
    foodGroup.add(banana)
  }
}
function spawnobstacles(){
  if(frameCount%300===0){
    obstacles=createSprite(800,320,10,40)
    obstacles.velocityX=-6
    obstacles.addImage(obstaclesImage)
    obstacles.scale=0.15
    obstacles.lifetime=300
    obstaclesGroup.add(obstacles)
  }
}





