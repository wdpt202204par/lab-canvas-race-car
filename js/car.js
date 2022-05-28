class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      // TODO
      this.w=100;
      this.h=this.w/imgRatio;


    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) {return}
    else{
      ctx.drawImage(this.img,450,1300,this.w, this.h);
      console.log('coucou');
    }
    // if `this.img` is not loaded yet => don't draw
    
    // TODO
  }

  moveLeft() {
    // TODO
  }
  moveRight() {
    // TODO
  }
}