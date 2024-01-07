// /**
//  *
//  * @param {number} min
//  * @param {number} max
//  * @returns number
//  */
// function generateRandomNumberBetween(min=0,max=0){
//     return Math.floor(min + Math.random() * (max - min + 1));
// }

// /**
//  *
//  * @returns string
//  */
function generateRandomNumberBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}