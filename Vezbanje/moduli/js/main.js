//import { double as utilsDouble, name } from './utils.js'; //KORISCENJE ALIJASA
// import { double, name } from './utils.js';

//console.log(double(5));
// console.log(utilsDouble(5));
// console.log(name);

//DA BI IMPORTOVALI SVE ODJEDNOM KORISTIMO 

import * as Utils from './utils.js';
console.log(Utils.double(5));
console.log(Utils.name);

//DEFAULT EXPORT

//MOZE POSTOJATI SAMO JEDAN EXPORT DEFAULT U JEDNOM MODULU

// import { default as bottle } from './utils.js';
//KRACE SE PISE
import bottle from './utils.js'; //OVAKO MOZE ZATO STO JE TO JEDINSTVEN ELEMENT U MODULU 

bottle();

//SPAJANJE MODULA
//koriscenje vise modula iz jednog modula
import { water } from './utils.js';

water();






