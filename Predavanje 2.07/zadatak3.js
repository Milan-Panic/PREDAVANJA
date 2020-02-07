//meseci
var x = 1;
let year = 2020;
if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log('Godina je prestupna');
    year = true;

} else {
    console.log('Godina nije prestupna');

}
switch (x) {
    case 0:
        console.log('Januar ima 31');

        break;
    case 1:
        if (year == true) {
            console.log('Februar ima 29');
        } else {
            console.log('Februar ima 28');
        }

        break;
    case 2:
        console.log('Mart ima 31');

        break;
    case 3:
        console.log('April ima 30');

        break;
    case 4:
        console.log('Maj ima 31');

        break;
    case 5:
        console.log('Jun ima 30');

        break;
    case 6:
        console.log('Jul ima 31');

        break;
    case 7:
        console.log('Decembar ima 31');

        break;
    case 8:
        console.log('Septembar ima 30');

        break;
    case 9:
        console.log('Oktobar ima 31');

        break;
    case 10:
        console.log('Novembar ima 30');

        break;

    case 11:
        console.log('Decembar ima 31');

        break;

    default:
        console.log('Niste uneli ispravan mesec');

        break;
}