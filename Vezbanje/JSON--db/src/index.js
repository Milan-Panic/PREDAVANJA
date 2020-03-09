import { allUsers, printUser } from "./components/allUsers";
import axios from "axios";

allUsers()

//let app = document.querySelector('#app');
let btn = document.querySelector('#btn');
let name = document.querySelector('#name');
let password = document.querySelector('#password');
let form = document.querySelector('#form');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    //app.innerHTML = '';
    let ime = name.value;
    let sifra = password.value;

    console.log(ime, sifra);
    let user = { id: Math.random(), name: ime, password: sifra };
    axios.post('http://localhost:3000/users', user)
    form.reset();
    printUser(user);
})

const pretraga = document.querySelector('#search');


pretraga.addEventListener('input', () => {
    let sviKorisnici = document.querySelectorAll('.unos');
    
    sviKorisnici.forEach(el=>{
        //console.log(el.innerHTML);
        if (el.innerHTML.toLowerCase().indexOf(pretraga.value.toLowerCase()) != -1) {
            el.parentElement.style.display = 'block';
        }else{
            el.parentElement.style.display = 'none';
        }
    })
})
