import { register } from './chat-api';
import { BlondeSkater } from './sprite/BlondeSkater';
import { GirlSkater } from './sprite/GirlSkater';
import { GreenSkater } from './sprite/GreenSkater';
import { Running } from './sprite/Running'
import { Skateboard } from './sprite/Skateboard';

export let canvas = null;
export let ctx = null;
export let spriteList = [];
export let backgroundImage = new Image();

export let leftArrowOn = false;
export let rightArrowOn = false;

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return register(this);
    }
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d")
	
	spriteList.push(new Skateboard)
	tick();
})

const tick = () => {
	ctx.font = "50px Aclonica";
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	for (let i = 0; i < spriteList.length; i++) {
		let alive = spriteList[i].tick();

		if (!alive) {
			spriteList.splice(i, 1);
			i--;
		}
	}
	window.requestAnimationFrame(tick);
}


