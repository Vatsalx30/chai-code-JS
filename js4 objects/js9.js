function user (username){
    this.username = username;
};
user.prototype.login = function(){
    return `${this.username} has successfully loogged in`
};
user.prototype.postmessage = function (message){
    return `${this.user} has posted ${this.postmessage}`;
};

const user1 = new user (`siraj`);

console.log(user1.login());
console.log(user1.postmessage(`hii shami bhai`));
