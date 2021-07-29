var SERVE=0;
var PLAY=1;
var END=2;
var WIN=3;
var gameState=0;

var bg;
var player, playerImg;
var block1, block2, block3, block4, blockImg;
var closedChest, closedChestImg, openChest, openChestImg;
var snake1, snake2, snake3, snake4, snake5, snake6, snake7, snake8, snake9, snake10, snakeImg;
var snake11, snake12, snake13, snake14, snake15, snake16, snake17, snake18, snake19, snake20, snake21, snake22;
var nextB, nextBImg;

var movingB, stableB;

function preload()
{
	bg = loadImage("bg.jpg");
	blockImg = loadImage("blocks.png");
  snakeImg = loadImage("snake.png");
  closedChestImg = loadImage("closedChest.png")
  openChestImg = loadImage("openChest.png");
  playerImg = loadImage("player.png");
}

function setup() {
  createCanvas(800, 600);

  
}


function draw() {

  background(bg);
  
  drawSprites();

  if(gameState===0){
   
    if(mousePressedOver(closedChest)){
      gameState=1;
    }

    block1 = createSprite(255, 222, 20, 20);
    block1.addImage("1", blockImg);  
    block1.scale=0.95;
    //block1.remove();
  
    block2 = createSprite(468, 220, 20, 20);
    block2.addImage("2", blockImg);  
    block2.scale=0.95;
    //block2.remove();
  
    block3 = createSprite(255, 434, 20, 20);
    block3.addImage("3", blockImg);  
    block3.scale=0.95;
    //block3.remove();
  
    block4 = createSprite(468, 434, 20, 20);
    block4.addImage("4", blockImg);  
    block4.scale=0.95;
    //block4.remove();
  
    closedChest = createSprite(380, 50, 20, 20);
    closedChest.addImage("CChest",  closedChestImg);
    closedChest.scale=0.2;
  
    snake1 = createSprite(175, 140, 20, 20);
    snake1.addImage("1S", snakeImg);
    snake1.scale=0.1;
    snake1.remove();
  
    snake2 = createSprite(280, 513, 20, 20);
    snake2.addImage("2S", snakeImg);
    snake2.scale=0.1;
    snake2.remove();
  
    snake3 = createSprite(230, 459, 20, 20);
    snake3.addImage("3S", snakeImg);
    snake3.scale=0.1;
    snake3.remove();
  
    snake4 = createSprite(175, 353, 20, 20);
    snake4.addImage("4S", snakeImg);
    snake4.scale=0.1;
    snake4.remove();
  
    snake5 = createSprite(280, 410, 20, 20);
    snake5.addImage("5S", snakeImg);
    snake5.scale=0.1;
    snake5.remove();
  
    snake6 = createSprite(280, 352, 20, 20);
    snake6.addImage("6S", snakeImg);
    snake6.scale=0.1;
    snake6.remove();
  
    snake7 = createSprite(230, 249, 20, 20);
    snake7.addImage("7S", snakeImg);
    snake7.scale=0.1;
    snake7.remove();
  
    snake8 = createSprite(280, 192, 20, 20);
    snake8.addImage("8S", snakeImg);
    snake8.scale=0.1;
    snake8.remove();
  
    snake9 = createSprite(332, 249, 20, 20);
    snake9.addImage("9S", snakeImg);
    snake9.scale=0.1;
    snake9.remove();
  
    snake10 = createSprite(382, 140, 20, 20);
    snake10.addImage("10S", snakeImg);
    snake10.scale=0.1;
    snake10.remove();
  
    snake11 = createSprite(280, 137, 20, 20);
    snake11.addImage("11S", snakeImg);
    snake11.scale=0.1;
    snake11.remove();
  
    snake12 = createSprite(382, 355, 20, 20);
    snake12.addImage("12S", snakeImg);
    snake12.scale=0.1;
    snake12.remove();
  
    snake13 = createSprite(440, 300, 20, 20);
    snake13.addImage("13S", snakeImg);
    snake13.scale=0.1;
    snake13.remove();
  
    snake14 = createSprite(440, 192, 20, 20);
    snake14.addImage("14S", snakeImg);
    snake14.scale=0.1;
    snake14.remove();
  
    snake15 = createSprite(550, 244, 20, 20);
    snake15.addImage("15S", snakeImg);
    snake15.scale=0.1;
    snake15.remove();
  
    snake16 = createSprite(543, 140, 20, 20);
    snake16.addImage("16S", snakeImg);
    snake16.scale=0.1;
    snake16.remove();
  
    snake17 = createSprite(385, 460, 20, 20);
    snake17.addImage("17S", snakeImg);
    snake17.scale=0.1;
    snake17.remove();
  
    snake18 = createSprite(440, 460, 20, 20);
    snake18.addImage("18S", snakeImg);
    snake18.scale=0.1;
    snake18.remove();
  
    snake19 = createSprite(440, 408, 20, 20);
    snake19.addImage("19S", snakeImg);
    snake19.scale=0.1;
    snake19.remove();
  
    snake20 = createSprite(543, 514, 20, 20);
    snake20.addImage("20S", snakeImg);
    snake20.scale=0.1;
    snake20.remove();
  
    snake21 = createSprite(495, 408, 20, 20);
    snake21.addImage("21S", snakeImg);
    snake21.scale=0.1;
    snake21.remove();
  
    snake22 = createSprite(545, 301, 20, 20);
    snake22.addImage("22S", snakeImg);
    snake22.scale=0.1;
    snake22.remove();

    textSize(20);
    fill("white");
    text("*There are snakes", 10, 50);
    text("collect the treasure without touching them", 20, 70);
    text("*Click on the treasure to see the snakes", 10, 110);
  }
 
  if(gameState===1){

    textSize(20);
    fill("white");
    text("*Click on the treasure again to hide the snakes and start playing the game", 10, 90);

    block1 = createSprite(255, 222, 20, 20);
    block1.addImage("1", blockImg);  
    block1.scale=0.95;
  
    block2 = createSprite(468, 220, 20, 20);
    block2.addImage("2", blockImg);  
    block2.scale=0.95;
  
    block3 = createSprite(255, 434, 20, 20);
    block3.addImage("3", blockImg);  
    block3.scale=0.95;
  
    block4 = createSprite(468, 434, 20, 20);
    block4.addImage("4", blockImg);  
    block4.scale=0.95;
  
    closedChest = createSprite(380, 50, 20, 20);
    closedChest.addImage("CChest",  closedChestImg);
    closedChest.scale=0.2;
  
    snake1 = createSprite(175, 140, 20, 20);
    snake1.addImage("1S", snakeImg);
    snake1.scale=0.1;
    //snake1.remove();
  
    snake2 = createSprite(280, 513, 20, 20);
    snake2.addImage("2S", snakeImg);
    snake2.scale=0.1;
   // snake2.remove();
  
    snake3 = createSprite(230, 459, 20, 20);
    snake3.addImage("3S", snakeImg);
    snake3.scale=0.1;
   // snake3.remove();
  
    snake4 = createSprite(175, 353, 20, 20);
    snake4.addImage("4S", snakeImg);
    snake4.scale=0.1;
    //snake4.remove();
  
    snake5 = createSprite(280, 410, 20, 20);
    snake5.addImage("5S", snakeImg);
    snake5.scale=0.1;
   // snake5.remove();
  
    snake6 = createSprite(280, 352, 20, 20);
    snake6.addImage("6S", snakeImg);
    snake6.scale=0.1;
    //snake6.remove();
  
    snake7 = createSprite(230, 249, 20, 20);
    snake7.addImage("7S", snakeImg);
    snake7.scale=0.1;
    //snake7.remove();
  
    snake8 = createSprite(280, 192, 20, 20);
    snake8.addImage("8S", snakeImg);
    snake8.scale=0.1;
    //snake8.remove();
  
    snake9 = createSprite(332, 249, 20, 20);
    snake9.addImage("9S", snakeImg);
    snake9.scale=0.1;
    //snake9.remove();
  
    snake10 = createSprite(382, 140, 20, 20);
    snake10.addImage("10S", snakeImg);
    snake10.scale=0.1;
    //snake10.remove();
  
    snake11 = createSprite(280, 137, 20, 20);
    snake11.addImage("11S", snakeImg);
    snake11.scale=0.1;
    //snake11.remove();
  
    snake12 = createSprite(382, 355, 20, 20);
    snake12.addImage("12S", snakeImg);
    snake12.scale=0.1;
    //snake12.remove();
  
    snake13 = createSprite(440, 300, 20, 20);
    snake13.addImage("13S", snakeImg);
    snake13.scale=0.1;
    //snake13.remove();
  
    snake14 = createSprite(440, 192, 20, 20);
    snake14.addImage("14S", snakeImg);
    snake14.scale=0.1;
    //snake14.remove();
  
    snake15 = createSprite(550, 244, 20, 20);
    snake15.addImage("15S", snakeImg);
    snake15.scale=0.1;
    //snake15.remove();
  
    snake16 = createSprite(543, 140, 20, 20);
    snake16.addImage("16S", snakeImg);
    snake16.scale=0.1;
    //snake16.remove();
  
    snake17 = createSprite(385, 460, 20, 20);
    snake17.addImage("17S", snakeImg);
    snake17.scale=0.1;
    //snake17.remove();
  
    snake18 = createSprite(440, 460, 20, 20);
    snake18.addImage("18S", snakeImg);
    snake18.scale=0.1;
    //snake18.remove();
  
    snake19 = createSprite(440, 408, 20, 20);
    snake19.addImage("19S", snakeImg);
    snake19.scale=0.1;
    //snake19.remove();
  
    snake20 = createSprite(543, 514, 20, 20);
    snake20.addImage("20S", snakeImg);
    snake20.scale=0.1;
    //snake20.remove();
  
    snake21 = createSprite(495, 408, 20, 20);
    snake21.addImage("21S", snakeImg);
    snake21.scale=0.1;
    //snake21.remove();
  
    snake22 = createSprite(545, 301, 20, 20);
    snake22.addImage("22S", snakeImg);
    snake22.scale=0.1;
    //snake22.remove();

    
  }
}


