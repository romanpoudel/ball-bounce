

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

//code i submitted

// // // //canvas
// // // const canvas = document.getElementById("canvas");
// // // canvas.width = CANVAS_WIDTH;
// // // canvas.height = CANVAS_HEIGHT;
// // // //checking if canvas is supported
// // // const ctx = canvas.getContext("2d");
// // // const balls = [];

// // // function paint() {
// // // 	if (canvas.getContext) {
// // // 		// drawing code here
// // // 		for (let i = 0; i < TOTAL_BALLS; i++) {
// // // 			const ball = new Ball(
// // // 				generateRandomNumberBetween(0, CANVAS_WIDTH),
// // // 				generateRandomNumberBetween(0, CANVAS_HEIGHT),
// // // 				generateRandomNumberBetween(MIN_RADIUS, MAX_RADIUS),
// // // 				generateRandomColor(),
// // // 				{
// // // 					dx: generateRandomNumberBetween(-1, 1)*BALL_SPEED,
// // // 					dy: generateRandomNumberBetween(-1, 1)*BALL_SPEED,
// // // 				}
// // // 			);
// // // 			balls.push(ball);
// // // 			// ball.draw(ctx);
// // // 		}
// // // 	} else {
// // // 		// canvas-unsupported code here
// // // 	}
// // // }
// // // window.addEventListener("load", paint);

// // // /**
// // //  * 
// // //  * @param {object} ball 
// // //  */
// // // function reverseDirections(ball) {
// // //     ball.direction.dx = -ball.direction.dx;
// // //     ball.direction.dy = -ball.direction.dy;
// // // }
// // // //update the balls position
// // // function updateBalls() {
// // // 	balls.forEach((ball) => {
// // // 		ball.x += ball.direction.dx;
// // // 		ball.y += ball.direction.dy;
// // // 		// Check for collisions with the canvas boundaries and reverse direction if necessary
// // // 		if (ball.x - ball.radius < 0 || ball.x + ball.radius > CANVAS_WIDTH) {
// // // 			ball.direction.dx = -ball.direction.dx;
// // // 		}

// // // 		if (ball.y - ball.radius < 0 || ball.y + ball.radius > CANVAS_HEIGHT) {
// // // 			ball.direction.dy = -ball.direction.dy;
// // // 		}
// // // 	});	

// // // 	// Check for collisions between balls
// // // 	for (let i = 0; i < balls.length; i++) {
// // //         for (let j = i + 1; j < balls.length; j++) {
// // //             if (balls[i].checkCollision(balls[j])) {
// // //                 reverseDirections(balls[i]);
// // //                 reverseDirections(balls[j]);
// // //             }
// // //         }
// // // 	}
// // // }

// // // // function updateBalls() {
// // // // 	balls.forEach((ball) => {
// // // // 		ball.move();
// // // // 	});
// // // // }
// // // function drawBalls() {
// // // 	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
// // // 	balls.forEach((ball) => {
// // // 		ball.draw(ctx);
// // // 	});
// // // }

// // // function animate() {
// // // 	updateBalls();
// // // 	drawBalls();
// // // 	requestAnimationFrame(animate);
// // // }

// // // animate();

// // // canvas
// // const canvas = document.getElementById("canvas");
// // const CANVAS_WIDTH = 800;
// // const CANVAS_HEIGHT = 600;
// // const TOTAL_BALLS = 30;
// // const MIN_RADIUS = 10;
// // const MAX_RADIUS = 30;
// // const BALL_SPEED = 2;

// // canvas.width = CANVAS_WIDTH;
// // canvas.height = CANVAS_HEIGHT;

// // // checking if canvas is supported
// // const ctx = canvas.getContext("2d");
// // const balls = [];

// // function paint() {
// //     if (canvas.getContext) {
// //         for (let i = 0; i < TOTAL_BALLS; i++) {
// //             const ball = new Ball(
// //                 generateRandomNumberBetween(0, CANVAS_WIDTH),
// //                 generateRandomNumberBetween(0, CANVAS_HEIGHT),
// //                 generateRandomNumberBetween(MIN_RADIUS, MAX_RADIUS),
// //                 generateRandomColor(),
// //                 {
// //                     dx: generateRandomNumberBetween(-1, 1) * BALL_SPEED,
// //                     dy: generateRandomNumberBetween(-1, 1) * BALL_SPEED,
// //                 }
// //             );

// //             // Check for collisions with other balls and adjust position if needed
// //             for (const otherBall of balls) {
// //                 while (ball.checkCollision(otherBall)) {
// //                     ball.x = generateRandomNumberBetween(0, CANVAS_WIDTH);
// //                     ball.y = generateRandomNumberBetween(0, CANVAS_HEIGHT);
// //                 }
// //             }

// //             balls.push(ball);
// //         }
// //     } else {
// //         // canvas-unsupported code here
// //     }
// // }

// // window.addEventListener("load", paint);

// // function reverseDirections(ball) {
// //     ball.direction.dx = -ball.direction.dx;
// //     ball.direction.dy = -ball.direction.dy;
// // }

// // function updateBalls() {
// //     balls.forEach((ball) => {
// //         ball.x += ball.direction.dx;
// //         ball.y += ball.direction.dy;

// //         if (ball.x - ball.radius < 0 || ball.x + ball.radius > CANVAS_WIDTH) {
// //             ball.direction.dx = -ball.direction.dx;
// //         }

// //         if (ball.y - ball.radius < 0 || ball.y + ball.radius > CANVAS_HEIGHT) {
// //             ball.direction.dy = -ball.direction.dy;
// //         }
// //     });

// //     // Check for collisions between balls
// //     for (let i = 0; i < balls.length; i++) {
// //         for (let j = i + 1; j < balls.length; j++) {
// //             if (balls[i].checkCollision(balls[j])) {
// //                 reverseDirections(balls[i]);
// //                 reverseDirections(balls[j]);
// //             }
// //         }
// //     }
// // }

// // function drawBalls() {
// //     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
// //     balls.forEach((ball) => {
// //         ball.draw(ctx);
// //     });
// // }

// // function animate() {
// //     updateBalls();
// //     drawBalls();
// //     requestAnimationFrame(animate);
// // }

// // animate();

// // class Ball {
// //     constructor(x, y, radius, color, direction) {
// //         this.x = x;
// //         this.y = y;
// //         this.radius = radius;
// //         this.color = color;
// //         this.direction = direction;
// //     }

// //     draw(ctx) {
// //         ctx.beginPath();
// //         ctx.fillStyle = this.color;
// //         ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
// //         ctx.fill();
// //     }

// //     checkCollision(otherBall) {
// //         const dx = this.x - otherBall.x;
// //         const dy = this.y - otherBall.y;
// //         const distance = Math.sqrt(dx * dx + dy * dy);
// //         return distance < this.radius + otherBall.radius;
// //     }
// // }

// // function generateRandomNumberBetween(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1) + min);
// // }

// // function generateRandomColor() {
// //     const letters = "0123456789ABCDEF";
// //     let color = "#";
// //     for (let i = 0; i < 6; i++) {
// //         color += letters[Math.floor(Math.random() * 16)];
// //     }
// //     return color;
// // }


// const CANVAS_WIDTH = 800;
// const CANVAS_HEIGHT = 600;
// const MIN_RADIUS = 10;
// const MAX_RADIUS = 40;
// const BALL_SPEED = 2;
// const TOTAL_BALLS = 40;

// const canvas = document.getElementById("canvas");
// canvas.width = CANVAS_WIDTH;
// canvas.height = CANVAS_HEIGHT;
// const ctx = canvas.getContext("2d");
// const balls = [];

// function paint() {
// 	if (canvas.getContext) {
// 		for (let i = 0; i < TOTAL_BALLS; i++) {
// 			const ball = createRandomBall();
// 			while (checkOverlap(ball)) {
// 				// Regenerate the ball if it overlaps with existing balls
// 				ball.x = generateRandomNumberBetween(0, CANVAS_WIDTH);
// 				ball.y = generateRandomNumberBetween(0, CANVAS_HEIGHT);
// 			}
// 			balls.push(ball);
// 		}
// 	} else {
// 		// canvas-unsupported code here
// 	}
// }

// function createRandomBall() {
// 	return new Ball(
// 		generateRandomNumberBetween(0, CANVAS_WIDTH),
// 		generateRandomNumberBetween(0, CANVAS_HEIGHT),
// 		generateRandomNumberBetween(MIN_RADIUS, MAX_RADIUS),
// 		generateRandomColor(),
// 		{
// 			dx: generateRandomNumberBetween(-1, 1) * BALL_SPEED,
// 			dy: generateRandomNumberBetween(-1, 1) * BALL_SPEED,
// 		}
// 	);
// }

// function checkOverlap(newBall) {
// 	for (const existingBall of balls) {
// 		const distance = Math.sqrt(
// 			(existingBall.x - newBall.x) ** 2 + (existingBall.y - newBall.y) ** 2
// 		);
// 		if (distance < existingBall.radius + newBall.radius) {
// 			// Balls overlap
// 			return true;
// 		}
// 	}
// 	// No overlap
// 	return false;
// }

// class Ball {
// 	constructor(x, y, radius, color, direction) {
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

// 	checkCollision(otherBall) {
// 		const dx = this.x - otherBall.x;
// 		const dy = this.y - otherBall.y;
// 		const distance = Math.sqrt(dx * dx + dy * dy);
// 		return distance < this.radius + otherBall.radius;
// 	}
// }

// function generateRandomNumberBetween(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function generateRandomColor() {
// 	const letters = "0123456789ABCDEF";
// 	let color = "#";
// 	for (let i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// }

// function animate() {
// 	updateBalls();
// 	drawBalls();
// 	requestAnimationFrame(animate);
// }

// function reverseDirections(ball) {
// 	ball.direction.dx = -ball.direction.dx;
// 	ball.direction.dy = -ball.direction.dy;
// }

// function updateBalls() {
// 	balls.forEach((ball) => {
// 		ball.x += ball.direction.dx;
// 		ball.y += ball.direction.dy;

// 		if (ball.x - ball.radius < 0 || ball.x + ball.radius > CANVAS_WIDTH) {
// 			ball.direction.dx = -ball.direction.dx;
// 		}

// 		if (ball.y - ball.radius < 0 || ball.y + ball.radius > CANVAS_HEIGHT) {
// 			ball.direction.dy = -ball.direction.dy;
// 		}
// 	});

// 	for (let i = 0; i < balls.length; i++) {
// 		for (let j = i + 1; j < balls.length; j++) {
// 			if (balls[i].checkCollision(balls[j])) {
// 				reverseDirections(balls[i]);
// 				reverseDirections(balls[j]);
// 			}
// 		}
// 	}
// }

// function drawBalls() {
// 	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
// 	balls.forEach((ball) => {
// 		ball.draw(ctx);
// 	});
// }

// window.addEventListener("load", () => {
// 	paint();
// 	animate();
// });