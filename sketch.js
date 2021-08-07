var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
  orangeLeafImg = loadImage("orangeLeaf.png")
  redLeafImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //Code to move rabbit here:-
  rabbit.x=World.mouseX

  //Calling function here:-

  var select_sprites = Math.round(random(1,4))

  if(frameCount % 80 == 0)
   {
     if(select_sprites == 1)
     {
      createApples()
     }
     else if(select_sprites == 2)
     {
      createLeafs() 
     }
     else if(select_sprites === 3)
     {
      createOrangeLeafs()
     }
     else if(select_sprites === 4)
     {
       createRedLeafs()
     }
   }
  

  drawSprites();


}
//Creating function "CreateApples" here:-
function createApples()
{
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale= 0.1
  apple.velocityY= 2
  apple.lifetime=200
}

//Creating function for Green Leaf here:-
function createLeafs()
{
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage(leafImg)
  leaf.scale= 0.1
  leaf.velocityY= 5
  leaf.lifetime=200
}

//Creating function for Orange Leaf here:-
function createOrangeLeafs()
{
  Orangeleaf = createSprite(random(50,350),40,10,10)
  Orangeleaf.addImage(orangeLeafImg)
  Orangeleaf.scale= 0.1
  Orangeleaf.velocityY= 5
  Orangeleaf.lifetime=200
}

//Creating function for Red Leaf here:-
function createRedLeafs()
{
  Redleaf = createSprite(random(50,350),40,10,10)
  Redleaf.addImage(redLeafImg)
  Redleaf.scale= 5
  Redleaf.velocityY= 0.1
  Redleaf.lifetime=200
}
