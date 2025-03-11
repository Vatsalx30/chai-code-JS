const numbers = [1,-2,423,234-32433,4324322,4234,4234,-444,22,-34,-234,-24334,-3,432];

let positive = [];
let negative = [];

numbers.forEach((num) => {
    if(num < 0){
        negative.push(num);
    } else {
        positive.push(num);
    }
});

console.log(positive);
console.log(negative);
