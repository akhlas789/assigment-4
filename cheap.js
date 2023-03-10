 const phones = [
    {name:'samsung', camera:12, storage:'32gb', price:34000, color:'silver'},
    {name:'htc', camera:120, storage:'62gb', price:24000, color:'silver'},
    {name:'nokia', camera:14, storage:'50gb', price:33000, color:'black'},
    {name:'ximo', camera:12, storage:'32gb', price:44000, color:'silver'},
    {name:'whei', camera:12, storage:'32gb', price:54000, color:'silver'},
    {name:'lenovo', camera:12, storage:'32gb', price:64000, color:'silver'},
    {name:'balck-bary', camera:12, storage:'32gb', price:74000, color:'silver'},
    {name:'okapia', camera:12, storage:'32gb', price:84000, color:'silver'},
    {name:'iphone', camera:12, storage:'32gb', price:94000, color:'silver'},
 ];

function cheapestPhone(phones) {
    let cheapest = phones[0]
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.camera > cheapest.camera)
        {
            cheapest = phone;
        }
    }
    return cheapest;
}
const myChoice = cheapestPhone(phones)
console.log(myChoice)