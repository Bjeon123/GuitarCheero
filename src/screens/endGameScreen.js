import {renderSongs} from "./songsScreen";

export const renderEnd = function(statsObject){
    const screen = document.getElementById("screen");
    screen.classList.remove("game");
    screen.classList.add("home")
    screen.innerHTML = "";
    const backBttn = document.createElement("button");
    backBttn.innerText = "back";
    screen.appendChild(backBttn);
    const h1=document.createElement("h1");
    h1.innerText="Game Results";
    screen.appendChild(h1);
    console.log(statsObject.score);

    backBttn.addEventListener("click", function () {
        renderSongs();
    })
}