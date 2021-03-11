//loading all variables and variable values
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var  package2,packageBody,ground, x = 0, y = 0; 
// x for co-ordinating the origin position according to left and right click. y doing the same in opposite manner to keep red box in a fixed position
var r = 2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//loading images
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	// creating sprites and bodies in world.
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(0, 0, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	//packageSprite.debug  = true;


	helicopterSprite=createSprite(0,0, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255);
	//groundSprite.debug = true;



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(0 , 0 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	//fill (225)
	//ground = Bodies.rectangle(0, 0, width, 10 , {isStatic:true} );
	// World.add(world, ground);
	// ground.debug = true;

 	boxPosition= -100;	
 	boxY=440;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} ); 
	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);


 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} ); 
 	World.add(world, boxBottomBody);

 	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  	 rectMode(CENTER);
 	 background(0);
     //adjusting the origin as the coordinates of helicopterSprite. 
     translate(400+x,200);
	
	 // code to keep all the components of red box in a fixed position when origin moves
	if (r === 1){
		boxPosition.x = boxPosition.x +y; 
		boxleftSprite.x = boxleftSprite.x+y;
		boxLeftBody.x = boxLeftBody.x +y;
		boxBase.x = boxBase.x +y;
		boxBottomBody.x = boxBottomBody.x +y;
		boxrightSprite.x = boxrightSprite.x +y;
		boxRightBody.x = boxRightBody.x+y;
		y = 0;
		r = 2
	}

		packageSprite.x= packageBody.position.x ;
		packageSprite.y= packageBody.position.y ;

		// key went down block
  if(keyWentDown(DOWN_ARROW)){
		Matter.Body.setStatic(packageBody, false);
	if(packageBody.position.y !=0){
		packageBody = Bodies.circle(0,0 , 5 , {restitution:0.3, isStatic:true, friction:0.5});
		World.add(world, packageBody);

	}

 }
   // left arrow down block
 if(keyDown(LEFT_ARROW)){
		x = x-2;
		y = y+2;
		r = 1; 
		packageBody = Bodies.circle(0,0 , 5 , {restitution:0.3, isStatic:true, friction:0.5});
		World.add(world, packageBody);
		}
	 
	 
  // right arrow down block
 if(keyDown(RIGHT_ARROW)){
		 x = x+2;
		 y = y-2;
		 r =1;
		packageBody = Bodies.circle(0,0 , 5 , {restitution:0.3, isStatic:true, friction:0.5});
		World.add(world, packageBody);


 }

  
  drawSprites();
  
  
 
}
