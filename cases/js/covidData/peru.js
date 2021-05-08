//TRACK CORONA API

const covidDatape = {
    linkpe: 'https://www.trackcorona.live/api/countries',
    ISOpe: 'pe',
}

const {linkpe, ISOpe} = covidDatape

const apiLinkpe = `${linkpe}/${ISOpe}`

fetch(apiLinkpe)
    .then( (informationpe) => informationpe.json())
    .then( (countrype) => generatepe(countrype))

const generatepe = (informationpe) => {
    console.log(informationpe)
    const htmlpe = `
        <div class='covidInfo'>
            <h3>Confirmados:<span> ${informationpe.data[0].confirmed}</span></h3>
            <h3>Muertos:<span> ${informationpe.data[0].dead}</span></h3>
            <h3>Recuperados:<span> ${informationpe.data[0].recovered}</span></h3>
            <h3>Ultima actualizacion:<span> ${informationpe.data[0].updated}</span></h3>
        </div>
`
    const country3 = document.querySelector('.country-covid')
    country3.innerHTML = htmlpe
}