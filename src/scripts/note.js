class Note{
    constructor(posX,posY,color){
        this.posX = posX;
        this.posY = posY;
        this.velocity=1;
        this.color=color
    }


    moveNote(){
        if(this.posY <700){
            this.posY += this.velocity;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.ellipse(this.posX, this.posY, 42, 10, 0, 0, 2 * Math.PI);
        // ctx.fillStyle = this.color;
        // ctx.fill();
        // ctx.strokeStyle = "white";
        // ctx.stroke();
        // ctx.beginPath();
        // ctx.arc(this.posX, this.posY, 42.857142857142854, 0, 2 * Math.PI);
        ctx.fillStyle=this.color;
        ctx.fill();
        ctx.strokeStyle = "grey";
        ctx.stroke();
    };

}

export { Note } 