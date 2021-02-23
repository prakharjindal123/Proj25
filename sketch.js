
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3,ground,paper;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bin1 = new Dustbin(500,550,10,100);
	bin2 = new Dustbin(600,550,10,100);
	bin3 = new Dustbin(550,600,100,10);
	ground = new Ground(200,610,1500,10);
	paper = new Paper(100,205,15);
  paper.scale=2
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  paper.display();

  image(dustbinImage,470,460,150,150)
  drawSprites();
 
}

function keyPressed()
{
if(keyCode === UP_ARROW)
{

Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-30})
}
}

