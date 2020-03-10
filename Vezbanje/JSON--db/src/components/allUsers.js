import axios from "axios";
function allUsers() {
    return axios.get('http://localhost:3000/users')
    // .then(res=>{
    //     console.log(res);  //stampa ceo data objekat 
    //     let { data } = res; //object destructuring i dolazimo do unutrasnjeg niza koji sadzi objekte
    //     console.log(data);
    //     data.forEach(el => { //ovde prolazimo kroz niz
    //         // console.log(el); //stampamo svaki objekat
    //         // if (el.id == 2) console.log(`Ovo je iz IF-a ${el.title}`); // mora da se doda title jer bez toga ispisuje Object/object            
    //         el.id == 2 ? console.log(`Ovo je iz IF-a ${el.title}`) : console.log(`El ${el.title} ne zadovoljava kriterujum`);       
    //     });

    // }
    // )
    .then(res => {
        let { data } = res;
            data.forEach(user => {     
            printUser(user);
        });
    })

}
let app = document.querySelector('#app');
const printUser = (el) => {
let user = document.createElement('div');
user.innerHTML = `<p class="unos">Ovo je korisnik imena: ${el.name}, njegova sifra je ${el.password}</p>`
let del = document.createElement('button');
del.textContent = 'X';
del.value = el.id;
del.addEventListener('click', (el)=>{
    //console.log(el.target.parentElement);
    console.log(del.value);       
    el.target.parentElement.remove();
    delUser(del.value); 
})
user.appendChild(del);
app.appendChild(user);
}

export { allUsers, printUser}

const delUser = (us)=>{
    axios.delete(`http://localhost:3000/users/${us}`)
}