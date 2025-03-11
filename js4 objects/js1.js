// problem : create a array containing diffrent types of teas
const teas = ["green tea","black tea","oolong tea","white tea","herbal tea","masala tea"];


// add chamoile tea to the existing list of teas

teas.push("Chamomile tea");

//remove oolong tea from the list of teas
const index = teas.indexOf("oolong tea")
if (index > -1){
    teas.splice(index, 1);  
}

//filter the list to only include teas that are caffinated
const caffinatedTeas = teas.filter(teas => teas !== "herbal tea");

//sort the list of teas in alphabetical order
const test = ["murgi","anda"];
console.log(test.sort());

//use a for looop to print each type of tea in a array.
for (let i = 0; i < teas.length; i ++){
    console.log(teas[i])
}

//use a for looop to count how many teas are caffinated (excluding herbal tea)
let caffinatedmyteas = [];

for (let i = 0; i < teas.length; i ++){
    if(teas[i] !== "herbal tea"){
        caffinatedmyteas ++
    }
}

//use a for loop to create a new array with all tea names in uppercase.
const upcase = [];
for (let i = 0; i < teas.length; i ++){
    upcase.push(teas[i].toUpperCase)
}

//use a forloop to find the tea name with the most character.
const longesttea = "";
for (i = 0; i < teas.length; i ++) {
    if(teas[i].length > longesttea.length){
        longesttea = teas[i];
    }
};

// use a for loop to reverse the order of teas in the array
const reveresedArray = [];
for(let i = teas.length -1; i >= 0; i --){
    reveresedArray.push(teas[i]);
};