// create an object of pruit prices and print them : 

const fruits = {
    apple : 40 ,
    banana : 30 ,
    mango : 22 ,
} ;

Object.entries(fruits).forEach(([fruit , price]) => {console.log(`${fruit} : ${price}`)}) ;