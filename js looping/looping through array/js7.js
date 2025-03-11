function shoppingcart (price){
    let total = 0;

    price.forEach((value) => {total += value});

    return total;
};

