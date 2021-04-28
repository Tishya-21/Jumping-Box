var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(95,580,190,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,190,30);
    block2.shapeColor = "pink";

    block3 = createSprite(495,580,190,30);
    block3.shapeColor = "black";

    block4 = createSprite(695,580,190,30);
    block4.shapeColor = "orange";

    ball = createSprite(400,20,20,20);
    ball.shapeColor = "white";
    ball.velocityX=6;
    ball.velocityY=8;
    
}

function draw() {
    background(rgb(169,169,169));
   edges = createEdgeSprites();
   ball.bounceOff(edges);

   if(block1.isTouching(ball) && ball.bounceOff(block1)){
       ball.shapeColor = block1.shapeColor;
       music.play();
   }
   if(block2.isTouching(ball) && ball.bounceOff(block2)){
    ball.shapeColor = block2.shapeColor;
    music.play();
}
    if(block3.isTouching(ball)){
    ball.shapeColor = block3.shapeColor;
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
}
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
    ball.shapeColor = block4.shapeColor;
    music.play();
}

    drawSprites();

    //add condition to check if box touching surface and make it box
}
