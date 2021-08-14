var bg ;
var allPlayers
var character
var spaces
var laserGroup;
var laserImg
var spaceshipGroup

function preload(){
bg = loadImage("space.png");
character= loadImage("spaceship2.png");
spaces=loadImage("spaceship.png")
laserImg=loadImage("laser1234.png")
}

function setup() {
  createCanvas(1000,790);
  win=createSprite(200,690,10,80);
  win.addImage(character)
  win.scale=0.8

//  spaceship1=createSprite(950,100,400,900)
// spaceship1.addImage(spaces)
 ///spaceship1.scale=0.5

 laserGroup= new Group();
spaceshipGroup= new Group();
}

function draw() {
  background(bg);

 
 

  if (keyIsDown(RIGHT_ARROW)){
   win.velocityX= +4
  }
  else{
    win.velocityX=0
  }

  if (keyIsDown(LEFT_ARROW)){
    win.velocityX= -4
   }
 

  if(keyDown("space")){
    createLaser();
    
  }

 
  createspaceships();

  if(spaceshipGroup.X===win.X){
    spaceshipGroup.velocityY=+10
   // console.log("tgtg")
    }
    if(spaceshipGroup.y<=780){
      alert("succesfull")
    }

  drawSprites();
}
function createLaser() {
  var laser= createSprite(100, 100, 60, 10);
  laser.scale=0.1
  laser.addImage(laserImg);
  laser.x = win.x
  laser.y=win.y;
  laser.velocityY = -4;
  laser.lifetime = 200;
  laser.scale = 0.3;
  laserGroup.add(laser); 
   
}

function createspaceships() {
  if (frameCount % 99 === 20){
  spaceship = createSprite(random(50, 950),100,400,900);
  spaceship.addImage(spaces);
  spaceship.scale=0.4;
  spaceship.velocityY = 2;
  spaceship.lifetime = 950;
  spaceshipGroup.add(spaceship);
 

  }
  
}


 

