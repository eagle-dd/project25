class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Matter.Bodies.rectangle(x,y,width,height,options);
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      rectMode(CENTER);
      fill("cyan");
      strokeWeight(3)
      stroke("green");
      rect(this.x, this.y, this.width, this.height);
    }
  };