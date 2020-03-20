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

    
    const APIKey = "3200eb2b31ff53d986df9b8f2855f74d";
    
    function getWeather(cityName) {
        
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        axios.get(queryURL)
        .then(function(response){
            console.log(response);
       
       
        });
         init();