json je zapravo string
iskljucvo se koriste dupli navodnici

metoda GET ima header ali nema body, mozemo da posaljemo zagtev a li putem nje ne mozemo nista da prosledimo

POST metoda salje i telo, njom mozemo da posaljemo jos neki dodatni podatak

neke metode koje lice na post su ali imaju sematnicki drugaciju primenu
PUT
DELETE
PATCH
UPDATE
Omogucavaju nam da semantiski razlikujemo zahteve
ako dohvatamo usere sa get metodom, to ce nam vracati sve korisnike, ako je put to je registracija usera, delete je brisanja usera, patrch za izmenu nekog podatka o useru

AXIOS pogledati tutorijal o tome

Asinhroni zahtevi u JS

tutorijal o JavaScript PROMISE 

jedan deo koda da se izvrsava nezavisno od nekog drugog dela koda. Kolbek funkcije se izvrsavaju kad ih neki dogadjaj okine.
asinhrono je jer se ne ceka da se izvrsi api poziv

kada kreiramoapi poziv kreira se promise, ovaj poziv obecava da cemo dobiti neki odgovor
promis je zapravo asinhroni poziv. mozemo da kreiramo neku kolbe funkciju koja se aktivira na ispunjavanje promisa

//json moze poceti i nizom
// [{
//         "a": 5
//     },
//     {
//         "b": 10
//     }
// ]
