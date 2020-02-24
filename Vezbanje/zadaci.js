/*
1.	Kreirati js skript koji ce uneti u niz 100 random celih pozitivnih brojeva, 
    a zatim iz niza ukloniti sve elemente koji su manji od 10. Ispisati oba niza u console.log.				

2.	Napisati js skript koji ce iz niza od n prirodnih brojeva koji su random uneti
    u niz ispisati:
    
    a.	Prvi clan niza
    b.	Poslednji clan niza
    c.	Srednji clan niza ukoliko niz ima neparan broj elemenata
    d.	Aritmeticku sredinu niza.
    e.	Najmanji element u nizu
    f.	Najveci element u nizu

*/
function ranBr() {
    return Math.floor((Math.random()) * 100);
}
//console.log(ranBr());

function Niz() {
    let nizStoBr = [];
    for (let i = 0; i < 100; i++) {
        let br = ranBr();
        nizStoBr.push(br);
    }
    //console.log(nizStoBr);
    let nizVeciOdDeset = [];
    for (const el of nizStoBr) {
        if (el > 10) {
            nizVeciOdDeset.push(el);
        }
    }
    console.log(nizVeciOdDeset);
    return nizVeciOdDeset;


}
let brojevi = Niz();
console.log(`Prvi clan niza: ${brojevi[0]}`);
console.log(`Poslednji clan niza: ${brojevi[brojevi.length - 1]}`);
if (brojevi.length % 2 == 0) {
    console.log(`Srednji clan niza: ${brojevi[brojevi.length / 2]}`);
} else {
    console.log(`Nema srednjeg clana!`);
}
let suma = 0;
brojevi.forEach(el => {

    suma += el;
    return suma;
});
console.log(`Suma svih clanova niza je: ${suma}`);
console.log(`Duzina niza je: ${brojevi.length}`);


function prosek(sum, nizz) {
    return sum / nizz.length;
}
console.log(`Aritmeticka sredina niza je: ${Math.round(prosek(suma, brojevi))}`);
console.log(`Najveci clan niza je: ${Math.max(...brojevi)}`);
console.log(`Najmanji clan niza je: ${Math.min(...brojevi)}`);

let max = 0;
for (let i = 0; i < brojevi.length; i++) {
    let element = brojevi[i]; //ovim dole stampamo index poziciju najveceg elementa
    if (element > max) { //element > brojevi[max]
        max = element;                  //max = i
    }
}
console.log(`Najveci clan kroz petlju: ${max}`);
let min = 0;
for (let i = 0; i < brojevi.length; i++) {
    //let ele = brojevi[i];
    if (brojevi[i] < brojevi[min]) {
        min = i;
    }
}
console.log(`Minimalni clan, stampan preko index pozicije koju smo nasli: ${brojevi[min]}`);



//FUNKCIJA ZA SORTIRANJE OBJEKATA U NIZU

const singers = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
];

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}




