var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,152);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 5);
  wall=createSprite(1200,200,thickness, height/2);
  bullet.velocityX=speed;
  bullet.shapeColor="pink";
  wall.shapeColor="white";
}

function draw() {
  background("black");  
if (hascollided(bullet, wall)){
    bullet.velocityX=0;   
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damage > 10)
{
  wall.shapeColor=color(255,0,0);
}

if (damage < 10 )
{
  wall.shapeColor=color(0,255,0);
}
drawSprites();
}
}
function hascollided(bullet, wall){
  bulletrightedge=bullet.x+bullet.width;
  wallleftedge=wall.x;
  if (bulletrightedge >= wallleftedge){
    return true;

  }
  return false;
}
