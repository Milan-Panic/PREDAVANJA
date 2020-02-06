// let m = 5;
// let n = 19;
// let k = 8;
// let zbir = 0;
// let counter = 0;
// if (m > n) {
//     let tmp = m;
//     m = n;
//     n = tmp;
// }
// //console.log(m, n);
// if (k > m && k < n) {


//     for (let i = m; i <= n; i++) {
//         if (i % k == 0) {
//             zbir += i;
//             counter += 1;
//             console.log(i);
//         }

//     }
//     console.log('Zbir brojeva je: ' + zbir + '  Broj brojeva: ' + counter);
// }

// let a,b,c;
// a = 4;
// b = 5;

//Suma = 1/2^2 + 1/4^2 + 1/6^2 + ... 1/n^2
// let sum = 0;
// let n = 8;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         dl = Math.pow(i, 2);
//         sum += (1 / dl);
//     }

// }
// console.log(sum);

//FAKTORIJEL

// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     let fact = 1;
//     for (let j = 1; j <= i; j++) {
//         fact *= j;
//     }
//     sum += fact;

// }
// console.log(sum);

// let f = 5;
// let zbir = 0;
// let facto = 1;
// for (let k = 1; k <= f; k++) {
//     facto *= k;
//     zbir += facto;
// }
// console.log(zbir);
/* 
    I S = 1! + 3! + 5!...
*/
// let f = 5;
// let zbir = 0;
// let facto = 1;
// for (let k = 1; k <= f; k++) {
//     if (k % 2 != 0) {
//         continue;
//     } else {                  NE RADI ISPRAVNO
//         facto *= k;
//         zbir += 1 / facto;
//     }
// }
// console.log(zbir);S

let w = 5;
let p = '*'.repeat(5);
//let vrh = ' '*m/2;
console.log(' '.repeat(w / 2));

//ostatak krova 
for (let i = 1; i < w / 2; i++) {
    let krov = ' '.repeat(w - i - 1) + '*' + ' '.repeat(i) + '*';
    console.log(krov);


}