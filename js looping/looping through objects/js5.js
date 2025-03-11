//generate a query string from this object
const parms = {
    search : `phone` ,
    catagory : `electronics` ,
    limit : 5 ,
} ;

const querystring = Object.entries(parms).map(([key ,value]) => `${key}=${value}`).join(`&`) ;

console.log(querystring) ;