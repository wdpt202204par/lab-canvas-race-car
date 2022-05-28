let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(0,0,100,1600);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "grey";
  ctx.fillRect(100,0,25,1600);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(125,0,25,1600);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "grey";
  ctx.fillRect(150,0,700,1600);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(850,0,25,1600);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "grey";
  ctx.fillRect(875,0,25,1600);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(900,0,100,1600);
  ctx.fill();
  ctx.closePath();

  let yHeigth=50
  let gapHeight=50

  for(let i =0;i<16;i++){
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.fillRect(490,0+(gapHeight+yHeigth)*i,20,yHeigth)
    ctx.fill()
    ctx.closePath()
  }
  //

  // TODO

  //
  // Iteration 2: car drawing
  car.draw()
  //

  // TODO

  //
  // Iteration #4: obstacles
  //
  obstacle.draw()
  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  console.log("key=",e.key)
  if (!car) return;
  else if(e.key==="ArrowLeft"){
    car.moveLeft()
  }
  else if(e.key==="ArrowRight"){
    car.moveRight()
  }
  // TODO
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
else{
  car=new Car
  obstacle=new Obstacle
}
  // TODO

  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
