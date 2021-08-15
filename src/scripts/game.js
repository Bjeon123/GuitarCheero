import {Note} from "./note"
import {GuitarKey} from "./guitarKey"

class Game{
    constructor() {
        this.notes=[];
        this.keys=[];
        this.makeGuitarKeys();
    }

    static DIM_X = 600;
    static DIM_Y = 700;
    static radius = Game.DIM_X/14;
    static FPS= 32;
    static numNotes=100;
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

    add(object) {
        if (object instanceof Note) {
            this.notes.push(object);
        } else if (object instanceof GuitarKey) {
            this.keys.push(object);
        } else {
            throw new Error("unknown type of object");
        }
    };

    addNotes() {
        for (let i = 0; i < Game.numNotes; i++) {
            this.add(new Asteroid({ game: this }));
        }
    };

    allObjects(){
        return [].concat(this.notes, this.keys);
    };

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

        this.allObjects().forEach(function (object) {
            object.draw(ctx);
        });
    };

    step() {
        // this.moveObjects();
        // this.checkCollisions();
    };

}

export {Game}