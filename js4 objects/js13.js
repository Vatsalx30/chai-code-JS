//constructor and initializing

function player (name,health){
    this.name = name;
    this.health = health;
};

//attacking prototype

player.prototype.attack = function (target){
    return `player${this.name} has attacked on ${target}`;

};

//defending prototype

player.prototype.defend = function(target){
    return `player${this.name} has defend`
};

//creating players 

const player1 = new player (`virat`,`100`);

console.log(player1.attack(`dragon`));