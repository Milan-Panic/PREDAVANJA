// // Arrow functions

// // function name(par1,par2){
    
// // }

// // let name = function(par1,par2){

// // }

// // // let name = (par1,par2) => {

// // // }

// // // Sortiranje // 
// // // [2,3,1,4,5,2,3,1]
// // // [1,1,2,2,3,3,4,5]

// // let arr = [5000,100,2,3,1,4,5,2,3,1,10];



// // // for (let i = 0; i < arr.length; i++) {
// // //     for(let j = i; j < arr.length; j++){
// // //         if(arr[i] > arr[j]){
// // //             let tmp = arr[i];
// // //             arr[i] = arr[j];
// // //             arr[j] = tmp;
// // //         }
// // //     }
// // // }

// // arr.sort((a,b) => {
// //     return a - b;
// // }); // Merge sort


// // let o1 = {
// //     name: 'Ana',
// //     age: 23
// // }
// // let o2 = {
// //     name: 'Pera',
// //     age: 26
// // }
// // let o3 = {
// //     name: 'Zika',
// //     age: 32
// // }
// // let o4 = {
// //     name: 'Sophie',
// //     age: 21
// // }

// // let nizO = [o1,o2,o3,o4];

// // // Sortirati niz opadajuce, na osnovu godina
// // // Rastuce na osnovu imena (Alphabet)

// // nizO.sort((b,a) => {
// //     return a.age - b.age;
// // })

// // nizO.sort((a,b) => {
// //     // if(a.name > b.name){
// //     //     return 1;
// //     // }
// //     // else if(a.name == b.name){
// //     //     return 0;
// //     // }
// //     // return -1;
// //     a.name.localeCompare(b.name);
// // })







 
// // let recept2 = {
// //     imeRecepta: 'krofne',
// //     tezinaRecepta: 'laki',
// //     sastojci: ['1 kašičica soli', '50 gr. svežeg kvasca', '3 žumanceta', '100 gr. čokolade', '60 gr. šećera', '150 ml. mleka'],
// // }
 
// // let recept3 = {
// //     imeRecepta: 'pileca corba',
// //     tezinaRecepta: 'srednji',
// //     sastojci: ['1 rendana šargarepa', '200 g pilećeg mesa', 'ulje', '1 kašika brašna', '1/2 kašičice bibera'],
// // }
 
// // let recept4 = {
// //     imeRecepta: 'makarone',
// //     tezinaRecepta: 'tezak',
// //     sastojci: ['200 g makarona', '400 ml kisele vode', '200 ml pavlake za kuvanje', ' 150 ml mleka', '200 g sira', ' 2 jajeta'],
// // }
 
// // let recept5 = {
// //     imeRecepta: 'paprikas',
// //     tezinaRecepta: 'majstor',
// //     sastojci: ['1 pile', '1 kg krompira', '1 dl ulja', '1 šargarepa', '1 paradajz', '2 glavice crnog luka', '1 paprika'],
// // }

// // // Ime: paprikas
// // // Tezina: majstor
// // // Sastojci: <sastojci>

// // function ispisiRecept(recept){
// //     console.log(`Ime: ${recept.imeRecepta}\nTezina: ${recept.tezinaRecepta}\nSastojci: ${recept.sastojci}`)
// // }



// // let sviRecepti = [recept1,recept2,recept3,recept4,recept5];

// // // Napisati program koji iz niza ispisuje samo lake i pocetne recepte
// // // Koristeci fju ispisiRecept()

// // sviRecepti.forEach((el) => {
// //     if(el.tezinaRecepta === 'laki' || el.tezinaRecepta === 'pocetni'){
// //         console.log()
// //         ispisiRecept(el);
// //     }
// // })

// let sastojak1 = {
//     imeSastojka: 'secer',
//     kolicina: 1,
//     cena: 80,
// }
// let sastojak2 = {
//     imeSastojka: 'jaje',
//     kolicina: 3,
//     cena: 10,
// }
// let sastojak3 = {
//     imeSastojka: 'cokolada',
//     kolicina: 1,
//     cena: 100,
// }
// let sastojak4 = {
//     imeSastojka: 'vanilin secer',
//     kolicina: 2,
//     cena: 20,
// }
// let sastojak5 = {
//     imeSastojka: 'mleko',
//     kolicina: 1,
//     cena: 150,
// }

// let recept1 = {
//     imeRecepta: 'mafini',
//     tezinaRecepta: 'pocetni',
//     sastojci: [sastojak1,sastojak2,sastojak3,sastojak4,sastojak5],
// }

// console.log(recept1.sastojci)
// // Napisati funkciju koja vraca ukupnu cenu recepta
// function cenaRecepta(recept){
//     let sum = 0;
//     for(let i = 0; i < recept.sastojci.length; i++){
//         sum += recept.sastojci[i].cena * recept.sastojci[i].kolicina;
//     }
//     return sum;
// }

// console.log(cenaRecepta(recept1));
// // tinyurl.com/sastojci

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

let sviRecepti = [recept2,recept3,recept4,recept5];

let wrapper = document.querySelector('.wrapper');

for(el of sviRecepti){
    let div = document.createElement('div');
    div.className = 'recept';
    // div.classList.remove('recept');
    let p1 = document.createElement('p');
    p1.textContent = `Ime: ${el.imeRecepta}`;
    let p2 = document.createElement('p');
    p2.textContent = `Tezina: ${el.tezinaRecepta}`;
    let p3 = document.createElement('p');
    p3.textContent = `Sastojci: ${el.sastojci}`;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    wrapper.appendChild(document.createElement('hr'))
    wrapper.appendChild(div);
}





