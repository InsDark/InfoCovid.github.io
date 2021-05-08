//TRACK CORONA API

const covidDataar = {
    linkar: 'https://www.trackcorona.live/api/countries',
    ISOar: 'ar',
}

const {linkar, ISOar} = covidDataar

const apiLinkar = `${linkar}/${ISOar}`

fetch(apiLinkar)
    .then( (informationar) => informationar.json())
    .then( (countryar) => generatear(countryar))

const generatear = (informationar) => {
    console.log(informationar)
    const htmlar = `
        <div class='covidInfo'>
            <h3>Confirmados:<span> ${informationar.data[0].confirmed}</span></h3>
            <h3>Muertos:<span> ${informationar.data[0].dead}</span></h3>
            <h3>Recuperados:<span> ${informationar.data[0].recovered}</span></h3>
            <h3>Ultima actualizacion:<span> ${informationar.data[0].updated}</span></h3>
        </div>
`
    const country3 = document.querySelector('.country-covidAr')
    country3.innerHTML = htmlar
}