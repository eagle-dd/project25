class Dustbin{
    constructor(x,y,width,height){
    var options={
        isStatic:true
    }  
    this.body = Matter.Bodies.rectangle(x,y,width,height,options); 
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image=loadImage("dustbingreen.png")
    World.add(world,this.body);
}
display(){
    push()
    translate(this.body.position.x,this.body.position.y);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}
}
