/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns number
 */
function generateRandomNumberBetween(min=0,max=0){
    return Math.floor(min + Math.random() * (max - min + 1));
}

/**
 * 
 * @returns string
 */
function generateRandomColor(){
    return `rgb(${generateRandomNumberBetween(0,255)},${generateRandomNumberBetween(0,255)},${generateRandomNumberBetween(0,255)})`;
}

console.log(generateRandomNumberBetween(0,255))