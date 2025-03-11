let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c){
    console.log("A is greatest");
}else if(b > a && b > c){
    console.log("B is greatest");
}else if(c > a && c > b){
    console.log("C is greatest");
}else if (a === b && b == c){
    console.log("Everything is equal");
}