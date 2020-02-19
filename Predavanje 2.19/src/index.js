const getHomeTamplate = () => {
    return '<h1>Welcome to IT Bootcamp</h1>'
}
var username;
var password;
const getSignInFormTamplate = () => {
    return `<form class="frm-singin">
    <input type="text" name="username" id="username" placeholder="UserName" required>
    <input type="password" name="password" id="password" placeholder="Password" required>
    <input type="button" class="btn-plain btn-green btn-bordered btn-curved" id="signin" value="SignIn">
    </form>`
}
const handleUsername = (event) => {
    username = event.target.value;
}
const handlePassword = (event) => {
    password = event.target.value;
}
const handleSignIn = () => {
    console.log(`Korisnik ${username} pokusava da se uloguje sa sifrom ${password}`);

}
const loadSignInForm = () => { //event predstavlja onog ko je pozvao ovu funkciju
    //console.log('SignInLoaded');
    //console.log(event);
    app.innerHTML = getSignInFormTamplate();
    let usernameTxt = document.querySelector('#username');
    usernameTxt.addEventListener('input', handleUsername);
    document.querySelector('#password'), addEventListener('input', handlePassword);
    document.querySelector('#signin').addEventListener('click', handleSignIn);

    console.log('SignInFormLoaded');



}
const loadSignUpForm = () => {
    //console.log('SignUpLoaded');
    app.innerHTML = getSignUpFormTamplate();
    // let usernameTxt = document.querySelector('#username');
    // usernameTxt.addEventListener('input', handleUsername);
    // document.querySelector('#password'), addEventListener('input', handlePassword);
    // document.querySelector('#signin').addEventListener('click', handleSignIn);
    document.querySelector('#first-name').addEventListener('input', handleFrName);
    document.querySelector('#last-name').addEventListener('input', handleLstName);
    document.querySelector('#username').addEventListener('input', handleUsername);

    document.querySelector('#password').addEventListener('input', handlePass);
    document.querySelector('#confirm-password').addEventListener('input', handleComfPass);
    document.querySelector('#signup').addEventListener('input', handleBtnUp);

    console.log('SignInFormLoaded');
}
const btn_signin = document.querySelector("#btn-signin");
const btn_signup = document.querySelector("#btn-signup");
btn_signin.addEventListener('click', loadSignInForm);
btn_signup.addEventListener('click', loadSignUpForm);

const app = document.querySelector('#app');

document.querySelector('#logo').addEventListener('click', () => {
        app.innerHTML = getHomeTamplate();
    })
    /*REGISTRACIONA FORMA*/
var regIme, regPrezime, potvrdPass, sifra;
const getSignUpFormTamplate = () => {
    return `<form class="form-signup">
    <div>
        <p for="first-name">First Name</p>
        <input type="text" name="first-name" id="first-name" required>
        <p for="last-name">Last Name</p>
        <input type="text" name="last-name" id="last-name" required>
        <p for="username">Username</p>
        <input type="text" name="username" id="username" required>
        <p for="password">Password</p>
        <input type="password" name="password" id="password" required>
        <p for="confirm-password">Confirm-password</p>
        <input type="password" name="confirm-password" id="confirm-password" required>
    </div>
    <input type="button" id="signup" name="signup" value="SignUp">
</form>`
}
const handleFrName = (event) => {
    regIme = event.target.value;
}
const handleLstName = (event) => {
    regPrezime = event.target.value;
}
const handleComfPass = (event) => {
    potvrdPass = event.target.value;
}
const handlePass = (event) => {
    sifra = event.target.value;
}
const handleSignIn = () => {
    console.log(`Korisnik ${username} pokusava da se uloguje sa sifrom ${password}`);

}