//count total marks :

const marks = {
    math : 80 ,
    science : 90 ,
    english : 20 ,
};

let total = 0 ;

Object.entries(marks).forEach(([key , value]) => {total += value}) ;

console.log(total) ;