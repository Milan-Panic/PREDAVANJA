const Header = (header) => {
    // Object destructuring
    let {
        name,
        summary
    } = header;
    const div = document.createElement('div');
    div.className = 'header';

    const header_divs = []
        // Inner div 0 je za sliku
        // Inner div 1 je za Naziv
        // Inner div 2 je za Datum
    for (let i = 0; i < 2; i++) {
        let headerDivx = document.createElement('div');
        headerDivx.className = `header-div-${i}`;
        header_divs.push(headerDivx);
        div.appendChild(headerDivx);
    }
    //Slika
    // const img = document.createElement('img');
    // img.src = mission_patch;
    // inner_divs[0].appendChild(img);

    // Naziv misije
    header_divs[0].innerHTML = `<span>${name}</span>`
    header_divs[1].innerHTML = `<span>${summary}</span>`

    //Datum i godina
    // let date = new Date(launch_date_utc);
    // const options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' }
    //     // date.toLocaleDateString()
    // inner_divs[2].innerHTML =
    //     `<span>${launch_year}</span><span>${date.toLocaleDateString('sr-RS',options)}</span>`;

    return div;
}

export default Header;