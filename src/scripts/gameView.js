import { GuitarKey } from './guitarKey';

class GameView{
    constructor(radius,ctx){
        this.radius=radius;
        this.ctx=ctx;
        this.guitarkeys = [];
        this.makeGuitarKeys();
        this.setStaticKeys();
        this.setupBinds();
    }

    static KEYS = {

    }

    setStaticKeys(){
        const keys =["a","s","d","f","g"]
        for(let i=0;i<this.guitarkeys.length;i++){
            GameView.KEYS[keys[i]]=this.guitarkeys[i];
        }
        console.log(GameView.KEYS);
    }

    setupBinds(){
        window.addEventListener("keydown", function(e){
            if(GameView.KEYS[e.key]){
                GameView.KEYS[e.key].pressed();
            }
        });
    }

    static COLORS={
        0: "green",
        1: "red",
        2: "yellow",
        3: "blue",
        4: "orange"
    }

    makeGuitarKeys(){
        const colors=["green","red","yellow","blue","orange"]
        for (let i = 0; i < 5; i++) {
            const key = new GuitarKey(this.radius, 2 * this.radius + this.radius * 2.5 * i, 600, GameView.COLORS[i])
            this.guitarkeys.push(key);
            key.draw(this.ctx);
        }
    }



}

export {GameView}