
var lil_guys = [];
var num_guys= 90;
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


  for (var i = 0; i<num_guys;i++){
    lil_guys[i] = new lil_guy(random(0,w),random(0,h),6,3,1);
  }

}


function draw() {

  //ellipse(mouseX,mouseY, 5,5);
  background(265, 16, 32);
  for (var i = 0; i<lil_guys.length;i++){
    lil_guys[i].move();
    lil_guys[i].display();
  }

}


function lil_guy(StartX, StartY, Size, Speed, Type) {
  this.x = StartX;
  this.y = StartY;
  this.sz = Size;
  this.sp = Speed;
  this.t = Type;

  this.display = function(){
    fill(82, 39, 54);
    ellipse(this.x, this.y, this.sz, this.sz);
  }


  this.move = function(){
/////////////////////////------------cursor------------------------\\\\\\\\\\\\\\\\\\\\\\\\\\
    hl = sqrt(sq(mouseX-this.x)+sq(mouseY-this.y));
    vx = (mouseX-this.x)/ hl;
    vy = (mouseY-this.y)/ hl;
/////////////////////////------------avodiance------------------------\\\\\\\\\\\\\\\\\\\\\\\\\\
    ax = 0;
    ay = 0;
    for (var i = 0; i<lil_guys.length;i++){

      var separation = this.sz*3
      var dis = sqrt(   sq(lil_guys[i].x-this.x)  +  sq(lil_guys[i].y-this.y)  )
      if (   dis  < separation && dis != 0  ){
        ax+=((lil_guys[i].x-this.x)/dis)*-4;
        ay+=((lil_guys[i].y-this.y)/dis)*-4;
      }
    }
/////////////////////////------------move------------------------\\\\\\\\\\\\\\\\\\\\\\\\\\
    this.x = (this.x + vx + ax);
    this.y = (this.y + vy + ay);
    //this.x = (this.x  + ax);
    //this.y = (this.y  + ay);
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
