import TiledImage from "../TiledImage.js"
import { ctx } from "../page-register.js"

export class Skateboard {
	constructor() {
		let columnCount = 11
		let rowCount = 1
		let delay = 100
		let loop = true
		let scale = 1.5

		this.tiledImage = new TiledImage("img/sprites/rotating skateboard - 360.png", columnCount, rowCount, delay, loop, scale)

		this.x = 150
		this.y = 40
	}


	tick () {
		if (document.querySelector("canvas").onmouseover) {
			this.tiledImage.setPaused(true);
		}
		else {
			this.tiledImage.setPaused(false);
		}
	
		this.tiledImage.tick(this.x, this.y, ctx)
		return true;
	}
}