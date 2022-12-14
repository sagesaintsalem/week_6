const myNumbers = [1, 2, 3, 4];

// Function Example 1

// for (const number of myNumbers) {
//     console.log(`Number was: ${number}`);
// }

// Function Example 2

// myNumbers.forEach((element) => {
//     console.log(`Number was: ${element}`);
// });

// Function Example 3

// const myNumberFunction = (number) => {
//     console.log(`Number was: ${number}`);
// };
// myNumbers.forEach(myNumberFunction);

// Function Example 4

// myNumbers.forEach((number, index) => {
//     console.log(`Next number was ${number} at ${index}`);
// });

// Function Example 5

// const myNumberFunction = (number, index) => {
//     console.log(`Next number was ${number} at ${index}`);
// };
// myNumbers.forEach(myNumberFunction);

// Function Example 6

// const multiplied = [];
// for (const number of myNumbers) {
//     const multipliedNum = number * 2;
//     multiplied.push(multipliedNum);
// };

// Function Example 7

// const multipliedByTwo = function (numbers){
//     const multipledNums = [];
//     numbers.forEach((number) => {
//         const multipliedNum = number * 2;
//         multipliedNums.push(multipliedNum);
//     })
//     return multipledNums;
// }
// console.log(`Numbers before multiplication :`, myNumbers);
// console.log(`Numbers after multiplication:`, multipliedByTwo(myNumbers));



// Class Exercise

const getEvens = function (numbers) {
    const evenNums = [];
    numbers.forEach((number) => {
        if (number % 2 === 0) {
            evenNums.push(number);
        }
    })
    return evenNums;
};
console.log(getEvens(myNumbers));
console.log(getEvens([13, 12, 46, 33, 75, 3]));
