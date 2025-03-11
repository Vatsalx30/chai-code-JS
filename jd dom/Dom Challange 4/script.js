
// lets delcare variables first 
const input = document.getElementById('task-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('ul');


//now let's add event listner like what happens
btn.addEventListener('click', () => {
    const value = input.value.trim();

// if there is no value throw a alert 
    if (!value) return alert('Please enter a task!');


// let's add a li element along with X button

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${value}</span>
        <button class="delete-btn">X</button>
    `;

// append that element in our ul
    list.appendChild(taskItem);

// clear the input after once button clicked
    input.value = '';

// delete button functionality
    taskItem.querySelector('.delete-btn').addEventListener('click', () => {
        taskItem.remove();
    });
});