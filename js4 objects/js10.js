function driver (name,car){
    this.name = name;
    this.car = car;
};

driver.prototype.totalfare = function(distance,rate){
    return distance * rate;
};

const driver1 = new driver (`john`,`mazda`);
const driver2 = new driver (`steve`,`porsche stuutgart`);

console.log(`${driver1.name}'s fare is ${driver1.totalfare(3,45)}`);

console.log(`${driver2.name}'s fare is ${driver2.totalfare(2,2)}`);