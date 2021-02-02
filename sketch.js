
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var gameState=0;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,130,30);
	mango3=new mango(900,250,30);
	mango4=new mango(1220,190,30);
	mango5=new mango(1050,200,30);
	mango6=new mango(1130,255,30);
	mango7=new mango(950,190,30);
	mango8=new mango(1135,177.5,30);
	mango9=new mango(1000,260,30);
	mango10=new mango(1040,50,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj= new stone(235,420,30);
	launcherObject= new Bujjikanna(stoneObj.body,{x:235,y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stoneObj.display();
  launcherObject.display();
  groundObject.display();

  if (gameState === 1){
	fill("Blue");
	textSize(25);
	noStroke();
	text("Press Space To Get Another Chance To Play!", 120, 30);
  }
  keyPressed();
  

    detectCollision(stoneObj,mango1);
	detectCollision(stoneObj,mango2);
	detectCollision(stoneObj,mango3);
	detectCollision(stoneObj,mango4);
	detectCollision(stoneObj,mango5);
	detectCollision(stoneObj,mango6);
	detectCollision(stoneObj,mango7);
	detectCollision(stoneObj,mango8);
	detectCollision(stoneObj,mango9);
	detectCollision(stoneObj,mango10);

}

function keyPressed(){
      if (keyCode===32) {
      Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
	  launcherObject.attach(stoneObj.body);
	 }
 }

function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
	}
	
function mouseReleased(){
	launcherObject.fly();	
 gameState=1;
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r)
	{
      Matter.Body.setStatic(lmango.body,false);
	}
}	