import TiledImage from "../TiledImage.js"
import { ctx } from "../page-register.js"

export class Running {
	constructor() {
		let columnCount = 8
		let rowCount = 1
		let delay = 50
		let loop = true
		let scale = 0.5


		this.tiledImage = new TiledImage("img/sprites/running - 640.png", columnCount, rowCount, delay, loop, scale)

		this.x = 0
		this.y = 90
		this.speed = 4;
	}


	tick () {
		
		this.x += this.speed
		this.tiledImage.setPaused(false)

		this.tiledImage.tick(this.x, this.y, ctx)
		return true;
	}
}