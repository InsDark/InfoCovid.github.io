//TRACK CORONA API

const covidDataco = {
    linkco: 'https://www.trackcorona.live/api/countries',
    ISOco: 'co',
}

const {linkco, ISOco} = covidDataco

const apiLinkco = `${linkco}/${ISOco}`

fetch(apiLinkco)
    .then( (informationco) => informationco.json())
    .then( (countryco) => generateco(countryco))

const generateco = (informationco) => {
    console.log(informationco)
    const htmlco = `
        <div class='covidInfo'>
            <h3>Confirmados:<span> ${informationco.data[0].confirmed}</span></h3>
            <h3>Muertos:<span> ${informationco.data[0].dead}</span></h3>
            <h3>Recuperados:<span> ${informationco.data[0].recovered}</span></h3>
            <h3>Ultima actualizacion:<span> ${informationco.data[0].updated}</span></h3>
        </div>
`
    const country3 = document.querySelector('.country-covidCo')
    country3.innerHTML = htmlco
}