//Napisati program koji racuna prosek brojeva deljivih sa 7 u intervalu od M do N uključujući M i N.

let m = 2;
let n = 21;
let zbir = 0;
let counter = 0;
let prosek;
for (let i = m; i <= n; i++) {
    if (i % 7 == 0) {
        zbir += i;
        counter += 1;
    }

}
prosek = zbir / counter;

console.log(prosek);