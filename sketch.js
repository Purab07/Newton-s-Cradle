
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = Bodies.rectangle(400, 50, width, 10 , {isStatic:true} );
 	World.add(world, roof);

	//Create the Bodies Here.

	bob1 = new Bob(100,600,50);
	bob2 = new Bob(250,600,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(roof.position.x,roof.position.y,width,10);
  bob1.display();
  bob2.display();
  drawSprites();
 
}



