class Running {
	constructor() {
		let columnCount = 9
		let rowCount = 4
		let delay = 100
		let loop = true
		let scale = 3.0


		this.tiledImage = new TiledImage("../../img/sprites/running - 100.png", columnCount, rowCount, delay, loop, scale)

		this.x = 300
		this.y = 200
	}


	tick () {
		if (leftArrowOn){
			this.x--
		}

		if (rightArrowOn){
			this.x++
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