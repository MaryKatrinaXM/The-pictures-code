var path,spaceship,coin,boy,gameover,gun;
var pathImg,spaceshipImg,coinImg,boyImg,gameoverImg,gunImg;
var coinGroup,boyGroup,gunGroup;
var score=0;
var PLAY =1;
var END =0
var gameState=1;

function preload(){
pathImg= loadImage("Assests/0fddac558a75c655d038a01b5610aef3.jpg");
spaceshipImg= loadImage("Assests/istockphoto-949400776-612x612.jpg");
coinImg= loadImage("Assests/psd-gold-coin-icon-45928.jpg");
boyImg= loadImage("Assests/Astronaut-clipart-transparent-3.png");
gameoverImg= loadAnimation("Assests/e9252025e2f4a9aaf0aa7e0b9091a088.jpg");
gunImg= loadImage("Assests/11-115873_pistol-clipart-squirt-gun-clip-art.png");


}
function setup() {

  createCanvas(windowWidth,windowHeight);

path=createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
path.addImage(pathImg);


spaceship= createSprite(width/2,height-20,20,20);
spaceship.addImage(spaceshipImg);
spaceship.scale=0.3;


}

function draw(){
background(0);   
  
  drawSprites();
}