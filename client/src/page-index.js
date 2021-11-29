import {signin} from './chat-api';
import { ctx, canvas } from "./page-register.js"
import { Running } from './sprite/Running';
import { GreenSkater } from './sprite/GreenSkater';
import { BlondeSkater } from './sprite/BlondeSkater';
export let spriteList = [];

export function running() {
    setInterval(function(){ 
        spriteList.push(new Running);
    }, 2000);
}

export function greenskater(){
    setInterval(function(){
        spriteList.push(new GreenSkater)
    }, 4000);
}
 
export function blondeskater(){
    setInterval(function(){
        spriteList.push(new BlondeSkater)
    }, 5000);
}


window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }

    running();
    greenskater();
    blondeskater();
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
