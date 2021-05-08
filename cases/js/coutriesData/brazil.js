//REST COUNTRIES API
const countryDatabr = {
    urlbr: 'https://restcountries.eu/rest/v2/',
    alphabr:'alpha',
    codebr: 'br',
}

const {urlbr,alphabr, codebr} = countryDatabr

const apiUrlbr = `${urlbr}${alphabr}/${codebr}`

fetch(apiUrlbr)
    .then( (databr) => databr.json())
    .then( (placebr) => generateHTMLbr(placebr))

const generateHTMLbr = (databr) => {
    console.log(databr)
    const html1br = `
        <h2 class='name'>${databr.name}</h2>
        <img class='flag' src='${databr.flag}'></img>
        <div class='countryData'>
            <h3>Población: <span>${databr.population}</span><h3>
            <h3>Capital: <span>${databr.capital}</span><h3>
        </div>
`
    const country = document.querySelector('.country-dataBr')
    country.innerHTML = html1br
}