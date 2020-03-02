import axios from 'axios';

//npm install --save axios
//requres.in
//IZVLACENJE SVIH KORISNIKA
// axios.get('https://reqres.in/api/users').then(response => {
//     console.log(response.data);
//     response.data.data.forEach(element => {
//     console.log(element);
//     });

// })

//IZVLACENJE SAMO JEDNOG KORISNIKA
// axios.get('https://reqres.in/api/users/2').then(response => {
//     console.log(response.data.data.avatar);
// })

//PLAGIN ZA CHROME JSON VIEW
// axios.get('https://reqres.in/api/users?page2').then(response => {
//     //console.log(response.data.data);
//     response.data.data.forEach(el => {
//         console.log(el.avatar);

//     });
// })
//POST REQUEST
// axios.post('https://reqres.in/api/users', {
//     name: 'Milan',
//     job: 'student'
// }).then(response => {
//     console.log(response);
// })
//REGISTER POST
// axios.post('https://reqres.in/api/register', {
//     email: "eve.holt@reqres.in",
//     password: "pistol"
// }).then(response => {
//     console.log(response);
// })
//PUT
// axios.put('https://reqres.in/api/user/2', {
//     email: "milan@gmail.in",
//     password: "shootgun"
// }).then(response => {
//     console.log(response);
// })


//PATCH
// axios.patch('https://reqres.in/api/user/2', {
//     email: "eveMilanPanicn",
//     password: "pisblablal"
// }).then(response => {
//     console.log(response);
// })

//DELETE
// axios.delete('https://reqres.in/api/user/2').then(response => {
//     console.log(response);
// })

//POST(LOGIN)
axios.post('https://reqres.in/api/login', {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
}).then(response => {
    console.log(response);
})