class Task {
    constructor(id, desc, value, done) {
        this.id = id;
        this.desc = desc;
        this.value = value;
        this.done = done;
    }
    ispis() {
        console.log(this);

    }
    setValue(vr) {
        this.value = vr;
    }
}
class Store {  //ako stavimo da su metode STATIC onda ne moramo da instanciramo klasu Store
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(isbn) {
      const books = Store.getBooks();
  
      books.forEach((book, index) => {
        if(book.isbn === isbn) {
          books.splice(index, 1);
        }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
let t1 = new Task(12456, 'Ovo je prvi task', 23, false);
let t2 = new Task(16986, 'Ovo je drugi task', 33, true);

var arrayTasks = [];

// t1.ispis()

let form = document.querySelector('#form');
let desc = document.querySelector('#desc');
let vrednost = document.querySelector('#vrednost');
let cekirano = document.querySelector('#checkbox');
let dugme = document.querySelector('#btn');
let ispis = document.querySelector('#ispis');
var filter = document.getElementById('filter');

filter.addEventListener('keyup', filterTasks);

dugme.addEventListener('click', (e) => {
    e.preventDefault();
    // ispis.textContent = 'Milan Panic';
    // console.log(desc.value, vrednost.value, cekirano.checked);

    let tas = new Task(Math.random(), desc.value, vrednost.value, cekirano.checked);

    Store.addBook(tas); //dodajemo task u localStorage

    arrayTasks.push(tas);
    //console.log(arrayTasks);
    arrayTasks.forEach((el) => {
        el.ispis();
    })

    
    
    render(arrayTasks)
    arrayTasks = [];
    form.reset();   

})
function render(array) {
    array.forEach(e=>{
        if (e.done == true) {
        ispis.innerHTML += `<p id="blue">Ime ovog taska je: ${e.desc} vrednosti ${e.value} status ${e.done}</p>`;            
        }
        else{
        ispis.innerHTML += `<p id="red">Ime ovog taska je: ${e.desc} vrednosti ${e.value} status ${e.done}</p>`;
        }
    })
}

document.addEventListener('DOMContentLoaded', render(Store.getBooks()))

//console.log(arrayTasks);

function filterTasks(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase(); //hvatamo vrednost inputa na koji je kliknuto
  // Get list  
  var tasks = ispis.getElementsByTagName('p'); //hvatamo sve P tagove unutar diva IPIS
  // Convert to an array
  Array.from(tasks).forEach(function(task){ //Array.from(tasks) ovim pravimo niz od tih p elemenata
    var taskName = task.textContent; //od p hvatamo njegov sadrzaj, ako bi u P bilo vise elementata, 
    //onda bi ciljali na tacan element
    if(taskName.toLowerCase().indexOf(text) != -1){ //indexOf vraca indeks nadjenog clana, u suprotnom vraca -1
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

