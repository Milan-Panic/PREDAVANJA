// import { renderTask, renderTasks } from "./moduli/ui";
// import { addTask } from "./moduli/logic";

// renderTasks();

// const inputField = document.querySelector('#txt-title');
// const formAdd = document.querySelector('#form-add');

// formAdd.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (inputField.value.trim() == '') {
//         inputField.value = '';
//         alert('Task ne moze biti prazan');
//         return;
//     }
//     addTask(inputField.value.trim())
//     inputField.value = '';
//     renderTask();
// })


import { renderTasks } from "./moduli/ui"
import { addTask } from "./moduli/logic"

renderTasks()

const inputField = document.querySelector('#txt-title')
const formAdd = document.querySelector('#form-add')

formAdd.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inputField.value.trim() == '') {
        inputField.value = ''
        alert('Task ne moze biti prazan')
        return
    }
    addTask(inputField.value.trim())
    inputField.value = ''
    renderTasks();
})