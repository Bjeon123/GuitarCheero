import { GuitarKey } from './scripts/guitarKey';
import { GameView } from './scripts/gameView';



document.addEventListener("DOMContentLoaded",function(){
    const canvas = document.getElementById("game-canvas")
    const ctx = canvas.getContext("2d");
    new GameView(canvas.width / 14,ctx)


})
