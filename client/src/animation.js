let ctx = null;
let spriteList = [];

let leftArrowOn = false;
let rightArrowOn = false;

window.addEventListener("load", () => {
	ctx = document.getElementById("canvas").getContext("2d");

	spriteList.push(new Skeleton)

	tick();
});


document.onkeydown = e =>{
	if (e.key == "ArrowLeft") leftArrowOn = true;
	else if (e.key == "ArrowRight") rightArrowOn = true;
}

document.onkeyup = e =>{
	if (e.key == "ArrowLeft") leftArrowOn = false;
	else if (e.key == "ArrowRight") rightArrowOn = false;
}

const tick = () => {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 600, 500);

	for (let i = 0; i < spriteList.length; i++) {
		let alive = spriteList[i].tick();

		if (!alive) {
			spriteList.splice(i, 1);
			i--;
		}
	}

	window.requestAnimationFrame(tick);
}
