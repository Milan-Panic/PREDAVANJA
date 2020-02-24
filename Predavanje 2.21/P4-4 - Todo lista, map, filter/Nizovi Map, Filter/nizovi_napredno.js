let brojevi = [1, 54, 8, 2, 8, 0, 2];

//let pola_brojevi=[0.5,27,4,1,4,0,1]
/*
let pola_brojevi = brojevi.map((element) => {
    if (element == 2) {
        return element / 2;
    }
    else {
        return 9;
    }
});
*/
// let pola_brojevi = brojevi.map((element) => {
//     return element / 2;

// });

// console.log(pola_brojevi);

//Zadatak: Niz brojevi tranformisati tako sto se brojevi 
// koji su veci od 5 transformisu u 10
// a brojevi manji ili jednaki od 5 transformisu u 0

// let transf=brojevi.map((elem)=>{
//     if(elem>5){
//         return 10
//     }else{
//         return 0
//     }
// });
// console.log(transf);

let imena=['Cvijan','Andjela','Dusan','Marko','Laki','Srdjan','Nikola','Milica','Stanoje'];

let pokloni=imena.map((ime,pozicija)=>{
    if(pozicija%4==0){
        return `${ime} dobija ugalj.`;
    }else{
        return `${ime} dobija poklon.`;
    }
})
console.log(pokloni);

let osobe=[
    {
        ime:'Cvijan',
        jezik:'Python'
    },
    {
        ime:'Andjela',
        jezik:'Java'
    },
    {
        ime:'Marko',
        jezik:'JavaScript'
    }
]

let poruke=osobe.map((osoba)=>{
    return `${osoba.ime} voli ${osoba.jezik}`;
})
console.log(poruke);

let ljubiteljiJSa=osobe.filter((osoba)=>{
    return osoba.jezik=='JavaScript';
})

console.log(ljubiteljiJSa)


//Iz niza brojevi, ispisati brojeve koji su veci od 5
let veciOd5=brojevi.filter((x)=>{
    return x>5;
})

console.log(veciOd5);

//Zadatak: Napisati niz obejkata gde svaki objekat sadrzi ime i broj godina.
// Ispisati poruku: `${ime} ima ${godina}` samo za osobe koje su punoletne.