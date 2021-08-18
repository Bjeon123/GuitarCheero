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
    const audioElement = document.querySelector('audio');
    if (audioElement) audioElement.remove();
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

    const links = document.createElement("div")
    links.classList.add("links-songs-screen")
    const githubLink = document.createElement("a")
    githubLink.href = "https://github.com/Bjeon123/GuitarCheero";
    const githubFavicon = document.createElement("img")
    githubFavicon.classList.add("link");
    githubFavicon.src = "src/assets/images/pngegg.png"
    githubLink.appendChild(githubFavicon)
    const linkdinLink = document.createElement("a");
    linkdinLink.href = "https://www.linkedin.com/in/byung-jeon-01a68812a/";
    const linkdinFavicon = document.createElement("img");
    linkdinFavicon.classList.add("link");
    linkdinFavicon.src = "src/assets/images/pngegg (1).png";
    linkdinLink.appendChild(linkdinFavicon);
    links.appendChild(githubLink);
    links.appendChild(linkdinLink);
    screen.appendChild(links);
}

