const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");


const apiKey = config.API_KEY; 
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

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

    weatherResult.innerHTML = `<p>Veriler getiriliyor...<p>`;

fetch(url)
    .then(response => {
            if (!response.ok) {
                throw new Error("Şehir bulunamadı");
            }
            return response.json();
        })
    .then(data => {
        console.log("DATA:", data);

        weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
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
