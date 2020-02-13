// // let a = 12;
// // let b = 17;
// // let c = 21;

// // function najmanjiBroj(a, b = Infinity, c = Infinity) {
// //     if (a < b && a < c) {
// //         return a;

// //     } else if (b < a && b < c) {
// //         return b;

// //     } else {
// //         return c;
// //     }
// // }
// //console.log(najmanjiBroj(a, b, c));

// // let povrsinaKvadrata = function(a) {
// //         return a ** 2;
// //     }
// //console.log(povrsinaKvadrata(5));

// function Ptrougla(a, b, c) {
//     if (isValid(a, b, c)) {
//         let s = obim(a, b, c) / 2;
//         return Math.sqrt(s * (s - a) * (s - b) * (s - c))
//     } else {
//         return "nije ispravno";
//     }
// }

// function obim(a, b, c) {
//     return a + b + c;
// }

// function isValid(a, b, c) {
//     if (a > 0 && b > 0 && c > 0 && a < (b + c) && b < (a + c) && c < (a + b)) {
//         return true;

//     }
// }
// let a = 7;
// b = 9;
// c = 7;
// //console.log(Ptrougla(a, b, c));
// if (isValid(a, b, c)) {
//     console.log(`P: ${Math.round((Ptrougla(a, b, c)* 100) / 100)}`);
//     console.log(`O: ${obim(a,b,c)}`);
// }
// else{console.log('Ne postoji takav trougao.')}

// //NIZOVI
let niz = [0, 1, 2, 3];
let niz2 = [6, 7, 8, 9, 10];
let sum = 0;
for (let element of niz) { //of se koristi za nizove kada su kljucevi numericke vrendosti

    sum += element;


    //console.log(element);

}
//console.log('suma ' + sum);

//niz1+niz2 pretvara u string i ne moze se koristiti kao spajanje stringova
let niz3 = niz.concat(niz2);
//console.log(niz3);

let podaci = ['Milan', 'Panic', '12.10.1988.', 'Sabac', 30];
let brojevi = [12, 8, 10, 88];
let nizSpojeno = podaci.concat(brojevi);
//console.log(nizSpojeno);

let brojevi2 = [12, 8, 10, 88];
let podaci2 = ['Milan', 'Panic', '12.10.1988.', 'Sabac', 30, ...brojevi2];
//console.log(podaci2);

let maxPos = 0;
for (let i = 0; i < brojevi.length; i++) {
    let element = brojevi[i];
    if (element > maxPos) {
        maxPos = element;
    }

}
//console.log(maxPos);
//console.log(Math.max(...brojevi)); 
//spread operator ovde rstavi niz na clanove i onda moze da ide u math.max kao parametri


// function minEl(arr) {
//     let minE = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         let el = arr[i];
//         if (el < minE) {
//             minE = el;
//         }

//     }
//     return minE;
// }
// console.log(minEl(brojevi));
// function prosek(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];

//     }
//     return sum / arr.length;
// }
// console.log(prosek(brojevi));