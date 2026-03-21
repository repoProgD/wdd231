// select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-35.19&lon=-59.10&appid=4872525374a53551d1751869d7d7089d&units=imperial&lang=en';


// response < acá guardo los resultados

//If the response is OK, then store the result of response.json() conversion in a variable named "data", and
// Output the results to the console for testing.

// Else throw an error with the response text.  response.text().

// el catch finaliza tirando cualquier error a la consola.

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            const errorText = await response.text();
            throw new Error(errorText);
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}