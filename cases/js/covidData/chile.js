//TRACK CORONA API

const covidDatacl = {
    linkcl: 'https://www.trackcorona.live/api/countries',
    ISOcl: 'cl',
}

const {linkcl, ISOcl} = covidDatacl

const apiLinkcl = `${linkcl}/${ISOcl}`

fetch(apiLinkcl)
    .then( (informationcl) => informationcl.json())
    .then( (countrycl) => generatecl(countrycl))

const generatecl = (informationcl) => {
    console.log(informationcl)
    const htmlcl = `
        <div class='covidInfo'>
            <h3>Confirmados:<span> ${informationcl.data[0].confirmed}</span></h3>
            <h3>Muertos:<span> ${informationcl.data[0].dead}</span></h3>
            <h3>Recuperados:<span> ${informationcl.data[0].recovered}</span></h3>
            <h3>Ultima actualizacion:<span> ${informationcl.data[0].updated}</span></h3>
        </div>
`
    const country3 = document.querySelector('.country-covidCl')
    country3.innerHTML = htmlcl
}