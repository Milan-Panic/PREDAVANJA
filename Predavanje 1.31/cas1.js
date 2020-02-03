//console.log('Hello world');
var broj1 = 8;
//console.log(broj1); {
//neki blok
// ne mozemo da pristupomo pre nego sto ga inicijalizujeo console.log(b);

let b = 4;
//console.log(b);
//}
//console.log(b);

{
    let a = 5;
    //console.log(a);

}
//a=7
//console.log(a); stampa 7 jer je sada a deklarisano kao var

let c = 6; {
    c = 7;
    //console.log(c);
    //stampa 7
}

{
    let ok = 5; {
        let ug = 8;
        console.log(ok, ug);
    }
    //console.log(ok, ug); prikazuje da ug nije definisan

}
console.log("------------------"); {
    var ab = 6; {
        var bc = 9;
        //console.log(ab, bc);

    }

    //console.log(bc, ab);

}
//console.log("------------------");

const Pi = Math.PI;
var r = 10;
//Math.pow(r)

var O = 2 * r * Pi;
var P = Math.pow(r, 2) * Pi;
//console.log('Obim kruznice je: ' + O + 'cm');
//console.log('Povrsina kruga je: ' + P + 'cm-kvadratnih');

//zapremina i povrsina lopte
//V=4/3r3Pi  P=4* r na kvadrat Pi

var V = Math.round(4 / 3 * Math.pow(r, 3) * Pi);
//console.log('Zapremina lopte: ' + V);
var Pl = 4 * Math.pow(r, 2) * Pi;
//console.log('Povrsina lopte: ' + Pl);
var a = 7;
if (a > 0) {
    var Pk = Math.pow(a, 2);
    var Ok = 4 * a;
    console.log('Povrsina kvadrata:' + Pk, 'Obim kvadrata: ' + Ok);
    var Okc = 12 * a;
    var Pkc = 6 * (a ** 2);
    var Zpk = a ** 3;
    console.log('Obim kocke: ' + Okc + ', Povrsina kocke: ' + Pkc + ', Zapremina kocke: ' + Zpk);
} else {
    console.log('Uneta je neispravna velicina stranice "A"');

}
console.log(Math.abs(-3));
console.log(`Obim kocke je: ${Okc}`);
let s1 = 4;
let s2 = 5;
let s3 = 3;
if (s1 < (s2 + s3) && s1 < (s1 + s3) && s3 < (s1 + s2)) {
    console.log('Trougao postoji');
    if ((s2 * s2) == (s1 * s1 + s3 * s3)) {
        console.log('Ovo je pravougli trougao');

    } else {
        console.log('Nije pravougli trougao');

    }

} else {
    console.log('Trougao ne postoji');

}