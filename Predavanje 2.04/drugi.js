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


//kako bi smo sabrali sve brojeve od 1 - 100
// let zbir = 0;
// for (let i = 1; i <= 100; i++) {
    
//     zbir = zbir + i;
// }
// console.log(zbir);


// console.log('###############');

//PROIZVOD SVIH BROJEVA OD 1-15 KROZ FOR I WHILE LOOP

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

// if (m > n) {   //promena mesta promenljivim
//     let tmp = m;
//     m = n;
//     n = tmp;
// } 
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

//TABLICA MNOZENJA
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i * j);
//     }
// }


//KVADRAT

// let x = '';
// for (let i = 0; i < 5; i++) {      //for (let i = 0; i < 6; i++) {  *   DA ISPISE TROUGAO
//     for (let j = 0; j < 5; j++) {  //for (let j = 0; j < i; j++) {//** 
//         x += '*';                                                 //***  
//     }                                                             //****  
//     x += '\n';
// }
// console.log(x);


//laksi nacin za kvadrat zbog funkcije repeat

                                                //x += '*'.repeat(5);
// let x = '';                                     //console.log(x);
// for (i = 0; i < 5; i++) {
//     x += '*'.repeat(5) + '\n';
// }
// console.log(x);

//NACRTATI KVADRAT ZADATIH DIMENZIJA
// let m = 3;
// let n = 10;
// let x = '';
//---PRVI NACIN SA REPEAT
// for (let i = 0; i < m; i++) {
//     x += '*'.repeat(n) + '\n';

// }
// console.log(x);

//---DRUGI NACIN UGNJEZDAVANJE
// for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//         x += '*';
//     }
//     x += '\n';

// }
// console.log(x);



// console.log('*'.repeat(3).repeat(5)); // ovo ispise 15 zvezdica
    



//PRAVOUGAONIK 4 X 10 SA PRAZNIM UNUTRA

// let a = 4;
// let b = 10;
// let x = '';
// x += '*';
// x += ' '.repeat(b - 2);
// x += '*';
//Ovde smo napravili patern koji cemo da provucemo kroz loop koliko hocemo puta
//console.log('*'.repeat(b));    //ovim smo napravili gornju liniju i isto to kopirali i dole

// for (let j = 0; j < (a - 2); j++) {

//     console.log(x);
// }
// console.log('*'.repeat(b));



// VARIJANTA ISPISIVANJA SUPLJEG KVADRATA UGNJEZDAVANJEM

let kol = 10;
let red = 4;
let l1 = '';
for (let i = 0; i < kol; i++) {
    l1 += '*';
}

console.log(l1); //puna linija koja je napravljena u prvoj petlji

let l2 = '*'; //dodajemo prvu zvezdicu u supljem redu
for (let i = 0; i < kol - 2; i++) { //petljom na nju nadovezujemo potreban broj praznina
    l2 += ' '; //ovom petljom pisemo po horizontali
}

l2 += '*'; //dodajemo zvezdicu na kraju reda

for (let i = 0; i < red - 2; i++) { //zavrtimo petlju da pisemo po vertikali koliko nam redova treba
    console.log(l2);
}
console.log(l1); //puna linija koja je napravljena u prvoj petlji poziva se i ovde


