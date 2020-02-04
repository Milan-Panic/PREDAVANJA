// let i = 0;
// while (i < 5) {
//     console.log(`${i} Hello`);
//     i += 1;
// }
// console.log(i);

// for (let i = 0; i < 5; i++) {
//     if (i == 3) {
//         continue
//     }
//     console.log(i);

// }

// //kako bi smo sabrali sve brojeve od 1 - 100
// let zbir = 0;
// for (let i = 1; i < 100; i++) {
//     zbir = zbir + i;
// }
// console.log(zbir);
// console.log('###############');


// let proizvod = 1;
// for (let i = 1; i <= 15; i++) {
//     proizvod = proizvod * i;
// }
// console.log(proizvod);
// let mnozenje = 1;
// let i = 1;
// while (i <= 15) {
//     mnozenje = mnozenje * i;
//     i++;
// }
// console.log(mnozenje);

//da nam sabere sve brojeve u intervalu m i n
// let m = 20;
// let n = 13;

// if (m > n) {
//     let tmp = m;
//     m = n;
//     n = tmp;
// }
// //promena mesta promenljivim
// let zbir = 0;
// for (let i = m; i <= n; i++) {
//     zbir += i;
// }
// console.log(zbir);

//ispisati zbir svih brojeva deljivih sa 3 u intervalu od n do m

// let m = 19;
// let n = 2;
// let zbir = 0;
// for (let i = n; i < m; i++) {
//     if (i % 3 == 0) {
//         zbir += i;
//     }
// }
// console.log(zbir);

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i * j);
//     }
// }
//kvadrat
// let x = '';
// for (let i = 0; i < 5; i++) {

//     for (let j = 0; j < 5; j++) {
//         x += '*';
//     }
//     x += '\n';
// }
// console.log(x);

//laksi nacin za kvadrat zbog funkcije repeat
// let x = '';
// //x += '*'.repeat(5);
// //console.log(x);
// for (i = 0; i < 5; i++) {
//     x += '*'.repeat(5) + '\n';
// }
// console.log(x);

// let m = 3;
// let n = 10;
// let x = '';
// // for (let i = 0; i < m; i++) {
// //     x += '*'.repeat(n) + '\n';

// // }
// // console.log(x);
// for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//         x += '*';
//     }
//     x += '\n';

// }
// console.log(x);

// console.log(
//     '*'.repeat(3).repeat(5)); // ovo ispise 15 zvezdica

//pravougaonik 4 x 10 sa praznim unutra

let a = 4;
let b = 10;
let x = '';
x += '*';
x += ' '.repeat(b - 2);
x += '*';

console.log('*'.repeat(b));

for (let j = 0; j < (a - 2); j++) {

    console.log(x);
}
console.log('*'.repeat(b));