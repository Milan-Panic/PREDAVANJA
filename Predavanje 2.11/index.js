// getMOTD('Milane', 'Panic');

// function info(ime, prez, datum, brojP) {
//     console.log(`${ime} ${prez} je radio test dana ${datum} i imao ovaj broj poena ${brojP}`);
// }
// info('Milan', 'Panic', '10.02.2020.', '102');


// let name = 'Milan',
//     prezime = 'Panic';

// function getMOTD(name, prezime) {
//     console.log(`Dobar dan ${name} ${prezime}, kako ste?!`);

// }
// const app = document.querySelector('#app');
// console.log(app);

// app.innerHTML = `<h3>${getMOTD(name,prezime)}</h3>`;


var app = document.querySelector('#app');
let vrem = new Date();
let dan = vrem.getDay();
let niz = ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Cetvrtak', 'Petak', 'Subota'];
console.log(niz[dan]);

function vreme() {
    let vr = new Date();
    return `${vr.getHours()}:${vr.getMinutes()}:${vr.getSeconds()}`
}
setInterval(function() {
    app.innerHTML = `<h3>${vreme()}</h3>`;
    app.innerHTML += `${niz[dan]}`;

}, 500)