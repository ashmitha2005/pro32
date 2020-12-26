class Box{
  constructor(x, y, width, height ) {
      var options = {
         
          friction:0.8,
          restitution:0.8,
          density:1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      stroke("black");
      if(this.body.speed<3){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
      }else{
        World.remove(world, this.body);
        push();
        tint(255, this.visibility);
        this.visibility= this.visibility-5;
        pop();
      }
     

    }
    score(){
      if(this.visibility <0 && this.visibility >-105){
        score++;

      }
    }
}