var bg, bgimg, boy, boyimg;
var invisibleGround;
var rock, rockGroup;
var rockImg;

function preload() {

  bgimg = loadImage('images/Bg.jpg');
  boyimg = loadAnimation('images/12.png','images/11.png','images/10.png','images/9.png','images/8.png','images/7.png','images/6.png','images/5.png','images/4.png','images/3.png','images/2.png','images/1.png');
  rockImg = loadImage('images/Rock.png')
}

function setup() {

  createCanvas(1000,600)

  bg = createSprite(500,300,1000,600);
  bg.addImage(bgimg);
  bg.scale = 2.2;
  bg.velocityX = -6;

  boy = createSprite(200,540,10,10);
  boy.addAnimation('cycle',boyimg);

  invisibleGround=createSprite(300, 580, 1500, 10)
  invisibleGround.visible=false

  rockGroup = new Group();

}

function draw() {

  background('black');

  
  if (bg.x < 500) {
    bg.x = bg.width;
  }
  if(keyDown('space') && boy.y>500) {
    boy.velocityY = -15;
  }
  boy.velocityY += 0.8;

  boy.collide(invisibleGround)
  spwanObstacles();
  drawSprites();

}

function spwanObstacles() {
  if(frameCount%130===0) {
    rock = createSprite(1100,invisibleGround.y-30,20,20);
    rock.addImage(rockImg);
    rock.scale = 0.3;
    rock.velocityX = -7;
    rock.lifetime = 300;
    rockGroup.add(rock)
  }

}