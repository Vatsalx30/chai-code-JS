//you'll need to create a constructor that takes name as parameters. add a method make sound to it's prototype,which always return `some generic sound`.

function Animal (name){
    this.name = name ;
};

Animal.prototype.makeSound = function(){
    return `${this.name`some generic sound`}`
} ;