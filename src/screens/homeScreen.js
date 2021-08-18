import {renderSongs} from "./songsScreen"
import { renderInstruction } from "./instructions";

export const renderHome = function(){
    const screen = document.getElementById("screen");
    screen.classList.add("home");
    screen.innerHTML=""
    const logo = document.createElement("img");
    logo.src ="src/assets/images/logo.png"
    logo.classList.add("logo")
    const playBttn = document.createElement("button");
    playBttn.innerText="Play";
    const instructionButton= document.createElement("button");
    instructionButton.innerText = "How to play";
    screen.appendChild(logo);
    screen.appendChild(playBttn);
    screen.appendChild(instructionButton);
    playBttn.addEventListener("click",function(){
        renderSongs();
    })
    instructionButton.addEventListener("click",
    function(){
        renderInstruction();
    })
}