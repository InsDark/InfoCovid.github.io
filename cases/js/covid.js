//TRACK CORONA API

const covidData = {
    link: 'https://www.trackcorona.live/api/countries',
    ISO: 'pe',
}

const {link, ISO} = covidData

const apiLink = `${link}/${ISO}`

fetch(apiLink)
    .then( (information) => information.json())
    .then( (country) => generate(country))

const generate = (information) => {
    console.log(information)
    const html1 = `
        <div class='covidInfo'>
            <h3>Confirmados:<span> ${information.data[0].confirmed}</span></h3>
            <h3>Muertos:<span> ${information.data[0].dead}</span></h3>
            <h3>Recuperados:<span> ${information.data[0].recovered}</span></h3>
            <h3>Ultima actualizacion:<span> ${information.data[0].updated}</span></h3>
        </div>
`
    const country3 = document.querySelector('.country-covid')
    country3.innerHTML = html1
}