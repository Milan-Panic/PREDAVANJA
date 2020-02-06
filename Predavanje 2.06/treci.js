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
let sum = 0;
let n = 8;
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        dl = Math.pow(i, 2);
        sum += (1 / dl);
    }

}
console.log(sum);