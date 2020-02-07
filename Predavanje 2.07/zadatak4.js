//nacrtati supalj romb N = 4:
let n = 8;
let vrh = ' '.repeat(n / 2) + '*';
console.log(vrh);
for (let i = 1; i < n / 2; i++) {
    let romb = ' '.repeat(n / 2 - i) + '*' + ' '.repeat(2 * i - 1) + '*';
    console.log(romb);

}
for (let i = n / 2 - 2; i >= 1; i--) {
    let romb = ' '.repeat(n / 2 - i) + '*' + ' '.repeat(2 * i - 1) + '*';
    console.log(romb);

}

console.log(vrh);