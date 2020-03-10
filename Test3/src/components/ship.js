const Ship = (ship) => {
    // Object destructuring
    let {
        ship_name,
        ship_type,
        active,
        home_port,
        image,
        url
    } = ship;
    const div = document.createElement('div');
    div.className = 'ship';
    const a = document.createElement('a');
    a.setAttribute('href', url)


    const inner_divs = []

    for (let i = 0; i < 5; i++) {
        let innerDivx = document.createElement('div');
        innerDivx.className = `inner-div-${i}`;
        inner_divs.push(innerDivx);
        a.appendChild(innerDivx)
        div.appendChild(a);
    }
    //Slika
    const img = document.createElement('img');
    img.src = image;
    inner_divs[0].appendChild(img);

    // Naziv broda
    inner_divs[1].innerHTML = `<span>${ship_name}</span>`;

    // Tip broda
    inner_divs[2].innerHTML = `<span>${ship_type}</span>`;

    // Homeport
    inner_divs[3].innerHTML = `<span>${home_port}</span>`;

    // Status
    inner_divs[4].innerHTML = `<span class="status">${active}</span>`;






    return div;
}

export default Ship;