import {signin} from './chat-api';
import { GirlSkater } from './sprite/GirlSkater copy';
import { ctx, canvas } from "./page-register.js"
import { Running } from './sprite/Running';
import { GreenSkater } from './sprite/GreenSkater';


export let spriteList = [];

document.onclick = () =>{
    spriteList.push(new GreenSkater);
}

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
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
