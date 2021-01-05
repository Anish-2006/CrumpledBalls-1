
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    boxPosition=width-220
 	boxY=330;

	ground = new Ground(width/2,390,1000,10);

	boxLeft = new Dustbin(boxPosition, boxY, 20,100);
	boxRight = new Dustbin(boxPosition+200 , boxY, 20,100);
	boxDown = new Dustbin(boxPosition+100, boxY+40, 200,20);
	ball = new Paper(100,370,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine)

  background(0);

  ground.display();
  boxLeft.display();
  boxRight.display();
  boxDown.display();
  ball.display();

  drawSprites();
 
}

 function keyPressed(){

  if(keyCode === UP_ARROW){

  Body.applyForce(ball.body,ball.body.position,{x:75,y:-80});
  

  }

 }



