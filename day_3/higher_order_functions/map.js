const myNumbers = [1, 2, 3, 4];



// const multipliedByTwo = function (numbers){
//     const multipledNums = [];
//     numbers.forEach((number) => {
//         const multipliedNum = number * 2;
//         multipliedNums.push(multipliedNum);
//     })
//     return multipledNums;
// };

const multipliedByTwo = function (numberArray){
    const multipliedNums = numberArray.map((number) => {
        return number * 2;
    });
    return multipliedNums;
}

console.log('Multiplied numbers: ', multipliedByTwo(myNumbers));