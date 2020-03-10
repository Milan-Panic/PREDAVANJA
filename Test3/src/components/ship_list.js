import Ship from './ship';
import { allShips } from '../services/services';

const shipsList = () => {
    const div = document.createElement('div');
    div.className = 'launch-list';

    allShips().then(response => {
        let data = response.data;
        // const launch=Launch()
        data.forEach(element => {
            div.appendChild(Ship(element));
        });

    }, error => { console.log(error) });

    return div;
}
export default shipsList;