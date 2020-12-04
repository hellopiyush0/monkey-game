  
//creating objects
  
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
  
//creating score and giving it value
  
var score;
var survivalTime = 0;
  
  
function preload(){
  
  //loading animation to monkey_running
  
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png",     "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png",   "sprite_6.png", "sprite_7.png", "sprite_8.png")
  
  //loading images to objects
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
} 
  
  
function setup() {
  
  //creating canvas
  
  createCanvas(590, 360);
  
  //making monkey a sprite and adding animation in it
  
  monkey = createSprite(80, 315);
  
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  //making ground a sprite and giving it a velocity
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  
  //creating food and obstacle group
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
} 
  
  
function draw() {
  
  //giving background a color
  
  background("white");
  
  //making ground reset it when reaches it's half of width
  
  ground.x = ground.width/2;
  
  //creating score and giving it color and font size
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : " + score, 500, 50);
  
  //scoring
  
  survivalTime = survivalTime + Math.round(getFrameRate() / 60);
  
  //creating survival time and giving it color and font size
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time : " + survivalTime, 100, 50);
  
  //making monkey collide with the ground
  
  monkey.collide(ground);
  
  //adding gravity
  
  monkey.velocityY = monkey.velocityY + 0.5;
  
  //making monkey jump when space key is pressed
  
  if(keyDown("space") && monkey.y >= 314){
    
    monkey.velocityY = -13;
    
  } 
  
  //making Fruit and Obstacle Function group work
  
  Fruit();
  Obstacles();
  
  //creating sprites on canvas
  
  drawSprites();
  
} 
  
  
function Fruit(){
  
  //creating banana's on every 80 frames
  
  if(frameCount % 80 === 0){
    
    //making banana a sprite and adding image to it
    
    banana = createSprite(650, 200);
    banana.addImage(bananaImage);
    
    //making banana random position in y axis and scaling it
    
    banana.y = Math.round(random(120, 200));
    banana.scale = 0.1;
    
    //giving banana a velocity,lifetime and adding it in foodGroup
    
    banana.velocityX = -7;
    banana.lifetime = 100;
    foodGroup.add(banana);
    
  } 
   
} 
  
  
function Obstacles(){
  
  //creating obstacle's on every 300 frames  
  
  if(frameCount % 300 === 0){
    
    //making obstacle a sprite and adding image to it
    
    obstacle = createSprite(650, 330);
    obstacle.addImage(obstacleImage);
    
    //giving obstacle a velocity,lifetime,scaling it and adding it     in obstaclesGroup
    
    obstacle.velocityX = -12;
    obstacle.lifetime = 70;
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
    
  } 
   
} 
  