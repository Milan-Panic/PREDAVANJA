const Form1 = () => {
    return `<form><input type="text"></form>`;
}
const Form1Node = () => {
    let form = document.createElement('form');
    let input = document.createElement('input');
    form.appendChild(input);


    //TODO add event listeners
    return form;
}

export {
    Form1,
    Form1Node
}