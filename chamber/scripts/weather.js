const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');
const nextDay = document.querySelector('#next-day');

const myKey = '7f2bd5587ce74a6b918cb59440fe94b3'
const myLat = '40.296975211569666'
const myLon = '-111.69603173001715'
const zip = '84057'

const currentUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${myKey}&units=imperial`

async function apiFetchCurrent(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetchForecast(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            getThreeDayForecast(data);
            // console.log(threeDay);
            
            // const temps = threeDay
            // displayForecast(threeDay);
            
            // displayForecast(threeDay);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


apiFetchCurrent(currentUrl);
apiFetchForecast(forecastUrl);

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function getThreeDayForecast(data) {
    const forecastList = data.list;
    const groupedByDay = forecastList.reduce((days, entry) => {
        const localDate = new Date(entry.dt * 1000).toLocaleDateString();
        days[localDate] ??= [];
        days[localDate].push(entry);
        return days;
    }, {});
    
    const dailyForecasts = Object.keys(groupedByDay).map(date => {
        return {
            date: date,
            data: groupedByDay[date]
        };
    });
    
    const threeDayForecast = dailyForecasts.slice(0, 3);
    // console.log(threeDayForecast);

    displayForecast(threeDayForecast);
}

function getTodayForecast(data) {
    const temps = data[0];
    const maxTemp = Math.max(...temps.data.map(item => item.main.temp));
    return maxTemp;
}

function getTomorrowForecast(data) {
    const temps = data[1];
    const maxTemp = Math.max(...temps.data.map(item => item.main.temp));
    return maxTemp;
}

function getNextDayForecast(data) {
    const temps = data[2];
    const maxTemp = Math.max(...temps.data.map(item => item.main.temp));
    return maxTemp;
}

function displayForecast(data) {
    const todayTemp = getTodayForecast(data);
    const tomorrowTemp = getTomorrowForecast(data);
    const nextTemp = getNextDayForecast(data);

    today.innerHTML = `Today: ${todayTemp}&deg;F`;
    tomorrow.innerHTML = `Tomorrow: ${tomorrowTemp}&deg;F`;
    nextDay.innerHTML = `Next Day: ${nextTemp}&deg;F`
}