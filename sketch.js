function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

}

function draw() {
  background(255,255,255);  
  drawSprites();
}

imageMode(CENTER)
image(polygon_img ,polygon.position.x,polygon.position.y,40,40);