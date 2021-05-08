//TRACK CORONA API

const covidDatabr = {
    linkbr: 'https://www.trackcorona.live/api/countries',
    ISObr: 'br',
}

const {linkbr, ISObr} = covidDatabr

const apiLinkbr = `${linkbr}/${ISObr}`

fetch(apiLinkbr)
    .then( (informationbr) => informationbr.json())
    .then( (countrybr) => generatebr(countrybr))

const generatebr = (informationbr) => {
    console.log(informationbr)
    const htmlbr = `
        <div class='covidInfo'>
            <h3>Confirmados:<span> ${informationbr.data[0].confirmed}</span></h3>
            <h3>Muertos:<span> ${informationbr.data[0].dead}</span></h3>
            <h3>Recuperados:<span> ${informationbr.data[0].recovered}</span></h3>
            <h3>Ultima actualizacion:<span> ${informationbr.data[0].updated}</span></h3>
        </div>
`
    const country3 = document.querySelector('.country-covidBr')
    country3.innerHTML = htmlbr
}