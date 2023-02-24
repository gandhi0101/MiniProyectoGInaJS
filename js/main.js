class animal {
    name;
    sound;
    ctx;
    width;
    height;
    constructor(name,ctx,width,height){
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.name = name;
      console.log(`${this.name}`)
      
    }
  }
  
const Leon = new animal('leon',00,0,0);
