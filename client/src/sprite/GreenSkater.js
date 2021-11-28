import TiledImage from "../TiledImage.js"
import { ctx } from "../page-register.js"

export class GreenSkater {
	constructor() {
		let columnCount = 7
		let rowCount = 1
		let delay = 50
		let loop = true
		let scale = 0.3


		this.tiledImage = new TiledImage("img/sprites/skater green - 640.png", columnCount, rowCount, delay, loop, scale)

		this.x = 0
		this.y = 750
		this.speed = 8
	}


	tick () {
		this.x += this.speed
		this.tiledImage.setPaused(false)

		this.tiledImage.tick(this.x, this.y, ctx)
		return true;
	}
}