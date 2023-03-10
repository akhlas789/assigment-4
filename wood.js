function woodCalculator(chairQuantity , tableQuantity , bedQuantity) {
    var chairWood = 3 ;
    var tablewood = 10;
    var bedWood  = 50;

    var perCheirWood = chairQuantity * chairWood;
    var perTableWood = tableQuantity * tablewood;
    var perBedWood   = bedQuantity   * bedWood  ;

    var totalWood = perCheirWood + perTableWood + perBedWood ;
    
    return totalWood ;

}

var totalWood =woodCalculator (2,0,0);
console.log('total wood :',totalWood)