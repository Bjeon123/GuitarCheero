class NoteResult{

    constructor(accuracy,xPos,yPos){
        this.accuracy=accuracy;
        this.xPos=xPos;
        this.yPos=yPos;
        this.perfectNoteImg= document.getElementById("perfect-note");
        this.niceNoteImg= document.getElementById("nice-note");
    }

    draw(ctx){
        if(this.accuracy==="perfect"){
            ctx.drawImage(this.perfectNoteImg, this.xPos-30,600,70,70);
        }
        else{
            ctx.drawImage(this.niceNoteImg, this.xPos-30, 600, 70, 70);
        }
    }
}

export {NoteResult}