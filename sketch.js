
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob,rope;
var base;

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	bob1= new Bob(100,400,50,50);
	bob2= new Bob(250,400,50,50);
	bob3= new Bob(400,400,50,50);
	bob4= new Bob(550,400,50,50);
	bob5= new Bob(700,400,50,50);

	base= createSprite(400,100,800,50);

    rope1= new Rope(bob1.body,{x:300,y:100});
	rope2= new Rope(bob2.body,{x:350,y:100});
	rope3= new Rope(bob3.body,{x:400,y:100});
	rope4= new Rope(bob4.body,{x:450,y:100});
	rope5= new Rope(bob5.body,{x:500,y:100});
	
}

function draw() {
 Engine.update(engine);
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  base.display();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}



