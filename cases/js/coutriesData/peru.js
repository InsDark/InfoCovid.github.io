//REST COUNTRIES API
const countryDatape = {
    urlpe: 'https://restcountries.eu/rest/v2/',
    alphape:'alpha',
    codepe: 'pe',
}

const {urlpe,alphape, codepe} = countryDatape

const apiUrlpe = `${urlpe}${alphape}/${codepe}`

fetch(apiUrlpe)
    .then( (datape) => datape.json())
    .then( (placepe) => generateHTMLpe(placepe))

const generateHTMLpe = (datape) => {
    console.log(datape)
    const html1pe = `
        <h2 class='name'>${datape.name}</h2>
        <img class='flag' src='${datape.flag}'></img>
        <div class='countryData'>
            <h3>Población: <span>${datape.population}</span><h3>
            <h3>Capital: <span>${datape.capital}</span><h3>
        </div>
`
    const country = document.querySelector('.country-data')
    country.innerHTML = html1pe
}