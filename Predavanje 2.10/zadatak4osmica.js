//CRTANJE NULE
let w = 6;
let h = 9;
console.log(' ' + '*'.repeat(w - 2));
for (let i = 1; i <= h - 2; i++) {
    if (i != (h - 2) / 2) {
        console.log('*' + ' '.repeat(w - 2) + '*');
    } else {
        console.log(' ' + '*'.repeat(w - 2));

    }
}
console.log(' ' + '*'.repeat(w - 2));