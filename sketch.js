
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananasGroup
var score=0
var background ,backgroundImage

var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(400,350)  
  
 monkey=createSprite(80,315,20,20)  
 monkey.addAnimation("moving", monkey_running)
 monkey.scale=0.1 
  
 ground=createSprite(400,350,900,10) 
 ground.velocityX=4;
ground.visibility=false
  

 
   bananasGroup=createGroup();
  obstacleGroup = createGroup();
  


  
}


function draw() {
background("cyan")
   
if(keyDown("space")&& monkey.y > 210) {
 monkey.velocityY = -12;  
} 
  
monkey.velocityY = monkey.velocityY + 0.8
 
 ground.x=ground.width/2   
  
monkey.collide(ground)  
  
  spawnBananas()
  spawnObstacles()
  
if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach()
  monkey.scale=0.10
    obstacleGroup.setVelocityXEach(0)
  score=0
  }
  
 
  
  stroke("red")
  textSize(20)
  fill("red")
  text("Score:"+ score,300,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:" + survivalTime,100,50)
 
  if(bananasGroup.isTouching(monkey)){
    score=score+2
    bananasGroup.destroyEach()
  }
  
  switch(score){
    case 10:monkey.scale=0.12
             break;
    case 20:monkey.scale=0.14
            break;
    case 30:monkey.scale=0.16
             break;
    case 40:monkey.scale=0.18
            break;
    case 50:monkey.scale=0.20
            break;
    case 60:monkey.scale=0.22
            break;
    case 70:monkey.scale=0.24
            break;  
    case 80:monkey.scale=0.26
            break;  
            
      
      
  }
  
  
spawnObstacles()
  
  
 drawSprites() 
}

function spawnBananas(){
 
if(frameCount % 80===0)  {
  var banana = createSprite(300,120,40,10);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;

  banana.lifetime = 200;
  bananasGroup.add(banana)
   
}
   

}

function spawnObstacles(){
  
if (frameCount % 300 === 0){
   var obstacle = createSprite(300,325,10,40);
   obstacle.velocityX = -3;
   obstacle.addImage(obstaceImage)
   obstacle.scale= 0.1
   obstacle.lifetime=200
  obstacleGroup.add(obstacle)
 
  
    }  
  
}





