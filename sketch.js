const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope
var rope2
var rope3
var rope4
var rope5
var ball2
var ball3
var ball4
var ball5

function setup() {
  createCanvas(700, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  box1 = new Box(1000, 50, 500, 70);
  

  ball = new Ball(400, 250, 80, 80);
  ball2 = new Ball(320,250,80,80);
  ball3 = new Ball(480,250,80,80);
  ball4 = new Ball(560,250,80,80);
  ball5 = new Ball(240,250,80,80);
  rope = new Rope(ball.body, { x: 400, y: 50 });
  rope2 = new Rope(ball2.body, { x: 320, y: 50 });
  rope3 = new Rope(ball3.body, { x: 480, y: 50 });
  rope4 = new Rope(ball4.body, { x: 560, y: 50 });
  rope5 = new Rope(ball5.body, { x: 240, y: 50 });
  
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  box1.display();
  
  

  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball4.body, { x: mouseX, y: mouseY });
  

}


