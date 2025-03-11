function animal (name){
    this.name = name;
}

animal.prototype.sayHello = function(){
    console.log(`hello i am` + this.name);
};

let dog = new animal(`buddy`);

dog.sayHello();

console.log(dog.__proto__ === Object.prototype);