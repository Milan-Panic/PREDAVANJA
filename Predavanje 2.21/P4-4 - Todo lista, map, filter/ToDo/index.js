let tasks = [];
let counter = 0;
// uuidv1()
// npm install uuid

const todoForm = document.querySelector('#todo-add');
const descInput = document.querySelector('#desc');
const taskList = document.querySelector('#list');
console.log(taskList)
let currDesc = '';

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (currDesc.trim() == '') {
        alert('Ne moze prazan string')
        descInput.value = '';
        currDesc = '';
        return;
    }
    // Dodajemo u niz
    let task = {
        id: 'task-' + counter,
        desc: currDesc.trim(),
        checked:false
    }
    counter++;
    tasks.push(task);
    console.log(tasks)
    // Dodajemo u listu na stranici
    addTaskHTML(task);
    descInput.value = '';
    currDesc = '';
    
});


descInput.addEventListener('input', (e) => {
    currDesc = e.target.value;
    // console.log(currDesc);
})





// TODO: Transform template string to Nodes
// TODO: Add event listeners to checkbox and button nodes 
const addTaskHTML = (task) => {
    let listItem = document.createElement('div');// List Item contaier
    let taskDesc = document.createElement('li');//Task description
    let listControl = document.createElement('div');//Task control container
    let checkTask = document.createElement('input');//Task checker
    let btnDelete = document.createElement('button');//Delete task button

    //listItem
    listItem.className='list-item';//class="list-item"

    //taskDesc
    taskDesc.innerText=task.desc;//<li>${task.desc}</li>
    listItem.appendChild(taskDesc);

    //listControl
    listControl.id='list-control';//id="list-control"

    //checkTask
    checkTask.type='checkbox'; // type="checkbox"
    checkTask.addEventListener('change', (e) => {
        if (e.target.checked) {
            e.target.parentElement
                .previousElementSibling
                .style.textDecoration = 'line-through';
        }
        else {
            e.target.parentElement
                .previousElementSibling
                .style.textDecoration = 'none';
        }
        task.checked=e.target.checked
        // e.target.value = !e.target.checked;
    }); // Dodavanje dogadjaja checkboxu
    listControl.appendChild(checkTask);

    //btnDelete
    btnDelete.innerText='X';
    btnDelete.addEventListener('click',(e)=>{
        console.log(e);
        listItem.remove();
    });
    listControl.appendChild(btnDelete);//dodavanje dugmeta

    listItem.appendChild(listControl);//Dodavanje u omotac taska

    taskList.appendChild(listItem);//Dodavanje u listu
}






