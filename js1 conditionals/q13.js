let hour = 12;

if(hour < 0 || hour > 23){
    console.log("Invalid Time");
}else if (hour >= 5 && hour <= 11){
    console.log("Good morning")
}else if (hour >= 12 && hour < 16){
    console.log("Good afternoon");
}else if (hour >= 17 && hour <= 20){
    console.log("Good Evening")
}else {
    console.log("Good night");
};