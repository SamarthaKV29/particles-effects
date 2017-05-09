var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 20;
var txtWidth;
var startX, startY;

context.rect(0, 0, 600, 400);
context.fillStyle = "black"
context.fill();



function drawStroke(rad, x, y) {
  context.beginPath();
  context.arc(x, y, rad, 0, 2 * Math.PI, false);
  op = Math.random();
  colors = ['rgba(255,255,0,' + op + ')', 'rgba(255,0,0,' + op + ')', 'rgba(50,255,30,' + op + ')', 'rgba(0,25,255,' + op + ')', 'rgba(255,255,255,' + op + ')'];
  color = colors[parseInt(Math.random() * colors.length)]
  context.fillStyle = color;
  context.fill();
}

function drawStrokeWhite(rad, x, y, op) {
  context.beginPath();
  context.arc(x, y, rad, 0, 2 * Math.PI, false);
  color = 'rgba(0, 0, 255,'+ op + ')';
  context.fillStyle = color;
  context.fill();
}
function drawStrokeBlack(rad, x, y, op) {
  context.beginPath();
  context.arc(x, y, rad, 0, 2 * Math.PI, false);
  context.fillStyle = "black";
  context.fill();
}

function clearRect() {
  context.rect(0, 0, 600, 400);
  context.fillStyle = "rgba (0, 0, 0, 1) "
  context.fill();
}

clicked = false;
dx = 0, dy = 0;

canvas.onmousedown = (function(event) {
  if (event.button == 0)
    clicked = true;
});
canvas.onmouseup = (function(event) {
  if (clicked)
    clicked = false;
});

function drawText(txt, color, locX, locY) {
  context.font = "48px Times";
  context.fillStyle = color;
  context.fillText(txt, locX, locY);
  txtWidth = context.measureText(txt).width;
}
function drawCoolText(txt){
	var blur = 10;
	var width = ctx.measureText(text).width + blur;

}

function drawAtMouse(e) {
  x = e.pageX;
  y = e.pageY;
  if (clicked) {
    drawStroke(radius, x, y);
  }
}

function drawParticles() {
  for (x = 10; x < 600; x += 20) {

    rad = parseInt(Math.random() * radius);
    locX = Math.random() * 600;
    locY = Math.random() * 400;
    if (x % 0 == 0) //blackout control
      clearRect();
    drawStroke(rad, locX, locY);
  }
}

function drawSnow() {
  //original drawSnow
  radius = 3 //Snow Radius
  for (x = 10; x < 600; x += 20) {
    locX = Math.random() * 600;
    locY = Math.random() * 400;
    if (x % 2 == 0) //blackout control
      clearRect();

    drawStrokeWhite(radius, locX, locY, 1);
  }
}

function drawBlacks() {
	startX = parseInt(centerX - txtWidth/2);
  endX = parseInt(centerX + txtWidth/2);
  locX = parseInt(Math.random() * centerX);
  locY = parseInt(Math.random() * 48);
  for (x = startX; x < endX; x += 1) {
    drawStrokeBlack(5, x, 140 + locY * 2, 0.4);
  }
}

canvas.onmousemove = (function(event) {
  //drawAtMouse(event);
  x = e.pageX;
  y = e.pageY;
});
snowing = setInterval(function() {
    context.textAlign = "center";
    drawParticles();
    //drawBlacks();
    drawText("LIGHTS", "black", centerX, centerY);

  }, 20); //speed
setTimeout(function() {
  clearInterval(snowing)
}, 10000); //Chnage this to thousands
