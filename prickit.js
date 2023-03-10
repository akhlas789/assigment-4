function trickitPrice(trickitQuantity) {
    const first100Rate = 100 ;
    const second100Rate = 90;
    const restTrickitRate = 70;

    if (first100Rate <=100) {
        const price = first100Rate * trickitPrice ;
        console.log(price)

    }

    else if (second100Rate <= 200) {
        const first100Price = 100 *first100Rate ;
        const restTrickitQuantity = trickitQuantity - 1f00 ;
        const restTrickitPrice =restTrickitQuantity * second100Rate ;
        const totalPrice = first100Price + restTrickitPrice;
        return totalPrice ;
    }

    else
    {
        const first100Price  = 100 * first100Rate ;
        const second100Price = 100 *second100Rate ;
        const restTrickitQuantity =  second100Price - 200 ;
        const restTrickitPrice = restTrickitQuantity * restTrickitRate ;
        const totalPrice = first100Price + second100Price + restTrickitPrice ;
        return totalPrice ;
    }
}
const price = trickitPrice(120)
console.log('price : ',price)