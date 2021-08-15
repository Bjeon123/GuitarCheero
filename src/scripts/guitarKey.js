import { keys } from "regenerator-runtime";

class GuitarKey{
    constructor(radius,xPos,yPos,color){
        this.radius=radius;
        this.xPos=xPos;
        this.yPos=yPos;
        this.color=color;
        this.pressed=false
    }


    draw(ctx){
        ctx.beginPath();
        ctx.ellipse(this.xPos, this.yPos, this.radius, 10, 0, 0, 2 * Math.PI)
        if(this.pressed){
            ctx.fillStyle = "white";
            ctx.fill();
        }
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.color;
        ctx.b
        ctx.stroke();
    }

}

export { GuitarKey}