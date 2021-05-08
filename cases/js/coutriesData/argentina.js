//REST COUNTRIES API
const countryDataar = {
    urlcar: 'https://restcountries.eu/rest/v2/',
    alphacar:'alpha',
    codecar: 'ar',
}

const {urlcar,alphacar, codecar} = countryDataar

const apiUrlcar = `${urlcar}${alphacar}/${codecar}`

fetch(apiUrlcar)
    .then( (datacar) => datacar.json())
    .then( (placecar) => generateHTMLcar(placecar))

const generateHTMLcar = (datacar) => {
    console.log(datacar)
    const html1car = `
        <h2 class='name'>${datacar.name}</h2>
        <img class='flag' src='${datacar.flag}'></img>
        <div class='countryData'>
            <h3>Población: <span>${datacar.population}</span><h3>
            <h3>Capital: <span>${datacar.capital}</span><h3>
        </div>
`
    const country = document.querySelector('.country-dataAr')
    country.innerHTML = html1car
}