// you are designing a simple robot system. each robot has a name and a battry level. the robot should have a method charge () that increases the bettry level by 20, but it cannot exceed 100.

function Robot (name , battryLevel) {
    this.name = name ;
    this.battryLevel = battryLevel ;
}

Robot.prototype.charge = function () {
    this.battryLevel = Math.min(this.battryLevel + 20 , 100) ;
} ;