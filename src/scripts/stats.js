class Stats{
    constructor(){
        this.scoreHtml=document.getElementById("score")
        this.score=0;
        this.totalDisks=0;
    }

    updateScore(){
        this.scoreHtml.innerText=this.score;
    }
}

export {Stats};