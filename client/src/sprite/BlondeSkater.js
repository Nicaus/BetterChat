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

		this.x = 0
		this.random = Math.random() * (550 - 50) + 50;
		this.speed = Math.random() * (13 - 8) + 8;	}


	tick () {
		this.y = this.random
		this.x += this.speed
		this.tiledImage.setPaused(false)

		this.tiledImage.tick(this.x, this.y, ctx)
		return true;
	}
}