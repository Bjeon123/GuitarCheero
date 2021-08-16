import { GuitarKey } from './scripts/guitarKey';
import { GameView } from './scripts/gameView';
import { Game } from './scripts/game';
import {Note} from './scripts/note';
import { MusicPlayer } from './scripts/musicPlayer'



document.addEventListener("DOMContentLoaded",function(){
    const canvas = document.getElementById("game-canvas")
    const ctx = canvas.getContext("2d");
    const game = new Game();
    const musicPlayer= new MusicPlayer();
    window.addEventListener("keydown",function(e){
        if(e.key==="m"){
            setTimeout(function(){
            musicPlayer.play()},3000);
            const newGameView = new GameView(game, ctx);
        }
    })
 
})
