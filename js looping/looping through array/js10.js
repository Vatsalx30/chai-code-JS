function countoccrence (arr , value){
    let count = 0 ;

    arr.forEach((item) => {
        if(item === value){
            count ++;
        }
    }) ;

    return count ;
};