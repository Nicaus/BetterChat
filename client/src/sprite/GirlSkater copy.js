import TiledImage from "../TiledImage.js"
import { leftArrowOn, rightArrowOn, ctx } from "../page-register.js"

export class GirlSkater {
	constructor() {
		let columnCount = 4
		let rowCount = 1
		let delay = 50
		let loop = true
		let scale = 0.3

		this.tiledImage = new Image("img/gifs/girl skater.gif")
		this.speedY = -30

		document.body.append(this.tiledImage);
	}


	tick () {
		this.speedY -= 0.01;

        let alive = true;
        let y = this.tiledImage.offsetTop
        this.tiledImage = y + this.speedY + "px"
        // this.div.style.left = this.div.offsetLeft + this.speedX + "px"

        if (y < -10){
            this.tiledImage.remove();
            alive = false
        }
        return alive;
	}
}