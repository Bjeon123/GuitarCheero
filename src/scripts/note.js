class Note{
    constructor(posX, posY, destinationX,destinationY,color){
        this.posX = posX;
        this.posY = posY;
        this.destinationX= destinationX;
        this.destinationY= destinationY;
        this.color = color
        this.radius=20;
        this.hit=false
        this.accuracy;
        this.deltaY= (this.destinationY - this.posY)/100;
        this.deltaX =(this.destinationX - this.posX)/100;
        this.deltaRadius=(20/42.7)/3;
    }


    moveNote(){
        if(this.posY <700){
            this.posY += this.deltaY;
            this.posX += this.deltaX;
        }
        this.radius += this.deltaRadius;
    }

    draw(ctx) {
        if(this.hit){
            ctx.font = '20px serif';
            ctx.fillStyle = "red";
            ctx.fillText(this.accuracy, this.posX,this.posY)
            this.deltaY=1;
            this.deltaX=0;
        }
        else{
            ctx.beginPath();
            ctx.ellipse(this.posX, this.posY, this.radius, 10, 0, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = "grey";
            ctx.stroke();
        }
    };

}

export { Note } 