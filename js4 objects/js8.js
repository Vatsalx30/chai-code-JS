function product (name,price){
    this.name = name;
    this.price = price;
};

product.prototype.getdiscountedprice = function(discount){
    return this.price - (this.price * (discount/100));
};
const product1 = new product(`mac`,1000);

console.log(product1.getdiscountedprice(1));