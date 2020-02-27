// import { removeTask, changeTask, tasks } from './logic';

// let tasksContainer = document.querySelector('#tasks-container');

// const renderTask = (tasks) => {
//     let taskItem = document.createElement('div');
//     taskItem.className = 'task-item';

//     let taskTitle = document.createElement('p');
//     taskTitle.className = 'task-title';
//     taskTitle.textContent = tasks.desc;
//     taskItem.appendChild = taskTitle;

//     let taskCheck = document.createElement('div');
//     taskCheck.className = 'task-check';

//     let button = document.createElement('button');
//     button.className = 'task-remove-btn';
//     button.innerText = 'X';
//     button.addEventListener('click', () => {
//         removeTask(tasks.id);
//         taskItem.remove();
//     })

//     let input = document.createElement('input');
//     input.type = 'checkbox';
//     input.checked = tasks.done;
//     input.addEventListener('click', () => {
//         changeTask(tasks.id);
//         if (input.checked) {
//             taskTitle.style.textDecoration = 'line-through';
//         } else {
//             taskTitle.style.textDecoration = 'none';
//         }
//     })
//     taskCheck.appendChild = button;
//     taskCheck.appendChild = input;
//     taskItem.appendChild = taskCheck;
//     tasksContainer.appendChild = taskItem;
// }

// const renderTasks = () => {
//     // tasks.forEach((e) => {
//     //     renderTask(e);
//     // })
//     tasksContainer.innerHTML = '';
//     tasks.forEach(renderTask); //foreach prima funkciju kao parametar
// }
// export { renderTask, renderTasks }

import { removeTask, changeTask, tasks } from './logic'

const tasksContainer = document.querySelector('#tasks-container')

const renderTask = (task) => {
    const taskContainer = document.createElement('div')
    taskContainer.className = 'task-item'

    const taskTitle = document.createElement('p')
    taskTitle.className = 'task-title'
    taskTitle.textContent = task.desc
    taskContainer.appendChild(taskTitle)

    const taskCheck = document.createElement('div')
    taskCheck.className = 'task-check'

    const removeBtn = document.createElement('button')
    removeBtn.className = 'task-remove-btn'
    removeBtn.textContent = 'X'
    removeBtn.addEventListener('click', () => {
        removeTask(task.id)
        taskContainer.remove()
    })
    taskCheck.appendChild(removeBtn)

    const cbDone = document.createElement('input')
    cbDone.type = 'checkbox'
        // cbDone.className = 'chk-state'
    cbDone.checked = task.done
    cbDone.addEventListener('change', () => {
        changeTask(task.id)
        if (cbDone.checked) {
            taskTitle.style.textDecoration = 'line-through'
        } else {
            taskTitle.style.textDecoration = 'none'
        }
    })
    taskCheck.appendChild(cbDone)

    taskContainer.appendChild(taskCheck)
    tasksContainer.appendChild(taskContainer)
}


const renderTasks = () => {
    tasksContainer.innerHTML = ''
    tasks.forEach((el) => {
        renderTask(el)
    })
}

export { renderTask, renderTasks }