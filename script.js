const canvas = document.getElementById("canvas");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
const ctx = canvas.getContext("2d");
const balls = [];


function createRandomBall() {
	const radius = generateRandomNumberBetween(MIN_RADIUS, MAX_RADIUS);
	const x = generateRandomNumberBetween(radius, canvas.width - radius);
	const y = generateRandomNumberBetween(radius, canvas.height - radius);
	const dx = generateRandomNumberBetween(-2, 2);
	const dy = generateRandomNumberBetween(-2, 2);
	const color = generateRandomColor();
	return new Ball(x, y, radius, color, dx, dy);
}

function updateBalls() {
	balls.forEach((ball) => {
		ball.move();
	});

	// Check for collisions between balls
	for (let i = 0; i < balls.length; i++) {
		for (let j = i + 1; j < balls.length; j++) {
			if (balls[i].checkCollision(balls[j])) {
				// Swap velocities for a simple elastic collision effect
				const tempDx = balls[i].dx;
				const tempDy = balls[i].dy;
				balls[i].dx = balls[j].dx;
				balls[i].dy = balls[j].dy;
				balls[j].dx = tempDx;
				balls[j].dy = tempDy;

				// Adjust positions to avoid overlap
				balls[i].adjustPosition(balls[j]);
			}
		}
	}
}

function drawBalls() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	balls.forEach((ball) => {
		ball.draw();
	});
}

function animate() {
	updateBalls();
	drawBalls();
	requestAnimationFrame(animate);
}

// Create initial balls
for (let i = 0; i < TOTAL_BALLS; i++) {
	balls.push(createRandomBall());
}

// Start the animation loop
animate();