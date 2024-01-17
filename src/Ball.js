
// /**
//  * @fileoverview This file defines the Ball class. A Ball is a circle that can move in a random direction.
//  */
// class Ball {
// 	constructor(x, y, radius, color,direction) {
// 		this.x = x;
// 		this.y = y;
// 		this.radius = radius;
// 		this.color = color;
// 		this.direction = direction;
// 	}

// 	draw(ctx) {
// 		ctx.beginPath();
// 		ctx.fillStyle = this.color;
// 		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
// 		ctx.fill();
// 	}
//     // move(){
//     //     this.x +=generateRandomNumberBetween(-1,1)*BALL_SPEED;
//     //     this.y +=generateRandomNumberBetween(-1,1)*BALL_SPEED;
// 	// 	if (this.x - this.radius < 0 || this.x + this.radius > CANVAS_WIDTH) {
// 	// 		this.direction.dx = -this.direction.dx;
// 	// 	}

// 	// 	if (this.y - this.radius < 0 || this.y + this.radius > CANVAS_HEIGHT) {
// 	// 		this.direction.dy = -this.direction.dy;
// 	// 	}
//     // }


// 	/**
// 	 *
// 	 * @param {object} otherBall
// 	 * @returns boolean
// 	 */
// 	checkCollision(otherBall) {
//         const dx = this.x - otherBall.x;
//         const dy = this.y - otherBall.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         return distance < this.radius + otherBall.radius;
//     }
// }

//modified the code I submitted, analyzed and tested why and how to handle when two balls spawn in the same point,why previously resulted in a bug where the balls would get stuck in the same point (after )
class Ball {
	constructor(x, y, radius, color, dx, dy) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.dx = dx;
		this.dy = dy;
	}

	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fill();
	}

	move() {
		this.x += this.dx;
		this.y += this.dy;

		// Check for collisions with the canvas boundaries and reverse direction if necessary
		if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
			this.dx = -this.dx;
		}

		if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
			this.dy = -this.dy;
		}
	}

	checkCollision(otherBall) {
		const dx = this.x - otherBall.x;
		const dy = this.y - otherBall.y;
		const distance = Math.sqrt(dx * dx + dy * dy);
		return distance < this.radius + otherBall.radius;
	}

	adjustPosition(otherBall) {
		// Adjust the position to keep the ball within the canvas boundaries
		if (this.x - this.radius < 0) {
			this.x = this.radius;
		} else if (this.x + this.radius > canvas.width) {
			this.x = canvas.width - this.radius;
		}

		if (this.y - this.radius < 0) {
			this.y = this.radius;
		} else if (this.y + this.radius > canvas.height) {
			this.y = canvas.height - this.radius;
		}

		const dx = this.x - otherBall.x;
		const dy = this.y - otherBall.y;
		const distance = Math.sqrt(dx * dx + dy * dy);
		const overlap = this.radius + otherBall.radius - distance;

		if (overlap > 0) {
			const adjustX = (overlap / distance) * dx;
			const adjustY = (overlap / distance) * dy;

			this.x += adjustX;
			this.y += adjustY;
		}
	}
}