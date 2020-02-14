// //let x = [1, 2, 3, 4, 5, 6];
// for (el of x) {
//     //console.log(el);
// }

// let o1 = {
//     name: 'Milan',
//     age: 31
// }
// let o2 = {
//     name: 'Mika',
//     age: 28
// }
// let o3 = {
//     name: 'Djoka',
//     age: 14
// }
// let o4 = {
//     name: 'Kaca',
//     age: 29
// }
// let arr = [o1, o2, o3, o4];
// let arr2 = [];
// for (el of arr) { //niz od objekata  //EL JE UHVATIO CITAV OBJEKAT, NIJE POTREBNO  STAVLJATI arr[] jer je ono u toj prvoj iteraciji vec uhvatilo prvi objekat
//     //console.log(el); //arr[i].name
//     //
//     if (el.age >= 18 && el.age <= 50) {
//         //stampaj arr[i].name
//         //ili
//         arr2.push(el.name);
//     }
// }
// //console.log(arr2);

// //arr.pop() uzima poslednji element i samo njeaga stampa
// if (typeof necega == 'object' && necega != null) { //PROVERA TIPA

// }
// let x = [12, 4, 6, 22, 3, 44, 6, 7, 8, 13, 22, 42, 21];

// function deljivo(arej) {
//     let delj = [];
//     for (el of arej) {
//         if (el % 3 == 0 && el % 7 == 0) {
//             delj.push(el);
//         }
//     }
//     return delj;
// }
// console.log(deljivo(x));
//forEach uzima element iz niza i prosledjuje ga funkciji 
// function test(b) {
//     if (b % 3 == 0 && b % 7 == 0) {
//         console.log(b);

//     }
// }
// x.forEach(test);
// let niz2 = [];
// let x = [12, 4, 6, 22, 3, 44, 12, 22, 42, 21];
// for (let index = 0; index < x.length; index++) {
//     let nadjen = false;
//     for (let j = index + 1; j < x.length; j++) {
//         if (x[index] == x[j]) {
//             nadjen = true;
//             break;
//         }
//     }
//     if (!nadjen) {
//         niz2.push(x[index]);
//     }


// }
// console.log(niz2);

// function duplikati(el) {



// }
//xl.forEach(duplikati);

let brojevi = [1, 2, 3, 1, 3, 4];
// console.log(brojevi.includes(3)); //vraca true
let bezDuplikata = [];
// for (let el of brojevi) {
//     if (!bezDuplikata.includes(el)) {
//         bezDuplikata.push(el);
//     }
// }
// console.log(bezDuplikata);


// brojevi.forEach((e) => {
//     if (!bezDuplikata.includes(e)) {
//         bezDuplikata.push(e);
//     }
// });
// console.log(bezDuplikata);