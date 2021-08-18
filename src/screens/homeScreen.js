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

    const links = document.createElement("div")
    links.classList.add("links-home")

    const githubLink = document.createElement("a")
    githubLink.href ="https://github.com/Bjeon123/GuitarCheero";
    const githubFavicon= document.createElement("img")
    githubFavicon.classList.add("link");
    githubFavicon.src = "src/assets/images/pngegg.png"
    githubLink.appendChild(githubFavicon)


    const linkdinLink =document.createElement("a") ;
    linkdinLink.href ="https://www.linkedin.com/in/byung-jeon-01a68812a/";
    const linkdinFavicon = document.createElement("img");
    linkdinFavicon.classList.add("link");
    linkdinFavicon.src = "src/assets/images/pngegg (1).png";
    linkdinLink.appendChild(linkdinFavicon);
    links.appendChild(githubLink);
    links.appendChild(linkdinLink);
    screen.appendChild(links);


    playBttn.addEventListener("click",function(){
        links.classList.remove("links-home")
        renderSongs();
    })
    instructionButton.addEventListener("click",
    function(){
        renderInstruction();
    })

}