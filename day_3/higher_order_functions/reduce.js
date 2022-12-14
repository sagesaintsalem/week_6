const numbers = [1, 2, 3, 4, 5];

// const datSumFunction = function(numbers){
//     let total = 0;
//      for (const number of numbers) {
//         total += number;
//      }
//      return total;
// }

const datSumFunction = function(numbers) {
    const total = numbers.reduce((accumulator, currentElement) => {
        return accumulator + currentElement;
    }, 0);
    return total;
}

console.log("Total: ", datSumFunction(numbers));