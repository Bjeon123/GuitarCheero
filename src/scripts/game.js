import {Note} from "./note"
import {GuitarKey} from "./guitarKey"

class Game{
    constructor() {
        this.notes=[];
        this.keys=[];
        this.makeGuitarKeys();
        this.makeNotes();
    }

    static DIM_X = 600;
    static DIM_Y = 700;
    static radius = Game.DIM_X/14;
    static POSITIONS = {
        "green": [85.71428571428571, 100],
        "red": [192.8571428571428, 100],
        "yellow": [300, 100],
        "blue": [407.14285714285717, 100],
        "orange": [514.2857142857142, 100]
    }
    static numNotes=5;
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

    makeNotes(){
        console.log(1);
        for(let i=0;i<5;i++){
            const rndInt = Math.round(Math.random() * 5);
            const randomColor=Game.COLORS[rndInt];
            this.notes.push(new Note(Game.POSITIONS[randomColor][0], Game.POSITIONS[randomColor][1],randomColor))
        }
    }

    allObjects(){
        return [].concat(this.notes, this.keys);
    };

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.allObjects().forEach(function (object) {
            object.draw(ctx);
        });
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
                   if(diffY<this.keys[i].radius/2 && this.keys[i].pressed){
                       this.notes.splice(j,1);
                   }
               }
           }
        }
    }

    step() {
        this.checkCollisions();
        this.moveNotes();
    };

}

export {Game}