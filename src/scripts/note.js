class Note{
    constructor(posX,posY,radius,velocity,color,ctx){
        this.posX=posX;
        this.posY=posY;
        this.radius=radius;
        this.velocity=velocity;
        this.color=color
        this.draw(ctx);
    }

    moveNote(){
        this.posY-=this.velocity;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.ellipse(this.xPos, this.yPos, this.radius, 10, 0, 0, 2 * Math.PI)
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke();
        console.log(this);
    };

}

export { Note } 