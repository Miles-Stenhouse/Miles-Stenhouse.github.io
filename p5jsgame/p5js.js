var ballx = 300;
var bally = 300;
var ballSize = 70;
var score =0;
var gameState= "L1";

function preload() {
 img1 = loadImage('https://miles-stenhouse.github.io/p5jsgame/fly.png');
    img2 = loadImage('https://miles-stenhouse.github.io/p5jsgame/cow.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(img2);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  image(img1, ballx, bally, ballSize, ballSize);
 line(ballx, bally, mouseX, mouseY);
  
} // end level one

function levelTwo(){
  background(img2);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";
  }
  
  image(img1, ballx, bally, ballSize, ballSize);
 // line(ballx, bally, mouseX, mouseY);
 
} // end level two

function levelThree(){
    background(img2);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>15){
// level 4
//   gameState = "L4";
   

  }
  
// line(ballx, bally, mouseX, mouseY);
  image( img1, ballx, bally, ballSize, ballSize);
} // end level thre
