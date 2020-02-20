let tasks = [];
let counter = 0;
//uuidv()
//npm install uuid
//treba i uvesti u fajl
const todoForm = document.querySelector("#todo-add");
const descInput = document.querySelector("#desc");
const taskList = document.querySelector("#list");

let currDesc = '';
todoForm.addEventListener('submit', addTask);

descInput.addEventListener('input', (e) => {
    currDesc = e.target.value;
})

function addTask(e) {
    e.preventDefault();
    if (currDesc.trim() == '') {
        descInput.value = '';
        currDesc = '';
        return;
    }
    //uzmemo iz inputa
    //dodajemo u niz
    //dodajemo na stranicu
    let task = {
        id: counter,
        desc: currDesc
    }
    counter++;
    tasks.push(task)
    randerHTML();
    descInput.value = '';
    currDesc = '';
}

function randerHTML() {
    taskList.innerHTML = ''
    tasks.forEach(task => {
        taskList.innerHTML += content(task);

    })
}


function content(todo) {

    return `<div class="list-item">
    <li>${todo.desc}</li>
        <div id="list-control">
            <input type="checkbox" name="" class="cb" id="${todo.id}-cb">
            <button id="${todo.id}-del">X</button>
        </div>
    </div>`
}
const testCheck = document.querySelector('#test-cb');
testCheck.addEventListener('change', (e) => {
    if (!e.target.checked) {
        e.target.parentElement.previousElementSibling
            .style.textDecoration = 'line-through';
        //e.target.value = !e.target.checked
    } else {
        e.target.parentElement.previousElementSibling
            .style.textDecoration = 'none';
    }
})
const izbrisi = document.querySelector(`#test-del`);
izbrisi.addEventListener('click', (el) => {
    el.target.parentElement.remuveElement;
})