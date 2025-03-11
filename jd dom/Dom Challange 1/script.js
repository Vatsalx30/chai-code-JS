document,addEventListener(`DOMContentLoaded` , () => {
    let Button = document.getElementById(`btn`) ;
    let bulb = document.getElementById(`bulb`) ;

    Button.addEventListener(`click` , Change) ;

    function Change () {
        if(bulb.src.endsWith(`bulb-off.png`)) {
            bulb.src = `res/bulb-on.png` ;
            Button.textContent = `Turn Off` ;
        } else { 
            bulb.src = `res/bulb-off.png` ;
            Button.textContent = `Turn on`
        }
    } ;
})