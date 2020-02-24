FILTER FUNKCIJA     
const canDrink = ages.filter(age => age >= 21);

cost ratailCopmpanies = companies.filter(company => company.category === 'Retail)

const eightinCompaines = companies.filter(company => (company.start >=1980 && company.start < 1990));

MAP FILTER
create array of company names
const companyNames = companies. map(company => company.name)

const testMap = companies. map(company => `${companu.name} [${company.start} - ${company.end}]`);

const agesSquare = ages.map(age => Math.sqrt(age)).map(age => age * 2);

SORT FUNKCIJA
const sortedCompanies = companies.sort((c1,c2)=>(c1.start > c2.start ? 1 : -1))

const sortAges = ages.sort((a, b)=> a - b);

REDUCE FUNKCIJA
Pravi sumu 

let ageSum = 0;
for(let i = 0; i < ages.length; i++){
    ageSum += ages[i];
}
const ageSum = ages.reduce (function(total, age){
    return total + age;
}, 0); //  0 je pocetni parametar za total

const ageSum = ages.reduce((total, age)=> total+age, 0);

const totalYears = companies.reduce((total, company)=> total + (company.end - company.start), 0);


KOMBINOVANI METODI

const combined = ages
.map(age => age *2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b, 0);

TRANVERSING THE DOM

var itemList = document.querySelector("#items");
itemList.parentNode.style.backgroundColor = 'red';  hvata element roditelj navedenog elementa

parentNode mozemo da nadovezujemo jedan na drugog sve unazad dok se ne dodje do svenoseceg elementa

parentElement radi isti identicnu stvar 

childNodes 
itemList.childNodes  hvata listu svih elementata ukljucujuci i text node koji je zapravo predstavlja prazna mesta izmedju list itema

children
ovo je bolje jer hvata ciste elemente
itemList.children

firstChild je skoro pa neuporebljivo

firstElementChild

itemList.firstElementChild.textContent = 'Hello'
za to posiji jos i:
lastElementChild

nextSibling
itemList.nextSibling  ne koristiti vec itemList.nextElementSibling

ima jos:
previousElementSibling

KREIRANJE DOM ELEMENATA

var newDiv = document.createElement("div");
newDiv.clasName = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title, 'Hello div');

create text node
var newDivText = document.createTextNode('Cao, cao');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 - document.querySelector('header h1');
container. insertBefore(newDiv, h1); //kazemo prvo sta ubacujemo pa na drugom mestu pre cega

EVENTS LISTENER

var button = document.getElementById('button').addEvantListener('click', buttonClick);
function buttonClick(){
    console.log('Button clicked');
    document.getElementById(header-title').textContent = 'Changed';
}

ako funkciji prosledjujemo parametar npr "e"
mozemo da hvatamo razne dogadjaje unutar te funkcije pozivajuci se preko tog "e"
npr:
e.target pokazuje nam element na koji je kliknuto 
e.target.id pokazuje nam id dugmeta
e.type pokazuje nam tip eventa
e.clientX pokazuje poziciju misa po X osi

box.style.backgroundColor = "rgb("e.offserX+","e.offserX+", 40)

itemInput  document.querySelecotor('input[type="text"]');
form - document.querySelector('form');
itemInput.addEventListener('keydown', (e)=>{
    console.log(e.target.value) //da pise u konzoli sve sto u tom trenutku ukucavamo u input polje
};

focus, blur, cut, paste

SELECT LISTA 

var select = document.querySelector('select');
select.addEventListener('change', e=>{
    e.target.value // ispisuje vrednost 
})

form.addeventListener('submit', (e)=>{
    e.preventDefault(); da spreci da forma radi submitovanje po automatizmu, tj da salje podatke na neku backand skriptu

})

