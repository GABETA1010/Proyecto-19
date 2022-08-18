var star,stars;
var rocket, rocketImg, ovni, ovniImg;

var gameState = 1;
var PLAY = 1;
var END = 0;
var ovniG, starG;

function preload(){
starImg = loadImage("Imagen/estrella.png");
rocketImg = loadImage("Imagen/cohete.png");
ovniImg = loadImage("Imagen/ovni.png");
}

function setup() {

 createCanvas(700,800);

rocket = createSprite(350,700,30,30);
rocket.addImage(rocketImg);
rocket.scale = 0.2

ovniG = new Group();
starG = new Group();
}

function draw() {

 if(gameState === PLAY){

 background("black");
 spawnStars();
 spawnOvnies();
 rocket.x = World.mouseX;
 edges = createEdgeSprites();
 rocket.collide(edges);

 if(ovniG.isTouching(rocket)){
 gameState === END
 }

 }

 if(gameState === END){

 starG.destroyEach();
 ovniG.destroyEach();
 rocket.destroy(); 

 }
 
 drawSprites();
}


function spawnStars(){

if (frameCount % 10 === 0){
star = createSprite(Math.round(random(20,width -0),10,10));
star.addImage(starImg);
star.scale = 0.1
star.velocityY = 4
star.lifeTime = 200; 
starG.add(star);
}

}

function spawnOvnies(){

if(frameCount % 30 === 0){
ovni = createSprite(Math.round(random(20, width -30),20,20));
ovni.addImage(ovniImg);
ovni.scale = 0.2;
ovni.velocityY = 4; 
ovni.lifetime = 800;
ovniG.add(ovni);
}

}
