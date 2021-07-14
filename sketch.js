var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600, 400);

  
  bullet = createSprite(150,200,10,20);
  wall = createSprite(1000,200,thickness, 100);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
  bullet.velocityX = speed;

}

function draw() {
  background("black");
  
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){

      bullet.velocityX = 0;

      var deformation = 0.5 * weight * speed * speed/ 22509;

      if (deformation > 180){

        bullet.shapeColor = "white";

      }
      if(deformation > 100 && deformation < 180){
        
        bullet.shapeColor = "white";

      }

      if(deformation < 100){

        bullet.shapeColor = "white";

      }

  }

    if(hasCollided(bullet,wall)){

      bullet.velocityX = 0;

      var damage = 0.5 * weight* speed * speed/(thickness * thickness * thickness)

      if(damage > 10){
        
        wall.shapeColor = "red";

      }

      if(damage < 10){

        wall.shapeColor = "green";

      }
    }

  drawSprites();
}
function hasCollided(lbullet, lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >=wallLeftEdge){

    return true;
  }

    return false;
}