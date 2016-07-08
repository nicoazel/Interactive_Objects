
var lil_guys = [];
var num_lil_guys = 100;

var player = [];
//////////////////////////////////////

var w = 600;
var h = 600;

var millisec;

function setup() {
  print("strting...")
  var canvas = createCanvas(w, h);
  canvas.parent('sketch-holder');

  millisec = millis();
  //pause = new Game_Menu();
  frameRate(60);
  colorMode(HSB);
  background(265, 16, 32);


  for (var i = 0; i<10;i++){
    lil_guys[i] = new lil_guy(random(0,w),random(0,h),6,3,1);
  }

}


function draw() {

  //ellipse(mouseX,mouseY, 5,5);
  //background(265, 16, 32);
  for (var i = 0; i<10;i++){
    lil_guys[i].dir();
    lil_guys[i].jump();
    //lil_guys[i].avoid(lil_guys, 10);
    lil_guys[i].display();
  }

}


function lil_guy(StartX, StartY, Size, Speed, Type) {
  this.x = StartX;
  this.y = StartY;
  this.sz = Size;
  this.sp = Speed;
  this.t = Type;
  this.vx = 1;
  this.vy = 1;

  this.display = function(){
    fill(82, 39, 54);
    ellipse(this.x, this.y, this.sz, this.sz*4);
  }
  this.dir = function(){
    hl = sqrt(sq(mouseX-this.x)+sq(mouseY-this.y));
    this.vx = (mouseX-this.x)/hl;
    this.vy = (mouseY-this.y)/hl;
  }
  this.jump = function(){
    this.x = this.x+(this.vx*this.sp);
    this.y = this.y+(this.vy*this.sp);
  }
  this.avoid = function(group, group_sz){
    for (var i = 0; i<10;i++){
      if (   (sqrt(sq(mouseX-this.x)+sq(mouseY-this.y))) < this.sz*4   ){

      }
      group[i].x<
      group[i].y

    }

  }

}


function runGame() { ///x,y,startsize , number of steps, length
  this.paused = True;
  this.Run = function() {
      if(this.paused == False){this.play();}
      else{this.menue();}
  }
  this.menue = function(){
  }
}
