import { ServiceGet, ServicePut, userMsgs } from "./components/services"

let nadimak;
let moje = document.querySelector('#moje');
let vr = document.querySelector('#nadimak');
const svePoruke = () => {
    ServiceGet().then(res => {
        let { data } = res.data;
        data.forEach(poruka => {
            porukeIpis(poruka)
        });

    })
}
const formatDate = date => {
    const vreme = new Date(date);
    return `${vreme.getMonth()+1}/${vreme.getDate()}/${vreme.getFullYear()}`
}
let container = document.querySelector('#poruke');

const porukeIpis = (el) => {
    let task = document.createElement('p');
    task.className = 'poruka';
    task.innerHTML = `<span class="salje">${el.username}</span><br><span class="msg">${el.message}</span><br><span class="vreme">${formatDate(el.timestamp)}</span>`
    container.appendChild(task);
}

svePoruke()

let button1 = document.querySelector('#btn1');
button1.addEventListener('click', (e) => {
    e.preventDefault();
    nadimak = vr.value;
})


let poruka = document.querySelector('#poruka');
let button2 = document.querySelector('#btn2');
button2.addEventListener('click', e => {
    e.preventDefault();
    if (nadimak == '') {
        alert('Morate upisati korisnicko ime!!!');
        return
    }
    container.innerHTML = '';
    ServicePut(nadimak, poruka.value)
        .then(() => {
            svePoruke()
        })
})


const mojePoruke = (el) => {
    let task = document.createElement('p');
    task.className = 'poruka';
    task.innerHTML = `<span class="salje">${el.username}</span><br><span class="msg">${el.message}</span><br><span class="vreme">${formatDate(el.timestamp)}</span>`
    moje.appendChild(task);
}
const sveMoje = () => {
    userMsgs(nadimak).then(res => {
        console.log(res);

        let { data } = res; //ovde idemo korak manje u dubinu
        console.log(data);

        data.messages.forEach(poruka => {
            mojePoruke(poruka)
            console.log(data);
        });

    })
}
const button3 = document.querySelector('#btn3');
button3.addEventListener('click', (e) => {
    if (vr.value == '') {
        alert('Morate upisati korisnicko ime!!!');
        return
    }
    sveMoje();
})