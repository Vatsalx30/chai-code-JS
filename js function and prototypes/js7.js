//create an employee constructor that initialize name , position and salary implement 
// applyBonus(percent) : increases the salary by given percentage 

function Employee(name , position , salary) {
    this.name = name ;
    this.position = position ;
    this.salary = salary ;
} ;

Employee.prototype.applyBonus = function (percent) {
    this.salary = Math.round(this.salary + this.salary * (percent / 100)) ;
} ; 