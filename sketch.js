var wall,thickness;
var bullet,weight,speed;



function setup() {
createCanvas(600,400)
thickness=random(22,83)
speed=random(233,321)
weight=random(30,52)
bullet = createSprite(200,200,40,40)
wall = createSprite(550,200,thickness, 300)
wall.shapeColor=color(80,80,80)
bullet.velocityX=speed/10;
}




function draw() { 
    background(0,0,0);
    var damage=0;
    if(hasCollided(bullet,wall))
        {
            bullet.velocityX = 0
            damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
        }
if(damage>10)
 {
wall.shapeColor=color(255,0,0);
 }
 else if(damage<10)
{
    wall.shapeColor=color(0,255,0);
}
    drawSprites();

}

function hasCollided(lbullet,lwall) {
var bulletRightEdge=lbullet.x+lbullet.width/2;
var wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
    return true
}
else {
return false;
}
}