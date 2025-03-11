function person (fname , lname , age){
    this.fname = fname;
    this.lname  = lname;
    this.age = age;
};

person.prototype.fullname = function(){
    return this.fname + ` ` + this.lname + ` ` + this.age
};

const person1 = new person (`john`,`snow`,30);

console.log(person1.fullname());