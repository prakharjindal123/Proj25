class Paper {
    constructor(x, y,radius) {
      var options = {
          //isStatic:true,
          'restitution':0.8,
          'friction':1,
          'density':1.2
        
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      this.image = loadImage("Paper.png");
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      fill("pink");
    imageMode(CENTER)
    image(this.image,0,0,40,40)
      pop();
    }
  };