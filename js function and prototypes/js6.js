//create a bank account constructor that initalizes 
// A balance property represesnting the account balance 
// A transections array to all deposit and withdrawal activities

function BankAccount(balance) {
    this.balance = balance ;
    this.transaction = [] ;
} ;

BankAccount.prototype.Deposit = function (amount) {
    if(amount <= 0) {
        return `Deposit amount can't be 0 or negative`
    } else {
        this.balance += amount ;
        return `Deposited ${amount} successfully` ;
        this.transaction.push(`+${amount}`)
    } ;
} ;

BankAccount.prototype.Withdraw = function (amount) {
    if(amount > this.balance || amount === 0) {
        return `Insufficient balance, Current balance is ${this.balance}` ;
    } else {
        this.balance -= amount ;
        return `Withdrawal of ${amount} is successful`
        this.transaction.push(`-${amount}`) ;
        } ;
} ;

BankAccount.prototype.getTransactionHistory = function () {
    return this.transaction ;
} ;