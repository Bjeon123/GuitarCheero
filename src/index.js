import { GuitarKey } from './scripts/guitarKey';
import { GameView } from './scripts/gameView';
import { Game } from './scripts/game';
import {Note} from './scripts/note';



document.addEventListener("DOMContentLoaded",function(){
    const canvas = document.getElementById("game-canvas")
    const ctx = canvas.getContext("2d");
    const game = new Game();
    // canvas.width/14 
    new GameView(game ,ctx)
})
