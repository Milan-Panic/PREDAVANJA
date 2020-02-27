let n = 20;
for (let i = 1; i <= n; i++) {
    let rec = '';
    if (i % 3 == 0) {
        rec += 'Fizz';
    }
    if (i % 5 == 0) {
        rec += 'Buzz';
    }
    if (i % 7 == 0) {
        rec += 'Zazz';
    }
    if (rec == '') {
        rec += i;
    }
    console.log(rec);

}