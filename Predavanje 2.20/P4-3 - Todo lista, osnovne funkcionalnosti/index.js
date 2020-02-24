let tasks = [];
let counter = 0;
// uuidv1()
// npm install uuid

const todoForm = document.querySelector('#todo-add');
const descInput = document.querySelector('#desc');
const taskList = document.querySelector('#list');
console.log(taskList)
let currDesc = '';

todoForm.addEventListener('submit',(e) => {
    e.preventDefault();
    if(currDesc.trim() == ''){
        alert('Ne moze prazan string')
        descInput.value = '';
        currDesc = '';
        return;
    }
    // Dodajemo u niz
    let task = {
        id: 'task-' + counter,
        desc: currDesc.trim()
    }
    counter++;
    tasks.push(task);
    console.log(tasks)
    // Dodajemo u listu na stranici
    addTaskHTML(task);
    descInput.value = '';
    currDesc = '';
    

    let testCheck = document.querySelector('#' + task.id + '-cb');
    testCheck.addEventListener('change',(e) => {
        if(e.target.checked){
            e.target.parentElement
                    .previousElementSibling
                    .style.textDecoration = 'line-through';
        }
        else{
            e.target.parentElement
                    .previousElementSibling
                    .style.textDecoration = 'none';
        }

    // e.target.value = !e.target.checked;
    })
});


descInput.addEventListener('input',(e) => {
    currDesc = e.target.value;
    // console.log(currDesc);
})






const addTaskHTML = (task) => {
    taskList.innerHTML += 
        `<div class="list-item">
            <li>${task.desc}</li>
            <div id="list-control">
                <input type="checkbox" name="" id="${task.id}-cb">
                <button id="${task.id}-del">X</button>
            </div>
        </div>`
}






