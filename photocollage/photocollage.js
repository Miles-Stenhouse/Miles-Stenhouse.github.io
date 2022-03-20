var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6856.JPG');
  img2 = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6865.JPG');
  img3 = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6893.JPG');
  img4 = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6896.JPG');
  img5 = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6918.JPG');
  img6 = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6920.JPG');
  img7 = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6925.JPG');  
  img8 = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6931.JPG');
  img9 = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6932.JPG');
  img10 = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6956.JPG');
  img11 = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6971.JPG');
  img12 = loadImage('https://miles-stenhouse.github.io/diyps2021/IMG_6999.JPG');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
      img.resize(300, 200); 
      
    image(img, mouseX, mouseY);
  
   
    
  } else if (toolChoice == '2') { // second tool

      img2.resize(300, 200); 
      
    image(img2, mouseX, mouseY);
  ;
  } else if (toolChoice == '3') { // third tool

      img3.resize(300, 200); 
      
    image(img3, mouseX, mouseY);
  
  } else if (toolChoice == '4') {

      img4.resize(300, 200); 
      
    image(img4, mouseX, mouseY);
  
  } else if (key == '5') { // this tool calls a function
      img5.resize(300, 200); 
      
    image(img5, mouseX, mouseY);
  
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {
      img6.resize(300, 200); 
      
    image(img6, mouseX, mouseY);
  
  } else if (toolChoice == '7') {

      img7.resize(300, 200); 
      
    image(img7, mouseX, mouseY);
  
  } else if (toolChoice == '8') {

      img8.resize(300, 200); 
      
    image(img8, mouseX, mouseY);
  
  } else if (toolChoice == '9') {

      img9.resize(300, 200); 
      
    image9(img, mouseX, mouseY);
  
  } else if (toolChoice == '0') {
      img10.resize(300, 200); 
      
    image(img10, mouseX, mouseY);
  
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded

      img11.resize(300, 200); 
      
    image(img11, mouseX, mouseY);
  
  

  }else if (toolChoice == 'j' || toolChoice == 'J') { // g places the image we pre-loaded
    
     img12.resize(300, 200); 
     
    image(img12, mouseX, mouseY);
   
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
