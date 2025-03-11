let ColorButtons = {
    Purple : `purple` ,
    Red :  `red` ,
    Blue : `blue` ,
    Green : `green` ,
    Coffee : `brown` ,
    Yellow : `yellow` ,
} ;

Object.keys(ColorButtons).forEach(id => {
    let button = document.getElementById(id) ;

    if(button) {
        button.addEventListener(`click`, () => {
            document.body.style.color = ColorButtons[id] ;
        }) ;
    }; 
})