// // /*map funkcija, poziva funkciju za svaki element niza, map vrati novi niz koji je zapravo transformisni stari niz.

// // uzima neki niz transforimise i vraca nov niz, kako transformise mi to definisemo u telu funkcije map-a
// // */
// let brojevi = [1, 54, 7, 8, 2, 0, 2];
// // //let pola_brojevi = [0.5,...]
// // let pola_brojevi = brojevi.map((element) => {
// //         return element / 2;
// //     })
// //     //console.log(pola_brojevi);
// // let zadatak = brojevi.map((ele) => {
// //         if (ele > 5) {
// //             return ele = 10;
// //         }
// //         if (ele <= 5) {
// //             return ele = 0;
// //         }
// //     })
// //     //console.log(zadatak);

// let imena = ['Cvijan', 'Andjela', 'Dusan', 'Laki', 'Marko', 'Srdjan', 'Nikola', 'Milica'];
// let pokloni = imena.map((ime, pozicija) => {
//         if (pozicija % 4 == 0) {
//             return `${ime} dobija ugalj!`;
//         } else {
//             return `${ime} dobija poklon!`;

//         }
//     })
//     //console.log(pokloni);
// let osobe = [{
//         ime: 'Cvijan',
//         jezik: 'Python'
//     },
//     {
//         ime: 'Andjela',
//         jezik: 'Java'
//     },
//     {
//         ime: 'Marko',
//         jezik: 'JavaScript'
//     }
// ];
// let poruke = osobe.map((osoba) => {
//         return `${osoba.ime} voli ${osoba.jezik}`;
//     })
//     //console.log(poruke);

// /*
// funkcija filter prima kolbek funkciju, koja prima tri parametra i vraca novi niz. Povratna vrednost ove funkcije unutar filtera je bulean da li se element sadrzi ili ne sadrzi u nizu. 

// */
// let ljubiteljiJS = osobe.filter(osoba => {
//         return osoba.jezik == 'JavaScript';
//         S
//     })
//     //console.log(ljubiteljiJS);
// let brojeviVeciOdPet = brojevi.filter(broj => {

//         return broj > 5; //ovako ne moramo da pisemo ceo onaj uslov u if

//     })
//     //console.log(brojeviVeciOdPet);
//     // flet se koristi ako imamo u nizu podnizove, moze da se podesava i dubina
// let niz = [{
//         ime: 'Pera',
//         age: 23
//     },
//     {
//         ime: 'Mirko',
//         age: 43
//     },
//     {
//         ime: 'Milica',
//         age: 13
//     },
//     {
//         ime: 'Jelena',
//         age: 18
//     }
// ]
// let punoletni = niz.filter(osoba => {
//     return osoba.age > 17;
// }).map((osoba) => {

//     return `${osoba.ime} ima ${osoba.age}`;
// })
// console.log(punoletni);
let dugme = document.querySelector('#btn-auto');
dugme.addEventListener('click', () => {
        let select = document.querySelector('#auto-marka').value
        let ispis = document.querySelector('#ispis');
        ispis.classList.add(select);
    })
    /*funkcija finde ima kolbek funkciju a kao povratnu vrednost daje prvi element koji zadovoljava uslov a uslov pisemo u telu funkcije kao u filter, za sve elemente ima i funkcija findAll*/

// let selectElement = document.querySelector('#auto-marka');
// selectElement.addEventListener('change', (e) => {
//         // console.log(e);
//         // console.log(e.target.value);
//         // console.log(e.target.selectedIndex);
//         // let index = e.target.selectedIndex
//         // console.log(e.target.options[index].label);

//     }) //multiple = true  da se selektuje vise od jednog