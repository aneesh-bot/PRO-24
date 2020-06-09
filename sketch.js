const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var  side1,side2,side3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 605);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-10,width,20);
	
	side1 = new Side(1100,577,200,15); 
	side2 = new Side(1000,547,15,75); 
	side3 = new Side(1200,547,15,75);

	ball = new PaperBall(100,585,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  ball.display();
 // keyPressed();
 
}
function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x: 33	,y:-33});
}
}


