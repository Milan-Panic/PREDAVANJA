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

let m = 19;
let n = 2;
let zbir = 0;
for (let i = n; i < m; i++) {
    if (i % 3 == 0) {
        zbir += i;
    }
}
console.log(zbir);