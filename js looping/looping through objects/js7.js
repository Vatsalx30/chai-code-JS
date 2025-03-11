//double the stock of all items 
const inventory = {
    apples : 90 ,
    bananas : 200 ,
    orages : 11 ,
} ;

Object.entries(inventory).forEach(([key , value]) => {
    console.log(value * 2) ;
}) ;

