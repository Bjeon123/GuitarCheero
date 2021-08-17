import {renderHome} from "./homeScreen"
import {renderGame} from "./gameScreen"
export const renderSongs = function () {
    const songs =["Me and My Guitar"]
    const screen = document.getElementById("screen");
    screen.classList.add("home")
    screen.innerHTML="";
    const backBttn=document.createElement("button");
    backBttn.innerText="back";
    screen.appendChild(backBttn);
    backBttn.addEventListener("click",function(){
        renderHome();
    })
    const songsList= document.createElement("ul");
    const h1= document.createElement("h1");
    h1.innerText="Songs List"
    songs.forEach(function(song){
        const li=document.createElement("li")
        li.innerText=song;
        songsList.appendChild(li)
        li.addEventListener("click",function(){
            screen.classList.remove("home");
            renderGame();
        })
    });
    screen.appendChild(h1)
    screen.appendChild(songsList);
}

