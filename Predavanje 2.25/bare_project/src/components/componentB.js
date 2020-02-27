const SelectForm = () => {
    let select = document.createElement('select');
    for (let i = 0; i < 5; i++) {
        let option = document.createElement('option');
        option.innerText = 'Opcija ' + i;
        select.appendChild(option);
    }

    //TODO add event listeners
    return select;
}

export {
    SelectForm
}