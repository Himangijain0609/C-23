class Ball{
    constructor(x,y,radius){
        var options ={
            restitution: 1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

         this.radius=radius
    }
    display(){
        ellipseMode(RADIUS);
        circle(this.body.position.x,this.body.position.y,this.radius);
    }
}