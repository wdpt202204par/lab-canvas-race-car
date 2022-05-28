


function random(from, to) {
  // TODO
  
  return Math.floor(Math.random()*(to-from)+from)

}

class Obstacle {
  constructor() {
    // TODO
    let maxW=500;
    let minW=-500;
    let minX;
    let maxX=500;
    if (minW>0){
    minX= 150;
   
   
    }if (minW<0){
       minX=850;
  
    }

    this.w=random(minW,maxW);
    this.h= 50;

    this.x=random(minX,maxX);
    this.y=0;
  
  }

  draw() {
    // TODO
    
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(this.x,this.y,this.w,this.h);
    ctx.fill();
    ctx.closePath();
    this.y++

  }

  hits(car) {
    // TODO
  }
}