const person = {
    name : 'Milan',
    age : 31,
    gender : 'Male'
};

function printDetails({ name, age, gender}) {
    console.log(`The name is ${name} and they are ${age}.He's ${gender}`);
}

printDetails(person);

let {name, age} = person;

console.log(name);
console.log(age);



let nizOsoba = [
    {
        ime : 'Sara',
        godine : 18
    },
    {
        ime : 'Mara',
        godine : 28
    },
    {
        ime : 'Lara',
        godine : 38
    }
];

let [osb1, osb2, osb3] = nizOsoba;

console.log(osb1);
let {ime, godine} = osb1;
console.log(ime);

