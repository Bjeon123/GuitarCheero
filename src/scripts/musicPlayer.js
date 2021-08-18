class MusicPlayer{
    constructor(song){
        this.audio = new Audio(`src/assets/songs/${song}.mp3`);
        document.getElementById("game-canvas").appendChild(this.audio);
        this.stopped=false;
    }

    play(){
        this.audio.play();
    }

    stop(){
        this.stopped=true;
        this.audio.pause();
        this.audio.currentTime=0;
    }
}

export{MusicPlayer}
