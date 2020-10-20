

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  obstacleGroup = new Group();
  bananaGroup = new Group();

}


function draw() {
  background("white");
  if(ground.x<0){
    ground.x=ground.width/2; 
  }
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    } 
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);

  createObstacles();
  createBanana();
  
   if(obstacleGroup.isTouching(monkey)){ 
   
   
    ground.velocityX=0;
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setLifetimeEach(-1);                            
    obstacleGroup.setLifetimeEach(-1);   
    
   
   }
  
  drawSprites();
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);

}
function createBanana(){
  if(frameCount %80 === 0){
    var banana= createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(120,200));
    banana.velocityX=-6;
    
    bananaGroup.add(banana);
    
    
  }
  
}
function createObstacles(){
if (frameCount %300 === 0 ){
  obstacle=createSprite(800,320,10,40);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-6;
  obstacle.scale=0.1;
  obstacle.lifeTime= 300;
  
  obstacleGroup.add(obstacle);
}
     
  
}





