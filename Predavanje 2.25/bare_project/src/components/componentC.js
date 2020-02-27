const NumberList = (numberArray) => {
    let list = document.createElement('ul');
    let listItemArray = numberArray.map((element) => {
        let item = document.createElement('li');
        item.innerHTML = element;
        return item;
    });
    listItemArray.forEach(element => {
        list.appendChild(element);
    });
    return list;
}
export default NumberList;