let dugme=document.querySelector('#btn-auto');
dugme.addEventListener('click',()=>{
    let select=document.querySelector('#auto-marka').value
    document.querySelector('#ispis').innerHTML=select;
})

let selectElement= document.querySelector('#auto-marka');
selectElement.addEventListener('change',(e)=>{
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.selectedIndex);
    let index=e.target.selectedIndex
    console.log(e.target.options[index].label);
})

//Napravite aplikaciju koja ima izbor(select) boje i dugme.
//Kad se pritisne dugme aplikacija iscrtava kvadrat
//sa izabranom bojom
