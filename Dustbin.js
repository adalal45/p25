class Dustbin {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      restitution: 0.8,
      friction: 1,
      density: 1,
    };
    this.thickness = 20;
    this.bbody = Bodies.rectangle(x, y, width, this.thickness, options);
    this.lbody = Bodies.rectangle(
      x - width / 2,
      y - height / 2,
      this.thickness,
      height,
      options
    );
    this.rbody = Bodies.rectangle(
      x + width / 2,
      y - height / 2,
      this.thickness,
      height,
      options
    );
    this.width = width;
    this.height = height;
    World.add(world, this.bbody);
    World.add(world, this.rbody);
    World.add(world, this.lbody);
    this.image = loadImage("dustbingreen.png");
  }
  display() {
    var bpos = this.bbody.position;
    var rpos = this.rbody.position;
    var lpos = this.lbody.position;
    image(this.image, 0, 0, width, height);
  }
}
