// 8.1..Napisati program za ispis proizvoda (faktorijele) brojeva od 1 do 5.

// let n = 5;  //IZNOSI 120
// let pr = 1;
// for (let i= 1; i <= n; i++) {
//   pr *= i;
// }
// console.log(pr);


// Napisati program koji će za učitanu vrijednost N i zračunati vrijednost sume 
// faktorijela neparnih brojeva do N:

// let n = 6;  // IZNOSI 19
// let suma = 0;
// let faktor = 1;

// for (let i = 1; i < n; i++) {
//     if (i % 2 != 0) {
//         faktor *= i;
//         suma += faktor;
//     }
// }console.log(suma);


//Napisati program koji će za učitanu vrijednost N izračunati 
//vrijednost izraza i ispisati: S = 4! + 8! + 12! +...+(4N)!

// let n = 4; //ZA N = 4; DAJE REZULTAT 420
// let s = 0;
// let p = 1;
// for (let i = 1; i < 4*n; i++) {
//     if (i % 4 == 0) {
//         p *= i;
//         s += p;
//     }
    
// }console.log(s);


// Napisati program koji će za učitanu vrijednost K i N 
// izračunati vrijednost izraza i ispisati S = 1/k + 2/k+1 + 3/k+2 + n+1/k+n
// (n je ovde ustvari i iz petlje)

// let n = 5; ////DAJE REZULTAT 2.814285714285714
// let k = 3;
// let s = 0;
// for (let i = 0; i < n; i++) {
//     s += (i + 1)/(k + i);
// }console.log(s);


// PRIRODNI BROJEVI CIJA JE CIFRA JEDINICA 8
// let n = 138;
// let mod = n % 10;
// console.log(mod);
