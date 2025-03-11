// you're developing an online store system where each product has the following properties :
// name : the name of the product 
// price : the price of the product
// stock : the available stock 

function Product (name , price , stock) {
    this.name = name ;
    this.price = price ;
    this.stock = stock ;
} ;

Product.prototype.applyDiscount = function (percent) {
    this.price = Math.round(this.price * (percent / 100 )) ; 
} ;

Product.prototype.purchase = function (quantity) {
    if(this.stock >= quantity) {
        return `Here you go !` ;
        this.stock -= quantity
    } else {
        return `Not enough stock !`
    } ;
} ;