class MusicPlayer{
    constructor(){
        this.audio = new Audio("src/assets/songs/Me_and_My_Guitar.mp3");
    }

    play(){
        this.audio.play();
    }

    stop(){
        this.audio.pause();
        this.audio.currentTime=0;
    }
}

export{MusicPlayer}
