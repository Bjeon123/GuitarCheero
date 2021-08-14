import { keys } from "regenerator-runtime";

class GuitarKey{
    constructor(radius,xPos,yPos,color){
        this.radius=radius;
        this.xPos=xPos;
        this.yPos=yPos;
        this.color=color;
    }


    draw(ctx){
        ctx.beginPath();
        ctx.ellipse(this.xPos, this.yPos, this.radius, 10, 0, 0, 2 * Math.PI)
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle="white";
        ctx.stroke();
    }

    pressed(){
        console.log("pressed "+this.color);
    }

}

export { GuitarKey}