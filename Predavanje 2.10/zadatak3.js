let k = 4;
let n = 7;
let dusanSlDani;
if (k > 0 && k < 8 && n > 0 && n < 8) {

    for (let i = 1; i <= 31; i++) {
        if (i % k == 0 && i % n == 0) {
            console.log(i);
        }
    }
} else {
    console.log('Greska pri unosu parametara.');

}