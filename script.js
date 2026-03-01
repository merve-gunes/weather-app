const cityInput = document.getElementById("cityInput")
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click" , () => {

console.log("butona tıklandı..");

const city = cityInput.value;
console.log(city);
});
