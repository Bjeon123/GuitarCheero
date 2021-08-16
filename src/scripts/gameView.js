import { GuitarKey } from './guitarKey';
class GameView{
    constructor(game,ctx){
        this.game=game;
        this.ctx=ctx;
        this.setStaticKeys();
        this.setupBinds();
        this.song=require("../song_scripts/song1.json");
        this.start();
    }

    static KEYS = {

    }

    setStaticKeys() {
        const keys = ["a", "s", "d", "j", "k"]
        for (let i = 0; i < 5; i++) {
            GameView.KEYS[keys[i]] = this.game.keys[i];
        }
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

    start(){
        for(const note in this.song) {
            if (Array.isArray(this.song[note])){
                for (let i = 0; i < this.song[note].length;i++){
                    setTimeout(
                        function () {
                            this.game.makeNotes(this.song[note][i])
                        }.bind(this), + parseInt(note)
                    )
                }
            }
            else{
                setTimeout(
                    function(){
                        this.game.makeNotes(this.song[note])
                    }.bind(this), 0+ parseInt(note)
                )
            }
        }
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(){
        this.game.draw(this.ctx);
        this.game.step();
        requestAnimationFrame(this.animate.bind(this));
    };


}

export {GameView}