const card =[
    {name : 'shoe', price : 1200 },
    {name : 'shirt', price : 1500 },
    {name : 'pant', price : 1000 },
    {name : 't-shirt', price : 1400 },
    {name : 'share', price : 1600 },
    {name : 'jama', price : 1700 },
];

function shoppingCard(shopping) {
    let sum = 0;
    for (let i = 0; i < shopping.length; i++) {
        const product = shopping[i];
        sum =sum  + product.price;
        
    }
    return sum;
}

const myBujet = shoppingCard(card)
console.log(myBujet)