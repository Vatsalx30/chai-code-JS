// loop through this object and print each key and value :

const student = {
    name : `cummins` ,
    age : 30 ,
    grade : `A` ,
} ;

Object.entries(student).forEach(([key , value]) => {
    console.log(`${key} , ${value}`) ;
}) ;

