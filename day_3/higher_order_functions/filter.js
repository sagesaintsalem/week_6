someNumbers = [23, 13, 467, 34, 78, 55, 22]

const getEvens = function (numbers) {
    const evenNums = [];
    numbers.forEach((number) => {
        if (number % 2 === 0) {
            evenNums.push(number);
        }
    })
    return evenNums;
};


const getOdds = function (numbers) {
    const oddNumbers = numbers.filter((number) => {
        return number % 2 !== 0;
    });
    return oddNumbers;
}

console.log(getOdds(someNumbers));