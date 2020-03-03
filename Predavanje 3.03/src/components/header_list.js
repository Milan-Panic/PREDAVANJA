import { getPastInfo } from '../services/spacex_service'
import Header from './Header';
//Add filters
const Info = () => {
    const div = document.createElement('div');
    div.className = 'header-main';

    getPastInfo().then(response => {
        // let data=response.data;
        let { data } = response;

        // const launch=Launch()
        data.forEach(element => {
            div.appendChild(Header(element));
        });

    }, error => { console.log(error) });

    return div;
}
export default Info;