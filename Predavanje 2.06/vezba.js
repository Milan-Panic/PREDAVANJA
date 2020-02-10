// 8.1..Napisati program za ispis proizvoda (faktorijele) brojeva od 1 do 5.

// let n = 5;  //IZNOSI 120
// let pr = 1;
// for (let i= 1; i <= n; i++) {
//   pr *= i;
// }
// console.log(pr);


// Napisati program koji će za učitanu vrijednost N izračunati vrijednost sume 
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
// for (let i = 0; i < n; i++) { //DA BI ISPOSTOVALI PRVI DEO IZRAZA i=0 DA BI BILO 1/k
//     s += (i + 1)/(k + i);
// }console.log(s);


// PRIRODNI BROJEVI CIJA JE CIFRA JEDINICA 8
// let n = 138;
// let mod = n % 10;
// console.log(mod);

//PRAVOUGAONIK N=5
/* 
    Ispisuje brojeve 11111 /n 22222 /n 33333 itd
*/
// let n = 5;
// for (let i = 1; i < n; i++) {
//     console.log(`${i}`.repeat(n));

// }

//SUPALJ PRAVOUGAONIK
// let n = 5;
// console.log('*'.repeat(n));

// for (let i = 1; i < n-1; i++) {
//     console.log('*'+' '.repeat(n-2)+'*');    
// }
// console.log('*'.repeat(n));

//ROMB
//let n = 5;
// for (let i = 1; i <= n; i++) {
//     console.log(' '.repeat(n-i)+'*'.repeat(n));    
// }

//Sa ugnjezdavanjem
// let i=1;
// let prazno = '';
// let zv = '';
// for (let j = 1;  j<= n;  j++) {
//     for (let k = 0; k <= n - j; k++) {
//         prazno += ' ';                
//     }
//     for (let k = 1; k <= n; k++) {
//         zv += '*';

//     }    
//     console.log(prazno, zv);
//     prazno ='';
//     zv = '';

// }

//SUPALJ ROMB
/*
    *****
   *   *
  *   *
 *   *
*****
*/
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     if (i == 1 || i == n) {
//         console.log(' '.repeat(n - i) + '*'.repeat(n));
//     }
//     else {
//         console.log(' '.repeat(n - i) + '*' + ' '.repeat(n - 2) + '*');
//     }
// }
//SUPALJ U DRUGU STRANU
/*
*****
 *   *
  *   *
   *   *
    *****
*/

// let n = 5;
// let rpt=1;
// for (let i = 1; i <= n; i++) {
//         if (i == 1) {
//             console.log(/*' '.repeat(n-i)+*/'*'.repeat(n));    
//             }
//         else if (i == n) {
//             console.log(' '.repeat(n-1)+'*'.repeat(n));    

//         }
//         else{
//             console.log(' '.repeat(rpt++)+'*'+' '.repeat(n-2)+'*');  
//             }
//         }

//TROUGAO 
/*
    *
    **
    ***
    ****
    *****
*/
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     console.log('*'.repeat(i));    
// }

//SUPALJ TROUGAO
/*
    *
    **
    * *
    *  *
    *****
*/
// n = 5;
// for (let i = 1; i < 3; i++) {
//     console.log('*'.repeat(i));    
// }
// for (let j = 2; j <= n-2; j++) {
//     console.log('*'+' '.repeat(j-1)+'*');

// }
// console.log('*'.repeat(n));

//TROUGAO U OGLEDALU
/*
        *
       **
      ***
     ****
    *****
*/
// let n = 5;
// let pr='', zr='';
// for (let i = 1; i <= n; i++) {
//     for (let j = i; j < n; j++) {
//         pr += (' ');
//     }
//     for (let k = 1; k <= i; k++) { //ako ovde dodamo da je k <= i*2-1 dobijamo piramidu
//         zr += '*';        
//     } 
//     console.log(pr, zr);
//     pr = '';
//     zr = '';       
// }

//SUPALJ TROUGAO
//     *
//    **
//   * *
//  *  *
// *****

// let n = 5;
// let i, j;
// let pr='', zr='';
// for (i = 1; i <= n; i++) {
//     for (j = i; j < n; j++) {
//         pr += (' ');
//     }
//     for (j = 1; j <= i; j++) {
//         if (i == n || j == 1 || j == i) { //i==n stampa donji red  
//         zr += '*';                        //j==1 stampa kosu liniju  
//         }else{                            //j==i stampa uspravnu liniju
//         zr += ' ';
//         }
//     } 
//     console.log(pr, zr);
//     pr = '';
//     zr = '';       
// }

//OBRNUT TROUGAO
/*
    *****
    ****
    ***
    **
    *
*/
// let n = 5, rd = '';

// for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++) {
//         rd += '*';
//     }
//     console.log(rd);
//         rd = '';
// }

//SUPALJ TROUGAO
/*
    *****
    *  *
    * *
    **
    *
*/

// let n = 5, rd = '';
// let i, j;

// for (i = 1; i <= n; i++) {
//     for (j = i; j <= n; j++) {
//         if (i == 1 || j == n || j == i) {
//          rd += '*';   
//         }
//         else{
//          rd += ' ';   
//         }
        
//     }
//     console.log(rd);
//         rd = '';
// }

//OBRNUT TROUGAO
/*
    * #####
    ** ####
    *** ###
    **** ##
    ***** #
*/

// let n = 5, pr = '', zv = '';
// let i, j;
// for ( i = 1; i <= n; i++) {
//     for ( j = 0; j <= i; j++) {
//         pr += '*';       
//     }
//     for ( j = i; j <= n; j++) {
//         zv +='#';
//     }
//     console.log(pr, zv);
//     pr='';
//     zv='';
// }
//SUPALJ DIJAMANT
/*
    ~~~~~ *     
    ~~~~ * *    
    ~~~ *   *
    ~~ *     *
    ~ *       *
     *         *
    ~ *       *
    ~~ *     *
    ~~~ *   *
    ~~~~ * *
    ~~~~~ *
*/
// let n = 5;
// let zv='', pr='', i, j, k;
// for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++){
//         pr += '~';       
//     }    
//     for (let k = 1; k <= i*2-1; k++) {
//         if (k == 1 || k == i*2-1) {
//         zv += '*';           
//         }else{
//         zv += ' ';
//         }
//     }    
//     console.log(pr, zv);
//     pr = '';
//     zv = '';
// }
// for (let i = 0; i <= n; i++) {
//     for ( j = 1; j <= i; j++) {
//                 pr += '~';       
//     }
//     for ( j = i; j <= n*2-i; j++) {
//         if (j == i || j == n*2-i) {
//         zv += '*';           
//         }else{
//         zv += ' ';
//         }
//     }
//     console.log(pr, zv);
//     pr = '';
//     zv = '';
// }
//  let n = 9;
//  let k = 5;
//  let sum = 0;
//  for (let i = 1; i <= n+1; i++) {
//      console.log(i);
//       sum += i/k;
//       k++;console.log(`${i}kroz${k}`);
//  } 
//  console.log(sum);
