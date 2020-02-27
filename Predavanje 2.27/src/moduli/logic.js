// import { v1 as uuidv1 } from 'uuid';
// let tasks = [];

// // let task = {
// //     id: 'sadasad',
// //     desc: 'djjsak',
// //     done: false
// // }

// const addTask = (txt) => {
//     let task = {
//         id: uuidv1(),
//         desc: txt,
//         done: false
//     }
//     tasks.push(task)
// }

// const removeTask = (id) => {
//     //splice(2,4) pozicija, broj elemenata, ako stavimo i treci parametar to ubacuje na mesto obrisanog
//     let index = tasks.findIndex(task => task.id == id);
//     if (index == -1) {
//         return; //provera ali nije potrebno u ovom slucaju
//     }
//     tasks.splice(index, 1);

// }

// const changeTask = (id) => {
//     let index = tasks.findIndex(task => task.id == id);
//     tasks[index].done = !tasks[index].done /*task ovog indeksa izjednacavamo da je jednak kontra vrednosti samog taska (NE STAVLJAMO TRUE ILI FALSE), onda ovo radi kao mali switch i tako moze da se menja vrednost*/
// }
// export { tasks, addTask, removeTask, changeTask };





import { v1 as uuidv1 } from 'uuid';

let tasks = [];

// let task = {
//     id: 'dskjsdfs121',
//     desc: 'jkfsldkfsd',
//     done: false
// }
const addTask = (txt) => {
    let task = {
        id: uuidv1(),
        desc: txt,
        done: false
    }
    tasks.push(task)
}

const removeTask = (id) => {
    // splice(index,1)
    // for(let i = 0; tasks.length; i++){
    //     if(tasks[i].id == id){
    //         tasks.splice(i,1)
    //     }
    // }
    let index = tasks.findIndex(task => task.id == id)
    if (index == -1) {
        console.error('Nesto nije dobro')
        return
    }
    tasks.splice(index, 1)
}

const changeTask = (id) => {
    let index = tasks.findIndex(task => task.id == id)
    if (index == -1) {
        console.error('Nesto nije dobro')
        return
    }
    tasks[index].done = !tasks[index].done
}

export { tasks, addTask, removeTask, changeTask }