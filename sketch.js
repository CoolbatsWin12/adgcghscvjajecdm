//Renaming
const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies


function setup(){
  createCanvas(400,400);
  //creating our engine
  engine=Engine.create()
  //creating our world inside engine
  world=engine.world
  // creating object
  one=Bodies.rectangle(20,10,100,100)
  // adding object into the world
  World.add(world,one)
  rect(one.position.x,one.position.y,100,100)
  var prop={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,10,prop)
  World.add(world,ground)
  var pro={
    restitution: 1
  }
  ball=Bodies.circle(200,50,5,pro)
  World.add(world,ball)
  console.log(one)
}

function draw() {
  background(51);
  Engine.update(engine)
  rectMode(CENTER)
  rect(one.position.x,one.position.y,100,100)
  fill("red")
  rect(ground.position.x,ground.position.y,400,10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,5)
}

