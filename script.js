//canvas
const canvas = document.getElementById("canvas");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
//checking if canvas is supported
const ctx = canvas.getContext("2d");
const balls = [];

function paint() {
	if (canvas.getContext) {
		// drawing code here
		for (let i = 0; i < TOTAL_BALLS; i++) {
			const ball = new Ball(
				generateRandomNumberBetween(0, CANVAS_WIDTH),
				generateRandomNumberBetween(0, CANVAS_HEIGHT),
				generateRandomNumberBetween(MIN_RADIUS, MAX_RADIUS),
				generateRandomColor(),
				{
					dx: generateRandomNumberBetween(-1, 1)*BALL_SPEED,
					dy: generateRandomNumberBetween(-1, 1)*BALL_SPEED,
				}
			);
			balls.push(ball);
			// ball.draw(ctx);
		}
	} else {
		// canvas-unsupported code here
	}
}
window.addEventListener("load", paint);

/**
 * 
 * @param {object} ball 
 */
function reverseDirections(ball) {
    ball.direction.dx = -ball.direction.dx;
    ball.direction.dy = -ball.direction.dy;
}
//update the balls position
function updateBalls() {
	balls.forEach((ball) => {
		ball.x += ball.direction.dx;
		ball.y += ball.direction.dy;
		// Check for collisions with the canvas boundaries and reverse direction if necessary
		if (ball.x - ball.radius < 0 || ball.x + ball.radius > CANVAS_WIDTH) {
			ball.direction.dx = -ball.direction.dx;
		}

		if (ball.y - ball.radius < 0 || ball.y + ball.radius > CANVAS_HEIGHT) {
			ball.direction.dy = -ball.direction.dy;
		}
	});	

	// Check for collisions between balls
	for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            if (balls[i].checkCollision(balls[j])) {
                reverseDirections(balls[i]);
                reverseDirections(balls[j]);
            }
        }
	}
}

// function updateBalls() {
// 	balls.forEach((ball) => {
// 		ball.move();
// 	});
// }
function drawBalls() {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	balls.forEach((ball) => {
		ball.draw(ctx);
	});
}

function animate() {
	updateBalls();
	drawBalls();
	requestAnimationFrame(animate);
}

animate();
