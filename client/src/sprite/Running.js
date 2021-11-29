import TiledImage from "../TiledImage.js"
import { ctx } from "../page-register.js"

export class Running {
	constructor() {
		let columnCount = 8
		let rowCount = 1
		let delay = 50
		let loop = true
		let scale = 0.4

		this.tiledImage = new TiledImage("img/sprites/running - 640.png", columnCount, rowCount, delay, loop, scale)

		this.x = 0
		this.random = Math.random() * (550 - 90) + 90;
		this.speed = Math.random() * (12 - 5) + 5;
	}


	tick () {
		this.y = this.random

		this.x += this.speed
		this.tiledImage.setPaused(false)

		this.tiledImage.tick(this.x, this.y, ctx)
		return true;
	}
}