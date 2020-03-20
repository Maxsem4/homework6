function  init() {

    const currentTempEl = document.getElementById("temperature");
    const currentUVEl = document.getElementById("uvIndex");
    const currentWindEl = document.getElementById("windSpeed");
    const currentHumidityEl = document.getElementById("humidity");
    const currentPicEl = document.getElementById("currentPicture");
    const nameEl = document.getElementById("cityName");
    const inputEl = document.getElementById("cityInput");
    const searchEl = document.getElementById("searchButton");
    
    
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);

    
    const APIKey = "3200eb2b31ff53d986df9b8f2855f74d";
    
    function getWeather(cityName) {

        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        axios.get(queryURL)
        .then(function(response){
            console.log(response);

            const currentDate = new Date(response.data.dt*1000);
            console.log(currentDate);

            const day = currentDate.getDate();
            const month = currentDate.getMonth();
            const year = currentDate.getFullYear();

            nameEl.innerHTML = response.data.name + "("+ month + "" + day + "" + year + ")";

            let weatherPicture = response.data.weather[0].icon;

            currentPicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
            currentPicEl.setAttribute("alt",response.data.weather[0].description);
            currentTempEl.innerHTML = "temparature: " + k2f(response.data.main.temp) + " &#176F";
            currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
            currentWindEl.innerHTML = "wind Speed: " + response.data.wind.speed + " miles per hour";

            let latitude = response.data.coord.lat;
            let longitude = response.data.coord.lon;

            let uvQuery = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey + "&cnt=1";
            axios.get(uvQuery)
            .then(function(response){
                let uvIndex = document.createElement("span");
                uvIndex.setAttribute('class','badge badge-danger');
                uvIndex.innerHTML = response.data[0].value;
                currentUVEl.innerHTML = "UV Index: ";
                currentUVEl.append(uvIndex);
            });

       
       
        });
         init();