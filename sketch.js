
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,paper1,ground1,line1,line2,line3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(400, 380, 50);
	ground1 = new Ground(650, 400, 1200, 20);
	line1 = new Dustbin(955, 290, 100, 100);
	line2 = new Dustbin(950,290,10,100);
	line3 = new Dustbin(1050, 290, 10, 100);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);

 
  
 paper1.display();
 ground1.display();
 line1.display();
 line2.display();
 line3.display();


 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-150});
	}
}



