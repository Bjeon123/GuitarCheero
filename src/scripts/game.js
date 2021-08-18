import {Note} from "./note"
import {GuitarKey} from "./guitarKey"
import {Stats} from './stats';
import {NoteResult} from "./noteResult";

class Game{
    constructor() {
        this.notes=[];
        this.noteResults=[];
        this.keys=[];
        this.stats = new Stats();
        this.makeGuitarKeys();
    }

    static DIM_X = 600;
    static DIM_Y = 700;
    static radius = Game.DIM_X/14;

    static POSITIONS = {
        "green": [180, 100],
        "red": [240, 100],
        "yellow": [300, 100],
        "blue": [360, 100],
        "orange": [420, 100]
    }
    
    static DESTINATION = {
        "green": [85.71428571428571, 600],
        "red": [192.85714285714283, 600],
        "yellow": [300, 600],
        "blue": [407.14285714285717, 600],
        "orange": [514.2857142857142, 600]
    }

    static COLORS = {
        0: "green",
        1: "red",
        2: "yellow",
        3: "blue",
        4: "orange"
    }

    makeGuitarKeys() {
        for (let i = 0; i < 5; i++) {
            const key = new GuitarKey(Game.radius, 2 * Game.radius + Game.radius * 2.5 * i, 600, Game.COLORS[i])
            this.keys.push(key);
        }
    }

    makeNotes(color){
        this.notes.push(new Note(Game.POSITIONS[color][0], Game.POSITIONS[color][1], Game.DESTINATION[color][0], Game.DESTINATION[color][1],color));
        this.stats.totalDisks+=1;
    }

    allObjects(){
        return [].concat(this.notes, this.keys,this.noteResults);
    };

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.allObjects().forEach(function (object) {
            object.draw(ctx);
        });
        this.stats.addScoreToCanvas(ctx);
    };

    moveNotes(){
        this.notes.forEach(function(note){
            note.moveNote();
        })
    }

    checkCollisions(){
        for (let i = 0; i < 5; i++) {
           for(let j=0;j<this.notes.length;j++){
               if(this.keys[i].color===this.notes[j].color){
                   let diffX = this.keys[i].xPos - this.notes[j].posX;
                   let diffY = this.keys[i].yPos - this.notes[j].posY;
                   if (diffY > -1*(this.keys[i].radius/2) && diffY<this.keys[i].radius/2 && this.keys[i].pressed){
                       if(diffY < 15){
                           this.notes[j].hit = true;
                           this.deleteNotes(j, "perfect")
                           this.stats.totalPerfect+=1;
                           this.stats.score += 2;
                       }
                       else{
                           this.notes[j].hit = true;
                           this.deleteNotes(j, "nice")
                           this.stats.totalNice+=1;
                           this.stats.score += 1;
                       }
                   }
                   else if (diffY <= -1 * (this.keys[i].radius / 2)){
                       this.stats.totalMissed+=1;
                       this.notes.splice(j,1)
                   }
               }
           }
        }
    }

    deleteNotes(noteIndex,accuracy){
        const color = this.notes[noteIndex].color;
        this.notes.splice(noteIndex, 1);
        const noteResult = new NoteResult(accuracy,Game.DESTINATION[color][0], 300);
        this.noteResults.push(noteResult);
        let arrCopy=this.noteResults;
        setTimeout(function(){
            arrCopy.shift();
        },500)
    }

    step() {
        this.checkCollisions();
        this.moveNotes();
    };

}

export {Game}