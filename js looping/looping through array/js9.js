const users = [
    { name : `alice`,age : 22},
    { name : `bob`,age : 17},
    {name : `charlie`,age : 25},
];

let o18 = [];

users.forEach((i) => {
    if(i.age >= 18){
        o18.push(i);
    }
});

console.log(o18);

