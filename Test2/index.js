let cars = [{
        id: '19UUA8F50DA160249',
        car_make: 'Scion',
        car_model: 'tC',
        price: 18185
    },
    {
        id: '1GYS3AEF7DR496039',
        car_make: 'Cadillac',
        car_model: 'CTS',
        price: 9552
    },
    {
        id: '2FMDK4KC0AB695258',
        car_make: 'BMW',
        car_model: '525',
        price: 7216
    },
    {
        id: '2FMDK4KC1AB495258',
        car_make: 'BMW',
        car_model: 'X5',
        price: 24373
    },
    {
        id: 'WAUAGAFDXEN710904',
        car_make: 'Volkswagen',
        car_model: 'Passat',
        price: 14950
    },
    {
        id: 'WAUDF68E55A006958',
        car_make: 'BMW',
        car_model: 'M3',
        price: 20307
    },
    {
        id: 'WAUDGAFL7CA205458',
        car_make: 'Chevrolet',
        car_model: 'Suburban 1500',
        price: 15344
    },
    {
        id: 'WAUUL58E95A401485',
        car_make: 'Chevrolet',
        car_model: 'Astro',
        price: 6157
    },
    {
        id: 'WAUVKAFR5AA133227',
        car_make: 'Volkswagen',
        car_model: 'GTI',
        price: 15589
    },
    {
        id: 'WBA3T3C5XF5402761',
        car_make: 'Nissan',
        car_model: 'NV2500',
        price: 12837
    }
];

let trenutniUpis = '';
let selektovano = '';

let input = document.querySelector("#ime");
let selected = document.querySelector("#modeli");
let btnDodaj = document.querySelector("#btn");
let section = document.querySelector("#item-list");


input.addEventListener('input', (e) => {
    trenutniUpis = e.target.value;
    //console.log(trenutniUpis);
});
let auto = [];
selected.addEventListener('change', (e) => {
    selektovano = e.target.value;
    //console.log(selektovano);
    cars.forEach(el => {
        if (el.id == selektovano) {
            //console.log(el);
            auto.push(el);
            console.log(auto);
        }
    });

});


btnDodaj.addEventListener('click', (e) => {
    e.preventDefault();
    if (trenutniUpis.trim() == '') {
        alert('Polje je prazno!')
        trenutniUpis = '';
        return;
    }

    if (selektovano == '') {
        alert('Niste izabrali model!')
    }
    //console.log(trenutniUpis);
    let para = document.createElement('p');

    let vreme = new Date();
    let vremePorudzbine = `${vreme.getHours()}:${vreme.getMinutes()}:${vreme.getSeconds()}`;

    para.innerHTML = ` <b>Porucilac je: ${trenutniUpis}, za automobil marke ${auto[0].car_make}, model ${auto[0].car_model}, cena tog automobila je: ${auto[0].price}. Vreme Vase porudzbine je ${vremePorudzbine}</b>`;
    section.appendChild(para);
    input.value = '';
    trenutniUpis = '';
    auto = [];
    let btnn = document.createElement('button');
    btnn.innerText = 'X';
    btnn.addEventListener('click', (e) => {
        //console.log(e);
        para.remove();
    });
    para.appendChild(btnn);
});