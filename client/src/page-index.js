import { signin } from './chat-api';
import { ctx, canvas } from "./page-register.js"
import { Running } from './sprite/Running';
import { GreenSkater } from './sprite/GreenSkater';
import { BlondeSkater } from './sprite/BlondeSkater';
export let spriteList = [];

export function sprites(sprite, delay) {
    setInterval(function(){ 
        spriteList.push(new sprite);
    }, delay);
}

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
    let div = document.createElement("div");

    window.onclick = () => {
        div.remove();
        sprites(Running, 2000);
        sprites(GreenSkater, 4000);
        sprites(BlondeSkater, 5000);
    }

    let imgNode = document.createElement("img")
    let parent = document.querySelector("#gif")

    imgNode.src = "img/gifs/girl skater.gif"
    imgNode.style.width = 400 + "px"

    div.append(imgNode);
    parent.appendChild(div)

    tick();
});



const tick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < spriteList.length; i++){
        const element = spriteList[i];
        let alive = element.tick();

        if (!alive){
            spriteList.splice(i, 1);
            i--;
        }
    }
    window.requestAnimationFrame(tick);
}
