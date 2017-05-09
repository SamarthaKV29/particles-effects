var canvas = document.getElementById('myCanvas2');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 20;
var txtWidth;
var startX, startY;
var vel = 0;
var g = 9.8;
var dist = 0;
var t = 1;

context.rect(0, 0, 600, 400);
context.fillStyle = "black"
context.fill();

function drawStrokeBlack(x, y, op) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "white";
  context.fill();
  context.closePath();
}
function clearRect() {
  context.rect(0, 0, 600, 400);
  context.fillStyle = "black";
  context.fill();
}

function update(){
  dist = vel*t + 0.5*g*t;
  vel = vel + g*t;
  clearRect();
  if(centerY+dist > 400){
    dist = 0;
    vel = 0;
  }
  drawStrokeBlack(centerX, centerY+dist);
}

drawStrokeBlack(centerX, centerY);


setInterval(update, t*10);
