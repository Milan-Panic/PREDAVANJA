const utils = require('./main.js');
const Mata = require('./matematika.js');
const ispis = require('./moduli/novi_modul');
const drugi_modul = require('./moduli/drugimoduli/drugi_modul.js');
let brojevi = [1, 9, 4, 6, 2, 8, 4, 23, 1];
utils.sortiraj(brojevi);
// console.log(brojevi);

// console.log(utils.P(5));

console.log(Mata.mnozi(2, 5));
ispis.msg('Milan');


console.log(drugi_modul.format(new Date()));