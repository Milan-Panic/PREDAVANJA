// // // // class User {
// // // //     constructor(username, avatar) {
// // // //         this.username = username;
// // // //         this.avatar = avatar;
// // // //         //console.log(this);

// // // //     }
// // // //     ispisi() {
// // // //         console.log(`${this.username} - ${this.avatar}`);

// // // //     }
// // // // }

// // // // let u1 = new User('Milan', 'blabla.jpg');

// // // // let o1 = {
// // // //     name: 'Milan',
// // // //     ispisi() {
// // // //         //console.log(this.name);
// // // //     }
// // // // }
// // // // o1.ispisi();

// // // // let task = {
// // // //     id: 'sd',
// // // //     desc: 'desc',
// // // //     done: true,
// // // //     changeTask() {
// // // //         this.done = !this.done
// // // //     }
// // // // }

// // // // u1.ispisi();

// // // class Sastojak {
// // //     constructor(name, amount, price) {
// // //         this.name = name;
// // //         this.amount = amount;
// // //         this.price = price;
// // //     }
// // //     totalPrice() {
// // //         return this.amount * this.price;
// // //     }
// // // }

// // // let s1 = new Sastojak('Paprika', 1, 100);
// // // let s2 = new Sastojak('Majonez', 2, 200);
// // // let s3 = new Sastojak('Biber', 3, 50);

// // // let sastojci = [s1, s2, s3];

// // // class Recept {
// // //     constructor(ime, tezina, sastojci) {
// // //         this.ime = ime;
// // //         this.tezina = tezina;
// // //         this.sastojci = sastojci;
// // //     }
// // //     Ispis() {
// // //         console.log(`Ime: ${this.ime} je tezine ${this.tezina}`); //console.log(this);
// // //         sastojci.forEach(el => {
// // //             console.log(el);
// // //         })
// // //     }

// // //     ukupnaCena() {
// // //         let cena = 0;
// // //         sastojci.forEach((el) => {
// // //             cena += el.totalPrice()

// // //         })

// // //         console.log(`Ukupna cena je ${cena}`);
// // //     }



// // // }
// // // let rec1 = new Recept('Sos', 'lako', sastojci);
// // // rec1.Ispis();
// // // rec1.ukupnaCena();

// // class Auto {
// //     constructor(id, model, marka, potrosnja) {
// //         this.broj_sasije = id;
// //         this.model = model;
// //         this.marka = marka;
// //         this.potrosnja = potrosnja;
// //     }
// //     ipis() {
// //         console.log(`Automobil marke ${this.marka}, model ${this.model} ima broj sasije ${this.broj_sasije} ima potrosnju ${this.potrosnja}`);
// //     }
// // }

// // let a1 = new Auto(21454562, '320', 'BMW', '7L/100km')
// // a1.ipis()

// // class Autor {
// //     constructor(ime, prezime) {
// //         this.ime = ime;
// //         this.prezime = prezime;
// //     }
// //     ispis() {
// //         console.log(`${this.ime} ${this.prezime}`);
// //     }
// // }
// // class Knjiga {
// //     constructor(naslov, autor, izdavac, zanr) {
// //         this.naslov = naslov;
// //         this.autor = autor;
// //         this.izdavac = izdavac;
// //         this.zanr = zanr;
// //     }
// //     ispis() {
// //         console.log(`${this.naslov} ${this.autor} ${this.izdavac} ${this.zanr}`);

// //     }
// // }
// // let knjiga1 = new Knjiga('Neki naslov1', 'Mile', 'Zavod', 'SciFi');
// // let knjiga2 = new Knjiga('Neki naslov2', 'Pera', 'Izdavanje', 'Crime');
// // let knjiga3 = new Knjiga('Neki naslov3', 'Djoka', 'Nolit', 'Drama');
// // let knjiga4 = new Knjiga('Neki naslov4', 'Mika', 'Srbija', 'Thriler');

// // let knjige = [knjiga1, knjiga2, knjiga3, knjiga4];

// // function zanr(zanr) {
// //     knjige.forEach(knjiga => { //let filtriraneknjige =  knjige.filter((knjiga)=>{ return knjiga.zanr == zanr})
// //         if (knjiga.zanr == zanr) { //u novom nizu ce se nalaziti niz knjiga koji zadovoljavaju uslov
// //             knjiga.ispis()
// //         }
// //     })
// // }
// // zanr('Crime')

// class Covek {
//     constructor(ime, prezime, jmbg) {
//         this.ime = ime;
//         this.prezime = prezime;
//         this.jmbg = jmbg;
//     }
//     ispis(){
//       console.log(this.ime,this.prezime,this.jmbg);

//     }
// }
// class Student extends Covek {
//     constructor(ime, prezime, jmbg, brIndeks, prosecnaOcena) {
//         super(ime, prezime, jmbg)
//         this.brIndeks = brIndeks;
//         this.prosecnaOcena = prosecnaOcena
//     }
// }

// let s1 = new Student('Pera', 'Peric', '45658555555', '345654', 8.1);
// console.log(s1);

class Figura {
    constructor(boja) {
        this.boja = boja;
    }
    getPovrsina() {
        return
    }
    getObim() {
        return
    }
}
class Krug extends Figura {
    constructor(r, boja) {
        super(boja)
        this.r = r;
    }
    getPovrsina() {
        return this.r ** 2 * Math.PI;
    }
    getObim() {
        return this.r * 2 * Math.PI;
    }
}

let k1 = new Krug(5)

class Pravougaonik extends Figura {
    constructor(a, b, boja) {
        super(boja)
        this.a = a;
        this.b = b;
    }
    getPovrsina() {
        return this.a * this.b;
    }
    getObim() {
        return (2 * this.a + 2 * this.b);
    }
}

class Kvadrat extends Pravougaonik {
    constructor(a, boja) {
        super(a, a, boja) //super() bez parametara prosledjuje konstruktor od nadklase
    }
}

let kk1 = new Kvadrat(5, 'crven')
    //console.log(kk1.getObim());
let kru = new Krug(3, 'zelen');
let pr = new Pravougaonik(32, 3, 'Zut');
let oblici = [kk1, kru, pr];
oblici.forEach((oblik) => {
    console.log(oblik.getPovrsina());
})