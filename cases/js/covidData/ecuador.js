//TRACK CORONA API

const covidDataec = {
    linkec: 'https://www.trackcorona.live/api/countries',
    ISOec: 'ec',
}

const {linkec, ISOec} = covidDataec

const apiLinkec = `${linkec}/${ISOec}`

fetch(apiLinkec)
    .then( (informationec) => informationec.json())
    .then( (countryec) => generateec(countryec))

const generateec = (informationec) => {
    console.log(informationec)
    const htmlec = `
        <div class='covidInfo'>
            <h3>Confirmados:<span> ${informationec.data[0].confirmed}</span></h3>
            <h3>Muertos:<span> ${informationec.data[0].dead}</span></h3>
            <h3>Recuperados:<span> ${informationec.data[0].recovered}</span></h3>
            <h3>Ultima actualizacion:<span> ${informationec.data[0].updated}</span></h3>
        </div>
`
    const country3 = document.querySelector('.country-covidEc')
    country3.innerHTML = htmlec
}