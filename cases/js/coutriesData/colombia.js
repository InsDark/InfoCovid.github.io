//REST COUNTRIES API
const countryDatacol = {
    urlcol: 'https://restcountries.eu/rest/v2/',
    alphacol:'alpha',
    codecol: 'col',
}

const {urlcol,alphacol, codecol} = countryDatacol

const apiUrlcol = `${urlcol}${alphacol}/${codecol}`

fetch(apiUrlcol)
    .then( (datacol) => datacol.json())
    .then( (placecol) => generateHTMLcol(placecol))

const generateHTMLcol = (datacol) => {
    console.log(datacol)
    const html1col = `
        <h2 class='name'>${datacol.name}</h2>
        <img class='flag' src='${datacol.flag}'></img>
        <div class='countryData'>
            <h3>Población: <span>${datacol.population}</span><h3>
            <h3>Capital: <span>${datacol.capital}</span><h3>
        </div>
`
    const country = document.querySelector('.country-dataCol')
    country.innerHTML = html1col
}