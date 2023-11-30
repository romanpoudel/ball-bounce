
/**
 * @fileoverview This file defines the Ball class. A Ball is a circle that can move in a random direction.
 */
class Ball {
	constructor(x, y, radius, color,direction) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.direction = direction;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
		ctx.fill();
	}
    // move(){
    //     this.x +=generateRandomNumberBetween(-1,1)*BALL_SPEED;
    //     this.y +=generateRandomNumberBetween(-1,1)*BALL_SPEED;
	// 	if (this.x - this.radius < 0 || this.x + this.radius > CANVAS_WIDTH) {
	// 		this.direction.dx = -this.direction.dx;
	// 	}

	// 	if (this.y - this.radius < 0 || this.y + this.radius > CANVAS_HEIGHT) {
	// 		this.direction.dy = -this.direction.dy;
	// 	}
    // }


	/**
	 * 
	 * @param {object} otherBall 
	 * @returns boolean
	 */
	checkCollision(otherBall) {
        const dx = this.x - otherBall.x;
        const dy = this.y - otherBall.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.radius + otherBall.radius;
    }
}
