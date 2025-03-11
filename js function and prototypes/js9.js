//you're building a banking system where multiple bank accounts can exist. Each account has an account number,holdername, and balance. Implement following methods
//1 . deposit(amount) ;
//2 . withdraw(amount) ;
//3 . transfer(amount , targetAccount) ;

function BankAccount (accountNumber , holdername , balance) {
    this.accountNumber = accountNumber ;
    this.holdername = holdername ;
    this.balance = balance ;
} ;

BankAccount.prototype.deposit = function (amount) {
    if(amount <= 0) {
        return `Deposit amount can't be 0 or negative`
    } else {
        `${amount} is successfully deposited !`
        this.balance += amount ;
    }
} ;

BankAccount.prototype.withdraw = function (amount) {
    if(amount > this.balance) {
        return `Insufficient balance, Current balance is ${this.balance} !`
    } else {
        this.balance -= amount
        return `Withdrawal of ${amount} is successfull !`
    } ;
} ;

BankAccount.prototype.Transfer = function (amount , targetAccount) {
    if(amount > this.balance) {
        return `Insufficient balance, Current balance is ${this.balance }` ;
    } else {
        this.balance -= amount ;
        this.targetAccount += amount ;
        return `Transfer of ${amount} is successfull in  ${targetAccount}` ;
    } ;
} ;