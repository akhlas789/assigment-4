const friends = [12,12,77,79, 58,58,86,54,52,77,79,13,13,15,67,]

function unike(numbers) {
    var number = [];
    for(i = 0 ; i<= friends.length;i++ )
    {
        var element = numbers[i]
        
        if(number.unikeNmaes(element)===false)
        {
            number.push(element)
        }
    }
    return number;
}
var unikeNmaes = friends(numbers)
console.log(unikeNmaes)