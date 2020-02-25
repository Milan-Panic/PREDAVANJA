import { Form1Node } from './components/componentA'
import { SelectForm } from './components/componentB'
import NumberList from './components/componentC'

let btn1 = document.querySelector('#form1');
let btn2 = document.querySelector('#form2');
let btn3 = document.querySelector('#list');

let nizBrojeva = [2, 5, 6, 8, 5, 3, 2, 4, 85, 23, 454]


let app = document.querySelector('#app');
btn1.addEventListener('click', () => {
    app.innerHTML = ''
    app.appendChild(Form1Node());
});
btn2.addEventListener('click', () => {
    app.innerHTML = ''
    app.appendChild(SelectForm());
})
btn3.addEventListener('click', () => {
    app.innerHTML = ''
    app.appendChild(NumberList(nizBrojeva));
})