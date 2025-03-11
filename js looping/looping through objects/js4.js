// filter employees with salary aborve 40,000

const employees = {
    virat : 20000 ,
    cummins : 10000 ,
    hardik : 50000 ,
    stokes : 90000 ,
} ;

let highpaidemp = [];

Object.entries(employees).forEach(([key , value]) => {
    if(value > 40000){
        highpaidemp.push(key) ;
    }
}) ;

console.log(highpaidemp) ;