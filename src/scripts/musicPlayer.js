class MusicPlayer{
    constructor(){
        this.audio = new Audio("src/scripts/song.mp3");
    }

    play(){
        this.audio.play();
    }
}

export{MusicPlayer}