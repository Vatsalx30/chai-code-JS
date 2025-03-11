const dog = {
    name : `dugo`,
    breed : `golden retriver`,
    age : 2,
    bark : function (){
        return `woof`;
    },
};

dog.favourite_toy = `season ball`;
dog.describe = function(){
    return `name is ${this.name}, breed is ${this.breed}, age is ${this.age}`
};

console.log(dog.describe());

