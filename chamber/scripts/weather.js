// select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');
const description = document.querySelector('#weather-description');
const maxTemp = document.querySelector('#max-temp');
const minTemp = document.querySelector('#min-temp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');


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
    let desc = data.weather[0].description;

    currentTemp.innerHTML = `<span class="temperature">${data.main.temp}&deg; F</span>`;
    description.textContent = `${data.weather[0].description}`;
    maxTemp.textContent = `High: ${data.main.temp_max}° F`;
    minTemp.textContent = `Low: ${data.main.temp_min}° F`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    let sunriseTime = new Date(data.sys.sunrise * 1000);
    sunrise.textContent = `Sunrise: ${sunriseTime.toLocaleTimeString(
        "en-US", {hour: "2-digit", minute: "2-digit"}
    )}`;

    let sunsetTime = new Date(data.sys.sunset * 1000);
    sunset.textContent = `Sunset: ${sunsetTime.toLocaleTimeString(
        "en-US", { hour: "2-digit", minute: "2-digit" }
    )}`;

    let weatherFigure = document.querySelector('.weather-composition figure') // div container (parent) -> figure (child)
    weatherFigure.innerHTML = '';

    let newWeatherIcon = document.createElement('img');
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    
    newWeatherIcon.setAttribute('src', iconsrc);
    newWeatherIcon.setAttribute('alt', desc);
    newWeatherIcon.setAttribute('id', 'weather-icon');

    let newCaption = document.createElement('figcaption');
    newCaption.textContet = desc;
    
    weatherFigure.appendChild(newWeatherIcon);
    weatherFigure.appendChild(newCaption);

}