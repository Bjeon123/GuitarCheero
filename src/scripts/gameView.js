import {renderEnd} from "../screens/endGameScreen"

class GameView{
    constructor(game,ctx,musicPlayer,songTitle){
        this.game=game;
        this.ctx=ctx;
        this.setStaticKeys();
        this.setupBinds();
        const formattedSongTitle=songTitle.split(" ").join("_");
        this.song=require(`../song_scripts/${formattedSongTitle}.json`);
        this.gameRequest;
        this.musicPlayer=musicPlayer;
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
            if (GameView.KEYS[e.key] && GameView.KEYS) {
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
                        }.bind(this), 0 + parseInt(note)
                    )
                }
            }
            else{
                setTimeout(
                    function(){
                        this.game.makeNotes(this.song[note])
                    }.bind(this), 0 + parseInt(note)
                )
            }
        }
        this.gameRequest=this.animate();
    }

    animate(){
        this.game.draw(this.ctx);
        this.game.step();
        if (this.musicPlayer.audio.currentTime > 5 && this.game.notes.length===0){
            cancelAnimationFrame(this.gameRequest);
            setTimeout(function(){
                this.musicPlayer.stop();
                return renderEnd(this.game.stats);
            }.bind(this),1000)
        }
        else if(this.musicPlayer.stopped){
            this.musicPlayer.stop();
            return;
        }
        requestAnimationFrame(this.animate.bind(this));
    };


}

export {GameView}