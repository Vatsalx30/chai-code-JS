function bankaccount (name,balance){
    this.name = name;
    this.balance = balance;
};

bankaccount.prototype.transfer = function(amount){
    if(amount > this.balance){
        return `insufficient amount`
    }
    else {
        this.balance -= amount;
        return `${amount} has been successfully transfered with the name ${this.name} current balance is ${this.balance}`
    }
};

const person1 = new bankaccount (`virat`,`200`); 
const person2 = new bankaccount (`rohit`,`10`);

console.log(person1.transfer(1000));