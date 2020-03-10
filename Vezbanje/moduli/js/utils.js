// export const name = 'Dom';
// export function double(n) {
//     return n *2;
// }

//OVO MOZEMO KRACE DA ZAPISEMO

const name = 'Dom';
function double(n) {
    return n *2;
}
export { name, double };

//EXPORT DEFAULT

export default function sayName() {
    console.log('Milan');
    
}

//SPAJANJE MODULA

export { water } from './helper.js';
//drugacije je zato sto ovde koristimo export umesto import, 
//tj znaci da ce to samo proslediti sledecem modulu, u ovom slucaju MAIN.js
