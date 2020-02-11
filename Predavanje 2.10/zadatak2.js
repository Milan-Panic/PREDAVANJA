/*
Andjela je posle žurke pozvala Car:GO da je odveze do kuce. Prilikom rezervacije vozila napomenut
je princip kojim će se naplaćivati usluga. Ukoliko od kluba do Andjelinog stana ima distance
kilometara a cena se obračunava na dole napomenuti način, koliko dinara će Andjeli biti potrebno
da se vrati kući. Startna cena voznje je startPrice. Metod obračuna cene:
Cena se obračunava tako što se distance pomnozi sa unitPrice i na to se doda startPrice.
Primer: Ukoliko je distance=15km , startPrice=25RSD a unitPrice=30 onda je novac potreban
Andjeli jednak 475
Dodatak:
Ukoliko Andjela poseduje money novca. Ispisati poruku da li ima dovoljno novca da se vrati kuci.
Primer: Ukoliko je money=480 onda je ispis: Ima para! Ukoliko je money=380 onda je ispis:
Nema para!
Napomena: Izvrsiti proveru takvu da sve ulazne vrednosti ne smeju imati negativnu vrednsot, u
slučaju pogresnih ulaznih podataka program izbacuje poruku: GRESKA
*/

let distance = 15;
let startPrice = 25;
let unitePrice = 30;
let ukupnaCena = 0;
let money = 480;
if (distance >= 0 && startPrice >= 0 && unitePrice >= 0) {
    ukupnaCena += ((distance * unitePrice) + startPrice);
    console.log(`Predvidjena cena za voznju je: ${ukupnaCena}din`);
    if (money >= ukupnaCena) {
        console.log('Ima dovoljno para da se vrati kuci!');
    } else {
        console.log('Nema dovoljno para da se vrati kuci!');

    }

} else {
    console.log(`Greska, uneti parametri nisu ispravnog tipa.`);

}