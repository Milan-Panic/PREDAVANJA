import LaunchList from "./components/launch_list";
import Info from "./components/header_list";
import Header from "./components/Header";

const app = document.querySelector('#app');

// const header=Header()
getPastInfo().then(response => {
    // let data=response.data;
    let { data } = response;

    // const launch=Launch()
    data.forEach(element => {
        div.appendChild(Header(element));
    });
}, error => { console.log(error) });

const header = Header();
const filters = document.createElement('section');
const launch_list = LaunchList();

const footer = document.createElement('footer');

app.append(header, filters, launch_list, footer);