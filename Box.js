class Block
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution: 0.8,
			friction: 0
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var RoofPos=this.body.position;		
			var angle = this.body.angle;

			push()
			translate(RoofPos.x, RoofPos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			//fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}