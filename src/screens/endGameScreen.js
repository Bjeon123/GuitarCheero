import {renderSongs} from "./songsScreen";

export const renderEnd = function(statsObject){
    const screen = document.getElementById("screen");
    screen.classList.remove("game");
    screen.classList.add("home")
    screen.innerHTML = "";
    const logo = document.createElement("img");
    logo.src = "src/assets/images/logo.png"
    logo.classList.add("end-game")
    screen.appendChild(logo);
    const backBttn = document.createElement("button");
    backBttn.innerText = "Back to Songs";
    screen.appendChild(backBttn);
    const h1=document.createElement("h1");
    h1.innerText="Game Results";
    screen.appendChild(h1);
    const allStats=document.createElement("div");
    allStats.classList.add("all-stats");
    const score=document.createElement("h2");
    score.innerText = `Score: ${statsObject.score}`;
    allStats.appendChild(score);
    const accuracy = document.createElement("h2");
    const accuracyAsInt = Math.round(((statsObject.totalPerfect + statsObject.totalNice) / statsObject.totalDisks) * 100)
    accuracy.innerText = `Hit Percentage: ${accuracyAsInt}%`
    allStats.appendChild(accuracy);
    const totalPerfect = document.createElement("h2");
    totalPerfect.innerText=`Total Perfect Notes: ${statsObject.totalPerfect}`;
    allStats.appendChild(totalPerfect);
    const totalNice=document.createElement("h2");
    totalNice.innerText=`Total Nice Notes: ${statsObject.totalNice}`;
    allStats.appendChild(totalNice);
    screen.appendChild(allStats);
    const grade=document.createElement("h1")
    if(accuracyAsInt>=90){
        grade.innerText ="A"
    }
    else if(accuracyAsInt<90 && accuracyAsInt>=80){
        grade.innerHTML="B"
    }
    else if(accuracyAsInt<80 && accuracyAsInt>=75){
        grade.innerHTML="C"
    }
    else if(accuracyAsInt<75 && accuracyAsInt>=70){
        grade.innerHTML="D"
    }
    else{
        grade.innerHTML="F"
    }
    allStats.appendChild(grade)

    backBttn.addEventListener("click", function () {
        renderSongs();
    })
}