const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=-35.19&lon=-59.10&appid=4872525374a53551d1751869d7d7089d&units=imperial`;

async function getForecast() {

    try {
        let response = await fetch(forecast);
        if (response.ok) {
            let data = await response.json();
            let result = getDailyMaxTemps(data);
            /*console.log(result);*/
            displayData(result)
        }

        else {
            throw Error(await response.text());
        }

    }

    catch (error) { 
        console.error("Error fetching forecast: ", error);
    }

}

getForecast();

function getDailyMaxTemps(data) { 
    let days = {};

    data.list.forEach(item => {
        let date = item.dt_txt.split(" ")[0];

        if (!days[date]) {
            days[date] = [];
        }

        days[date].push(item.main.temp);

    });

    let dates = Object.keys(days).slice(0, 3);

    return dates.map((date, index) => {
        let maxTemp = Math.max(...days[date]);
        let label;

        if (index === 0) {
            label = "Today";
        } 

        else if (index === 1) { 
            label = "Tomorrow"
        }

        else {
            let newDate = new Date(date +"T00:00:00"); /*It prevents errors by enforcing local time*/
            label = newDate.toLocaleDateString("en-US", { weekday: "long" });
        }

        return {
            label,
            max: Math.round(maxTemp)
        };
    });
}

function displayData(forecastData) { 
    let container = document.getElementById("forecast-widget");

    container.innerHTML = "";

    forecastData.forEach(day => {
        let p = document.createElement("p");
        p.innerHTML = `${day.label}: <span class="temperature">${day.max}° F</span>`;

        container.appendChild(p);
    });
}


