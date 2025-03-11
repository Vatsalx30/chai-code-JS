//create a shopping cart system where items can be added with price. implement a method getTotalPrice() that calulates the total price of all items in the cart 

function ShoppingCart () {
    this.items = [] ;
} ;

ShoppingCart.prototype.addItem = function (price) {
    this.items.push(price) ;
} ;

ShoppingCart.prototype.getTotalPrice = function () {
    let total = 0 ;
    this.items.forEach((value) => {
        total += value ;
    }) ;
    return total ;
} ;