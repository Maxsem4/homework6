function  init() {

    const currentTempEl = document.getElementById("temperature");
    const currentUVEl = document.getElementById("uvIndex");
    const currentWindEl = document.getElementById("windSpeed");
    const currentHumidityEl = document.getElementById("humidity");
    const inputEl = document.getElementById("cityInput");
    const currentPicEl = document.getElementById("currentPicture");
    const nameEl = document.getElementById("cityName");
    const searchEl = document.getElementById("searchButton");
    
    
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);

    
         init();