//canvas
const canvas = document.getElementById("canvas");

class Ball {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
		ctx.fill();
	}
}

//checking if canvas is supported
const ctx = canvas.getContext("2d");
function paint() {
	if (canvas.getContext) {
		// drawing code here
		for (let i = 0; i < TOTAL_BALLS; i++) {
			const ball = new Ball(
				generateRandomNumber(),
				generateRandomNumber(),
				generateRandomNumber(),
				generateRandomColor()
			);
			ball.draw(ctx);
		}
	} else {
		// canvas-unsupported code here
	}
}
window.addEventListener("load", paint);
