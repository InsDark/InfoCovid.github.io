//REST COUNTRIES API
function dataCountry (countryCode) {
    const countryData = {
        url: 'https://restcountries.eu/rest/v2/',
        alpha:'alpha',
        code: `${countryCode}`,
    }
    const {url,alpha, code} = countryData

    const apiUrl = `${url}${alpha}/${code}`

    fetch(apiUrl)
    .then( (data) => data.json())
    .then( (place) => generateHTML(place))

    const generateHTML = (data) => {
        console.log(data)
        const html1 = `
            <h2 class='name'>${data.name}</h2>
            <img class='flag' src='${data.flag}'></img>
            <div class='countryData'>
                <h3>Población: <span>${data.population}</span><h3>
                <h3>Capital: <span>${data.capital}</span><h3>
            </div>
    `
    }
}
const countryData = {
    url: 'https://restcountries.eu/rest/v2/',
    alpha:'alpha',
    code: 'pe',
}

const {url,alpha, code} = countryData

const apiUrl = `${url}${alpha}/${code}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (place) => generateHTML(place))

const generateHTML = (data) => {
    console.log(data)
    const html1 = `
        <h2 class='name'>${data.name}</h2>
        <img class='flag' src='${data.flag}'></img>
        <div class='countryData'>
            <h3>Población: <span>${data.population}</span><h3>
            <h3>Capital: <span>${data.capital}</span><h3>
        </div>
`
    const country = document.querySelector('.country-data')
    country.innerHTML = html1

    const country1 = document.querySelector('.country-data1')
    country1.innerHTML = html1

    const country2 = document.querySelector('.country-data2')
    country2.innerHTML = html2

    const country4 = document.querySelector('.country-data3')
    country1.innerHTML = html2
    
    const country5 = document.querySelector('.country-data4')
    country1.innerHTML = html2

    const country6 = document.querySelector('.country-data5')
    country1.innerHTML = html2

    const country7 = document.querySelector('.country-data6')
    country1.innerHTML = html2

    const country8 = document.querySelector('.country-data7')
    country1.innerHTML = html2
}