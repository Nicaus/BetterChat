import TiledImage from "../TiledImage.js"
import { leftArrowOn, rightArrowOn, ctx } from "../page-register.js"

export class BlondeSkater {
	constructor() {
		let columnCount = 4
		let rowCount = 1
		let delay = 50
		let loop = true
		let scale = 0.3


		this.tiledImage = new TiledImage("img/sprites/blonde skater - 640.png", columnCount, rowCount, delay, loop, scale)

		this.x = 300
		this.y = 200
	}


	tick () {
		if (leftArrowOn){
			this.x -= 2.5
		}

		if (rightArrowOn){
			this.x += 5
		}

		if (!rightArrowOn && !leftArrowOn){
			this.tiledImage.setPaused(true)
		}
		else{
			this.tiledImage.setPaused(false)
		}

		this.tiledImage.tick(this.x, this.y, ctx)
		return true;
	}
}