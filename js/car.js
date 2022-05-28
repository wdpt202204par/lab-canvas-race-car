class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      // TODO
      this.w=100;
      this.h=this.w/imgRatio;
      this.x=450

    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) {return}
    else{
      ctx.drawImage(this.img,this.x,1300,this.w, this.h);
    }
    // if `this.img` is not loaded yet => don't draw
    
    // TODO
  }

  moveLeft() {
    this.x-=10
  }
  moveRight() {
    this.x +=10
  }
}