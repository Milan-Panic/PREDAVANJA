// var x = 10;
// switch (x) {
//     case 0:
//         console.log('Januar ima 31');

//         break;
//     case 1:
//         console.log('Februar ima 28/29');

//         break;
//     case 2:
//         console.log('Mart ima 31');

//         break;
//     case 3:
//         console.log('April ima 30');

//         break;
//     case 4:
//         console.log('Maj ima 31');

//         break;
//     case 5:
//         console.log('Jun ima 30');

//         break;
//     case 6:
//         console.log('Jul ima 31');

//         break;
//     case 7:
//         console.log('Decembar ima 31');

//         break;
//     case 8:
//         console.log('Septembar ima 30');

//         break;
//     case 9:
//         console.log('Oktobar ima 31');

//         break;
//     case 10:
//         console.log('Novembar ima 30');

//         break;

//     case 11:
//         console.log('Decembar ima 31');

//         break;

//     default:
//         console.log('Niste uneli ispravan mesec');

//         break;
// }
// let year = 2021;
// if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//     console.log('Godina je prestupna');

// } else {
//     console.log('Godina nije prestupna');

// }

let broj = 123;
// console.log(broj % 10)
// broj = Math.floor(broj / 10);
// console.log(broj % 10)
// broj = Math.floor(broj / 10);
// console.log(broj % 10)

//  5 +'' OVAKO BROJ PRETVARAMO U STRING
//let jed = b % 10;
//odrediti da li je trocifren broj amtsrongov broj 153 = 1^3 + 5^3 + 3^3
// let br = 153;
// let br3 = br % 10;
// let br2 = Math.floor(br / 10) % 10;
// let br1 = Math.floor(br / 100) % 10;
// console.log(br3, br2, br1);
// if (br == (Math.pow(br3, 3) + Math.pow(br2, 3) + Math.pow(br1, 3))) {
//     console.log('Jeste');

// } else console.log('Nije');
let znak = 'sqrt';
let br1 = 4;
let br2 = 2;
if (br1 == null) {
    console.log('Unesite broj');
} else {

    switch (znak) {

        case 'pow':
            console.log(Math.pow(br1, br2));
            break;
        case 'sqrt':
            console.log(Math.sqrt(br1, br2));
            break;
        case 'sin':
            console.log(Math.sin(br1), Math.sin(br2));
            break;
        case 'cos':
            console.log(Math.cos(br1), Math.cos(br2));
            break;

        default:
            break;
    }
}

let korisnik = 'admin';
if (korisnik == 'admin') {
    console.log('Logovani ste kao admin');
} else if (korisnik == 'moderator') {
    console.log('Moderator');

} else {
    console.log('Logovani ste kao obican korisnik');

}

switch (korisnik) {
    case 'admin':
        console.log('Admin');

        break;
    case 'moderator':
        console.log('Moderator');

        break;


    default:
        console.log('Korisnik');

        break;
}
//proba da