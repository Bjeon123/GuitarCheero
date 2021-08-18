class Stats{
    constructor(){
        this.score=0;
        this.totalDisks=0;
        this.totalPerfect=0
        this.totalNice=0
        this.totalMissed=0;
    }

    addScoreToCanvas(ctx) {
        ctx.font = "30px Luminari";
        ctx.fillStyle = "white";
        ctx.fillText("Score: "+this.score, 450, 50)
    }

}

export {Stats};