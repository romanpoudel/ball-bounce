function generateRandomNumber(){
    return Math.floor(Math.random() * 100);
}

function generateRandomColor(){
    return `rgb(${generateRandomNumber()},${generateRandomNumber()},${generateRandomNumber()})`;
}

// function generateRandomPoint(){
//     return {
//         x:generateRandomNumber(),
//         y:generateRandomNumber()
//     };
// }