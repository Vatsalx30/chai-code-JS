let input = document.getElementById(`todo-input`) ;
let btn = document.getElementById(`Add-Btn`) ;
let list = document.getElementById(`Todo-list`);

btn.addEventListener(`click` , () => {
    let value = input.value ;

    let List1 = document.createElement(`li`) ;
    let del = document.createElement(`button`);

    del.addEventListener(`click` , () => {
        list.remove() ;
    }) ;

    del.innerText = `X` ;


    list.appendChild(List1);
    list.appendChild(del) ;
    List1.innerText = value ;
    
    input.value = ``;
}); 