const products = [
    {
        productName: 'apple',
        price: 0.50
    },
    {
        productName: 'orange',
        price: 0.55
    },
]

// const markupValues = products.map((product) => {
//     return product.price * 1.2;
// })

// console.log(markupValues)

const totalPrices = products.reduce((accumulator, product) => {
    return accumulator + product.price;
}, 0);
console.log(totalPrices);