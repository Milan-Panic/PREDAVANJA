// let niz = [2, 3, 1, 4, 5, 2, 3, 1];
// niz.sort((a, b) => a - b); //za opadajuci ide samo b - a merge sort
// // console.log(niz);
// // console.log('******************');

// for (let i = 0; i < niz.length; i++) { //selection sort 
//     for (let j = i + 1; j < niz.length; j++) {
//         if (niz[i] > niz[j]) {
//             let tmp = niz[j];
//             niz[j] = niz[i];
//             niz[i] = tmp;
//         }
//     }

// }
// // console.log(niz);
// let o1 = {
//     name: 'Ana',
//     age: 23
// }
// let o2 = {
//     name: 'Pera',
//     age: 26
// }
// let o3 = {
//     name: 'Zika',
//     age: 32
// }
// let o4 = {
//     name: 'Sophie',
//     age: 21
// }
// let nizO = [o1, o2, o3, o4];
// let nizA = [];
// for (let el of nizO) {


//     nizA.push(el.age);;
// }
// //console.log(nizA);
// nizA.sort((a, b) => b - a);
// //console.log(nizA);

// let nizN = [];
// for (ele of nizO) {
//     nizN.push(ele.name)
// }
// //console.log(nizN);
// nizN.sort();
// //console.log(nizN);

// nizO.sort((b, a) => a.age - b.age);

// nizO.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     } else if (a.name == b.name) {
//         return 0;
//     } else {
//         return -1;
//     }
//     //a.name.localCompare(b.name);
// })






//console.log(nizO.age.sort((a, b) => a - b));

let recept1 = {
    imeRecepta: 'mafini',
    tezinaRecepta: 'pocetni',
    sastojci: ['100 g šećera', '1 kesica vanilinog šećera', '2 jajeta', '50 gr istopljene crne čokolade', '200 ml mleka'],
}

let recept2 = {
    imeRecepta: 'krofne',
    tezinaRecepta: 'laki',
    sastojci: ['1 kašičica soli', '50 gr. svežeg kvasca', '3 žumanceta', '100 gr. čokolade', '60 gr. šećera', '150 ml. mleka'],
}

let recept3 = {
    imeRecepta: 'pileca corba',
    tezinaRecepta: 'srednji',
    sastojci: ['1 rendana šargarepa', '200 g pilećeg mesa', 'ulje', '1 kašika brašna', '1/2 kašičice bibera'],
}

let recept4 = {
    imeRecepta: 'makarone',
    tezinaRecepta: 'tezak',
    sastojci: ['200 g makarona', '400 ml kisele vode', '200 ml pavlake za kuvanje', ' 150 ml mleka', '200 g sira', ' 2 jajeta'],
}

let recept5 = {
    imeRecepta: 'paprikas',
    tezinaRecepta: 'majstor',
    sastojci: ['1 pile', '1 kg krompira', '1 dl ulja', '1 šargarepa', '1 paradajz', '2 glavice crnog luka', '1 paprika'],
}

function ispisiRecept(recept) {
    console.log(`Ime: ${recept.imeRecepta}\nTezina: ${recept.tezinaRecepta}\nSastojci: ${recept.sastojci}`);
}

//ispisiRecept(recept5);
let recepti2 = [recept1, recept2, recept3, recept4, recept5];

//let app = document.querySelector('#app');
recepti2.forEach((el) => {
    console.log(el.imeRecepta);
    var para = document.createElement("p");
    para.innerHTML = `Ime recepta je: ${el.imeRecepta} <br>  Odredjena tezina je: ${el.tezinaRecepta} <br> i sastojci su ${el.sastojci}`;
    //para.appendChild(node);

    var element = document.getElementById("app");
    element.appendChild(para);

    // let p = document.createElement('p');
    // p.innerHTML = `Ime: ${el.imeRecepta}`;
    // app.appendChild('p');
})


let sviRecepti = [recept1, recept2, recept3, recept4, recept5];
for (let el of sviRecepti) {
    if (el.tezinaRecepta == 'laki' || el.tezinaRecepta == 'pocetni') {
        //console.log('*******************');

        //ispisiRecept(el);
    }
}
// sviRecepti.forEach((el) => {
//   if (el.tezinaRecepta == 'laki' || el.tezinaRecepta == 'pocetni') {
//     ispisiRecept(el);
//   }
// }) kroz FOREACH

let sastojak1 = {
    imeSastojka: 'secer',
    kolicina: 1,
    cena: 80,
}
let sastojak2 = {
    imeSastojka: 'jaje',
    kolicina: 3,
    cena: 10,
}
let sastojak3 = {
    imeSastojka: 'cokolada',
    kolicina: 1,
    cena: 100,
}
let sastojak4 = {
    imeSastojka: 'vanilin secer',
    kolicina: 2,
    cena: 20,
}
let sastojak5 = {
    imeSastojka: 'mleko',
    kolicina: 1,
    cena: 150,
}

let recept10 = {
    imeRecepta: 'mafini',
    tezinaRecepta: 'pocetni',
    sastojci: [sastojak1, sastojak2, sastojak3, sastojak4, sastojak5],
}

function cenaRecepta(recept) {
    let cena = 0;
    recept.sastojci.forEach(el => {
        cena += el.kolicina * el.cena;
    });
    return cena
}
console.log(cenaRecepta(recept10));