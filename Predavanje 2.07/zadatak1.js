//zadatak 1
// v = 1/K - 2/K+1+ 3/K+2- ... + .... + (-1)N          N+1/K+N
/*ovo + (-1)N menja                                    OVO n+1 predstavlja
znak ali i mora                                        uslov, i<= n+1
kretati od 1*/
// let v = 0;
// let k = 3;
// let n = 3;
// for (let i = 1; i <= n + 1; i++) {
//     v += i / k; 
//     k++;

// }
// console.log(`Vrednost izraza je: ${v}`);
/*
  
*/


let n = 3;
let k = 3;
let vr = 0;
let j = 1;
for (let i = 1; i <= n + 1; i++) {
    vr += (i / k) * j;
    j *= -1;
    k++


}
console.log(vr);