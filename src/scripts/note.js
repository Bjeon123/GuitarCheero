class Note{
    constructor(posX, posY, destinationX,destinationY,color){
        this.posX = posX;
        this.posY = posY;
        this.destinationX= destinationX;
        this.destinationY= destinationY;
        this.color = color
        this.radius=20;
        this.hit=false
        this.deltaY= (this.destinationY - this.posY)/100;
        this.deltaX =(this.destinationX - this.posX)/100;
        this.deltaRadius=(20/42.7)/3.5;
    }


    moveNote(){
        if(this.posY <700){
            this.posY += this.deltaY;
            this.posX += this.deltaX;
        }
        this.radius += this.deltaRadius;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.ellipse(this.posX, this.posY, this.radius, 10, 0, 0, 2 * Math.PI);
        ctx.fillStyle=this.color;
        ctx.fill();
        ctx.strokeStyle = "grey";
        ctx.stroke();
    };

}

export { Note } 