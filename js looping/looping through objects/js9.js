const obj = {
    short : 10 ,
    longer : 20 ,
    longestName : 30 ,
} ;

const longestName = Object.keys(obj).reduce((longest , current) => 
    current.length > longest.length ? current : longest
) ;

console.log(`longest key : `, longestKey) ;

