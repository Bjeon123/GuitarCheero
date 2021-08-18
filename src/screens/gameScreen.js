import {renderSongs} from "./songsScreen"
import {renderHome} from "./homeScreen"
import {GameView} from "../scripts/gameView"
import {Game} from "../scripts/game"
import {MusicPlayer} from "../scripts/musicPlayer"
export const renderGame = function () {

    // buttons rendered on screen
    const screen = document.getElementById("screen");
    screen.classList.add("game")
    screen.innerHTML = "";
    const canvas = document.createElement("canvas");
    canvas.id="game-canvas";
    canvas.width=600;
    canvas.height=700;
    canvas.style.background = "url(src/assets/images/bg1.png)";
    screen.appendChild(canvas);
    const backBttn = document.createElement("button");
    backBttn.classList.add("gameBackButton")
    backBttn.innerText = "back";
    screen.appendChild(backBttn);
    const logo = document.createElement("img");
    logo.src ="src/assets/images/logo.png"
    logo.classList.add("game-logo");
    screen.appendChild(logo);

    const clickToStart=document.createElement("img");
    clickToStart.classList.add("start-button");
    clickToStart.src ="src/assets/images/start_button.png";
    screen.appendChild(clickToStart);


    //creating instances for the game
    const musicPlayer = new MusicPlayer();
    const ctx = canvas.getContext("2d");
    const game = new Game();
    const newGameView = new GameView(game, ctx,musicPlayer);

    //buttons functionality
    const audio = document.querySelector("audio")
    backBttn.addEventListener("click",function(){
        screen.classList.remove("game");
        audio.src = "";
        musicPlayer.stop();
        renderSongs();
    })

    logo.addEventListener("click",function(){
        screen.classList.remove("game");
        audio.src = "";
        musicPlayer.stop();
        renderHome();
    })

    clickToStart.addEventListener("click", function(){
        screen.removeChild(clickToStart);
        setTimeout(function () {
            musicPlayer.play()
        }, 1500);
        newGameView.start();
    })
}

    