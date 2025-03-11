let total = 1500;

if (total > 5000) {
    console.log("You've got 20% discount")
}else if (total > 2000 && total < 5000){
    console.log("You've got 10% discount")
}else if (total < 2000){
    console.log("Add more items to get additional discount")
}