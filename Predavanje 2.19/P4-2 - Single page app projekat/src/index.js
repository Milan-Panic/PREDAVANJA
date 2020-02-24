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
    return `<form class="form-signup">
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
    <input type="submit" name="signup" id="signup" value="SignUp" >
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
const handleSignUp = (event) => {
    event.preventDefault();
    // console.log(`Korisnik ${username} pokusava da se uloguje sa sifrom ${password}`);
}
const loadSignInForm = () => {
    app.innerHTML = getSignInFormTemplate();
    let usernameTxt = document.querySelector('#username');
    usernameTxt.addEventListener('input', handleUsername);
    document.querySelector('#password')
        .addEventListener('input', handlePassword);
    document.querySelector('#signin').addEventListener('click', handleSignIn);
    console.log('SignInFormLoaded')
}
const loadSignUpForm = () => {
    app.innerHTML=getSignUpFormTemplete();
    document.querySelector('#signup').addEventListener('click', handleSignUp);
    console.log('SignUpFormLoaded')
}
const btn_signin = document.querySelector("#btn-signin");
const btn_signup = document.querySelector("#btn-signup");
const logo = document.querySelector("#logo");
const app = document.querySelector('#app');

var username;
var password;

btn_signin.addEventListener('click', loadSignInForm);
btn_signup.addEventListener('click', loadSignUpForm);
logo.addEventListener('click', () => {
    app.innerHTML = getHomeTemplate();
})