//REST COUNTRIES API
const countryDataec = {
    urlec: 'https://restcountries.eu/rest/v2/',
    alphaec:'alpha',
    codeec: 'ec',
}

const {urlec,alphaec, codeec} = countryDataec

const apiUrlec = `${urlec}${alphaec}/${codeec}`

fetch(apiUrlec)
    .then( (dataec) => dataec.json())
    .then( (placeec) => generateHTMLec(placeec))

const generateHTMLec = (dataec) => {
    console.log(dataec)
    const html1ec = `
        <h2 class='name'>${dataec.name}</h2>
        <img class='flag' src='${dataec.flag}'></img>
        <div class='countryData'>
            <h3>Población: <span>${dataec.population}</span><h3>
            <h3>Capital: <span>${dataec.capital}</span><h3>
        </div>
`
    const country = document.querySelector('.country-dataEc')
    country.innerHTML = html1ec
}