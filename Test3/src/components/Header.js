import { getInfo } from "../services/services";

const createHeader = () => {
    let header = document.createElement('header');
    header.id = 'header';

    getInfo()
        .then(result => {
            const { data } = result;
            let name = document.createElement('p');
            name.innerHTML = data.name;
            let founder = document.createElement('p');
            founder.innerHTML = data.founder;
            let founded = document.createElement('p');
            founded.innerHTML = data.founded;
            header.appendChild(name);
            header.appendChild(founder);
            header.appendChild(founded);
        });

    return header;
}

export default createHeader;