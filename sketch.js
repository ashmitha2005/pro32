const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var base;
var block1,  block2,  block3,  block4,  block5,  block6 , block7,  block8,  block9;
var polygon;
var rubber;
var score=0;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


//level1
block1 = new Box(600,322,30,40);
block2 = new Box(570,322,30,40);
block3 = new Box(630,322,30,40);
block4 = new Box(540,322,30,40);
block5 = new Box(660,322,30,40);

//level2
block6 = new Box(600,282,30,40); 
block7 = new Box(570,282,30,40); 
block8 = new Box(630,282,30,40); 

//level3
block9 = new Box(600,242,30,40); 



polygon = new Polygon(50,200,20,20);




rubber= new Slingshot(polygon.body, {x:100, y:200});



base = new Ground (600,350, 300, 15);

}

function draw(){
 if(background)
 background(0);
   noStroke();
   textSize(35);
   fill("white");
   text("SCORE : "+ score, 750, 40);
Engine.update(engine);

fill("lightblue");
block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block5.display();
block5.score();
fill("lightpink");
block6.display();
block6.score();
block7.display();
block7.score();
block8.display();
block8.score();
fill("lightgreen");
block9.display();
block9.score();
base.display();
polygon.display();
rubber.display();




}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    rubber.fly();
}

function keyPressed(){
    if(keyCode === 32){
        rubber.attach(polygon.body);

    }
}

async function getbackgroundImage(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if (hour > 06 && hour <18){
        background("yellow");
    }else{
        background("black");
    }
}