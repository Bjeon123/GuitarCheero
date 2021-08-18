import {renderHome} from "./homeScreen"
export const renderInstruction= function(){
    const screen = document.getElementById("screen");
    screen.innerHTML = "";
    const backBttn = document.createElement("button");
    backBttn.innerText = "back";
    screen.appendChild(backBttn);
    backBttn.addEventListener("click", function () {
        renderHome();
    })
    screen.appendChild(backBttn);
    const instructions =document.createElement("img");
    instructions.classList.add("instructions");
    instructions.src ="src/assets/images/instructions.png";
    screen.appendChild(instructions)
}