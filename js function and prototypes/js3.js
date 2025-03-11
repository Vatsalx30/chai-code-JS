//You'll need to create a constructor function that initialize a count property to 0.The counter should have two prototype methods : 1. increment () increses the count by 1. 2.decrement () decreases the count by 1.

function Counter () {
    this.count = 0 ;
} ;

Counter.prototype.increment = function () {
    this.count += 1 ;
} ;

Counter.prototype.decrement = function () {
    this.count -= 1 ;
} ;