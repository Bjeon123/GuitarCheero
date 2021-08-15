import { GuitarKey } from './guitarKey';

class GameView{
    constructor(game,ctx){
        this.game=game;
        this.ctx=ctx;
        this.setStaticKeys();
        this.setupBinds();
        this.animate();
        console.log(this.game.keys)
    }

    static KEYS = {

    }

    setStaticKeys() {
        const keys = ["a", "s", "d", "j", "k"]
        for (let i = 0; i < 5; i++) {
            GameView.KEYS[keys[i]] = this.game.keys[i];
        }
        console.log(GameView.KEYS);
    }

    setupBinds() {
        window.addEventListener("keydown", function (e) {
            if (GameView.KEYS[e.key]) {
                GameView.KEYS[e.key].pressed=true;
            }
        });
        window.addEventListener("keyup", function (e) {
            if (GameView.KEYS[e.key]) {
                GameView.KEYS[e.key].pressed=false;
            }
        });
    }

    animate() {
        this.game.step();
        this.game.draw(this.ctx);

        // every call to animate requests causes another call to animate
        requestAnimationFrame(this.animate.bind(this));
    };

    // static COLORS={
    //     0: "green",
    //     1: "red",
    //     2: "yellow",
    //     3: "blue",
    //     4: "orange"
    // }

    // makeGuitarKeys(){
    //     const colors=["green","red","yellow","blue","orange"]
    //     for (let i = 0; i < 5; i++) {
    //         const key = new GuitarKey(this.radius, 2 * this.radius + this.radius * 2.5 * i, 600, GameView.COLORS[i])
    //         this.guitarkeys.push(key);
    //     }
    // }

}

export {GameView}