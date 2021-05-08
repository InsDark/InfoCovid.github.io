//REST COUNTRIES API
const countryDataccl = {
    urlccl: 'https://restcountries.eu/rest/v2/',
    alphaccl:'alpha',
    codeccl: 'cl',
}

const {urlccl,alphaccl, codeccl} = countryDataccl

const apiUrlccl = `${urlccl}${alphaccl}/${codeccl}`

fetch(apiUrlccl)
    .then( (dataccl) => dataccl.json())
    .then( (placeccl) => generateHTMLccl(placeccl))

const generateHTMLccl = (dataccl) => {
    console.log(dataccl)
    const html1ccl = `
        <h2 class='name'>${dataccl.name}</h2>
        <img class='flag' src='${dataccl.flag}'></img>
        <div class='countryData'>
            <h3>Población: <span>${dataccl.population}</span><h3>
            <h3>Capital: <span>${dataccl.capital}</span><h3>
        </div>
`
    const country = document.querySelector('.country-dataCl')
    country.innerHTML = html1ccl
}