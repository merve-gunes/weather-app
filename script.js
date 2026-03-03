const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

const apiKey = config.API_KEY; 
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

cityInput.addEventListener("keypress", (e) => {
if(e.key ===  "Enter") {
    searchBtn.click();
}
});

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim(); 

    if (city) {
        getWeatherData(city);
    } else {
        alert("Lütfen bir şehir ismi giriniz!");
    }
});

function getWeatherData(city) {
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric&lang=tr`;
    console.log(url);
    console.log("şehir:",city);

    weatherResult.innerHTML = `<p>Veriler getiriliyor...</p>`;

fetch(url)
    .then(response => {
            if (!response.ok) {
                throw new Error("Şehir bulunamadı");
            }
            return response.json();
        })
    .then(data => {
        console.log("DATA:", data);

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
        const weatherMain = data.weather[0].main; 
        const body = document.body;

        switch (weatherMain) {
            case "Clouds":
                body.style.background = "linear-gradient(to bottom, #bdc3c7, #2c3e50)"; 
                break;
            case "Clear":
                body.style.background = "linear-gradient(to bottom, #f7b733, #fc4a1a)"; 
                break;
            case "Rain":
            case "Drizzle":
                body.style.background = "linear-gradient(to bottom, #4b6cb7, #182848)"; 
                break;
            case "Snow":
                body.style.background = "linear-gradient(to bottom, #e6dada, #274046)"; 
                break;
            case "Thunderstorm":
                body.style.background = "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)"; 
                break;
            default:
                body.style.background = "linear-gradient(to right, #6a11cb, #2575fc)"; 
        }

        weatherResult.innerHTML = `
    
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="${iconUrl}" alt="${data.weather[0].description}">
        <p>🌡 Sıcaklık: ${data.main.temp}°C</p>
        <p>🤒 Hissedilen: ${data.main.feels_like}°C</p>
        <p>💧 Nem: ${data.main.humidity}%</p>
        <p>🌬 Rüzgar: ${data.wind.speed} m/s</p>
        <p>☁ Hava Durumu: ${data.weather[0].description}</p>
    `;
    })
    .catch(error => {
            weatherResult.innerHTML = `<p style="color: red;">⚠️ ${error.message}</p>`;
        });
}
