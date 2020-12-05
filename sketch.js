const Engine = Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;

var ground, ball;
var engine , world;


function setup() {
  createCanvas(400,400);

engine = Engine.create();
//myworld is  myengine's world
world=engine.world;



ground = new Ground(200,390,400,20);
box = new Box(100,100,20,20);
box1=new Box(120,120,50,20);
//box2=new Box(250,50,10,10);
//ball1 = new Ball(300,200,10);
//ball=new Ball(150,150,30);

box2 = new Box(200,100,20,20);
box3 = new Box(220,120,50,20);
  
}

function draw() {
  background("pink");  
  Engine.update(engine);
  ground.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  //ball.display();
  //ball1.display();
}
