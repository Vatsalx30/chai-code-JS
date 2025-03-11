//constructor and initialization
function bankaccount (accountnumber,name,balance){
    this.accountnumber = accountnumber;
    this.name = name;
    this.balance = balance;
};

// deposit
bankaccount.prototype.deposit = function(amount){
    if(amount <= 0 ){
        return `amount can't be 0`
    }
    else{
        amount += this.balance;
        return `${amount} is successfully deposited, Current balance is ${this.balance} `
    };
};

//withdraw 
bankaccount.prototype.withdraw = function (amount){
    if(amount >= this.balance){
        return `Insufficient balance current balance is ${this.balance}`;
    }
    else if (amount <= 0){
        return `Withdrawal amount can't be 0`
    }
    else {
        amount -= this.balance;
        return `$${this.amount} has successfully withdrawed, Current balance is ${this.balance}`
    }
};

bankaccount.prototype.transfer = function (amount,recipentbankaccount){
    if(amount >= this.balance){
        return `Insufficient balance current balance is ${this.balance}`
    }
    else if (amount <= 0){
        return `Transfer amount can't be 0`
    }
    else {
        amount -= this.balance;
        amount += this.recipentbankaccount;
        return `$${this.amount} has successfully transfered to ${recipentbankaccount} current balance is $${this.balance}`
    }
};

//accessing account details 
bankaccount.prototype.getaccountdetails = function(){
    return `${this.name}'s account number is ${this.accountnumber}'s current balance is ${this.balance}`
};

//account storage

const account = [
    new bankaccount (102,`virar`,2000),
    new bankaccount (111,`siraj`,9000),
    new bankaccount (12,`yuvraj`,333),
];

//function to find an account by account by account number

function findaccount(accountnumber){
    return account.find(account => account.accountnumber === accountnumber);
};

//list all accounts

function listallaccounts(){
    console.log(`\n bank account list : `);
    account.forEach(account => {
        console.group
    });
};

//testing the system

console.log(account[0].deposit(2000));
console.log(account[1].withdraw(3000));
console.log(account[2].withdraw(1500,account[0]));

listallaccounts();

console.log(`\n searching for account`);
console.log(findaccount(102).getaccountdetails());
