import createHeader from './components/Header';
import shipsList from './components/ship_list';

const zaglavlje = document.querySelector('#zaglavlje');
const app = document.querySelector('#app');

const header = createHeader()
zaglavlje.append(header);
const shipList = shipsList()
app.appendChild(shipList);

const select = document.querySelector('#st');
select.addEventListener('change', (e) => {
    console.log(e.target.value);
    let brodovi = document.querySelectorAll('.status');
    console.log(brodovi);
    brodovi.forEach(el => {
        if (el.innerHTML.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
            el.parentElement.parentElement.style.display = 'block';
        } else {
            el.parentElement.parentElement.style.display = 'none';
        }
    })

})