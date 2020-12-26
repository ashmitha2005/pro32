class Polygon{
    constructor(x, y, width, height){
        this.body = Bodies.circle(x, y,width,height);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height = height;
        this.image= loadImage("polygon.png")
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
image(this.image, polygon.body.position.x, polygon.body.position.y, 40, 40);
    }
}