import axios from "axios";

let ime = document.querySelector('#ime');
let broj = document.querySelector('#broj');
let btn = document.querySelector('#btn');
let ispis = document.querySelector('#ispis');
let form = document.querySelector('#forma');

const pocetna = () => {
    axios.get('http://localhost:3000/users')
        .then(res => displayUsers(res.data));
}

const displayUsers = users => {
    ispis.innerHTML = '';
    users.forEach(displayUser);
}
const displayUser = (user) => {
    ispis.innerHTML += `<div class="kontakt">${user.name} - ${user.number}</div>`
}
pocetna();

const createUser = () => {
    const name = ime.value;
    const number = broj.value;
    if (name == '' || number == '')
        return
    axios.post('http://localhost:3000/users', { id: Math.random(), name: name, number: number })
        .then(res => displayUser(res.data));
}
btn.addEventListener('click', (e) => {
    e.preventDefault();
    createUser();
    form.reset();
})

const search = document.querySelector('#search');
search.addEventListener('keyup', (e) => {
    const trazi = e.target.value.toLowerCase();
    const users = document.querySelectorAll('.kontakt');

    for (let i = 0; i < users.length; i++) {
        users[i].style.display = 'none';
        if (users[i].innerHTML.toLowerCase().includes(trazi)) {
            users[i].style.display = '';
        }

    }
})

/*
1. u package.json dodamo ovo u "scripts" ovaj prvi deo je key i to je opcioni parametar "json-server": "json-server --watch db.json"
2. instal npm json server --save-dev install
3. install npm install -save axios
4. npm run json-server
5. npm start u drugom terminalu


*/