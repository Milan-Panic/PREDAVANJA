let dugme = document.querySelector('#btn-kvadrat');
let izbor = document.querySelector('#color-select');
let ispis = document.querySelector('#ispis');
dugme.addEventListener('click', (e) => {
    let vrednost = izbor.value;
    let boja = '';
    switch (vrednost) {
        case 'crveni':
            boja = '#ff0000';
            break;
        case 'zeleni': 
            boja = '#00ff00';
            break;
        case 'plavi': 
            boja = '#0000ff'; break;
        default:
            boja = '#000000';
            break;
    }
    let square = document.createElement('div');
    square.className = 'square';
    square.style.backgroundColor = boja;
    ispis.append(square);
})