const getHomeTemplate = () => {
    return `<h1>Welcome to ITBootcamp!</h1>`;
}
const getSignInFormTemplate = () => {
    return `<form class="form-signin">
    <input type="text" name="username" id="username" placeholder="username" required>
    <input type="password" name="password" id="password" placeholder="password" required>
    <input type="button" class="btn-plain btn-green btn-bordered btn-curved" id="signin" value="SignIn">
</form>`;
}
const getSignUpFormTemplete = () => {
    return `<form class="form-signin">
    <div>
        <p for="first-name">First Name</p>
        <input type="text" name="first-name" id="first-name" required>
    </div>
    <div>
        <p for="last-name">Last Name</p>
        <input type="text" name="last-name" id="last-name" required>
    </div>
    <div>
        <p for="username">Username</p>
        <input type="text" name="username" id="username" required>
    </div>
    <div>
        <p for="password">Password</p>
        <input type="password" name="password" id="password" required>
    </div>
    <div>
        <p for="confirm-password">Confirm Password</p>
        <input type="password" name="confirm-password" id="confirm-password" required>
    </div>
    <input type="submit" name="signup" id="signup" value="SignUp" class="btn-plain btn-green btn-bordered btn-curved signx">
    </form>`
}
var username;
var password;
const handleUsername = (event) => {
    username = event.target.value;
}
const handlePassword = (event) => {
    password = event.target.value;
}
const handleSignIn = () => {
    console.log(`Korisnik ${username} pokusava da se uloguje sa sifrom ${password}`);
}
const loadSignInForm = () => {
    app.innerHTML = getSignInFormTemplate();
    document.querySelector('#username').addEventListener('input', handleUsername);
    document.querySelector('#password').addEventListener('input', handlePassword);
    document.querySelector('#signin').addEventListener('click', handleSignIn);
    console.log('SignInFormLoaded')
}




var ime;
var prezime;
var confirmPassword;

const handleSignUp = (event) => {
    event.preventDefault();
    if (password == confirmPassword) {
        console.log(`Korisnik: imena ${ime}, prezimena ${prezime} ima korisnicko ime ${username} pokusava da se uloguje sa sifrom ${password} uz potvrdu sifre ${confirmPassword}`);
        console.log('Sifre se poklapaju');
        app.innerHTML += `<h1>Uspesno ste se registrovali!</h1>`
    } else {
        console.log('Nema poklapanja izmedju sifara');
        app.innerHTML += `<h1>Sifre se ne poklapaju!</h1>`

    }
}
const handleFirstname = (event) => {
    ime = event.target.value;
}
const handleLastname = (event) => {
    prezime = event.target.value;
}
const handleConfirmPassword = (event) => {
    confirmPassword = event.target.value;
}

const loadSignUpForm = () => {
    app.innerHTML = getSignUpFormTemplete();
    console.log('SignUpFormLoaded')
    document.querySelector('#first-name').addEventListener('input', handleFirstname);
    document.querySelector('#last-name').addEventListener('input', handleLastname);
    document.querySelector('#username').addEventListener('input', handleUsername);
    document.querySelector('#password').addEventListener('input', handlePassword);
    document.querySelector('#confirm-password').addEventListener('input', handleConfirmPassword);
    document.querySelector('#signup').addEventListener('click', handleSignUp);

}
const btn_signin = document.querySelector("#btn-signin");
const btn_signup = document.querySelector("#btn-signup");
const logo = document.querySelector("#logo");
const app = document.querySelector('#app');



btn_signin.addEventListener('click', loadSignInForm);
btn_signup.addEventListener('click', loadSignUpForm);
logo.addEventListener('click', () => {
    app.innerHTML = getHomeTemplate();
})