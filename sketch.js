const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var stick1, stick2, stick3, stick4, stick6, stick5, stick7, stick8;
var pillar1, pillar2;
var roof;
var flag;


function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Box(200, 380, 400, 50);

  stick1 = new Box(80, 275, 20, 160);
  stick2 = new Box(105, 275, 20, 160);
  stick3 = new Box(130, 275, 20, 160);
  stick4 = new Box(155, 275, 20, 160);
  stick5 = new Box(180, 275, 20, 160);
  stick6 = new Box(205, 275, 20, 160);
  stick7 = new Box(230, 275, 20, 160);
  stick8 = new Box(255, 275, 20, 160);

  pillar1 = new Box(40, 250, 50, 210);
  pillar2 = new Box(300, 250, 50, 210);

    roof = new Box(167.5, 170, 195, 50);

    flag =  new Box(167.5, 100, 10, 90);

}

function draw() {
  background(0);  
  Engine.update(engine);
  
  ground.display();

  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  stick8.display();
  pillar1.display();
  pillar2.display();
  roof.display();
  flag.display();
  fill("red");
  triangle(40, 86, 80, 143, 0, 143);
  triangle(173, 100, 173, 60, 220, 80);
  triangle(300, 86, 340, 143, 260, 143);

}

