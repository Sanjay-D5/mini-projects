const apiKey = "c86ca434517df6780d1e4dae96d0381f";
const apiUrl =
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
  const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    var data = await response.json();
  
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
  
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "cloudy.png";
    } else if (data.weather[0].main == "Clear"){
      weatherIcon.src = "clear.png";
    }else if (data.weather[0].main == "Rain"){
      weatherIcon.src = "raining.png";
    }else if (data.weather[0].main == "Drizzle"){
      weatherIcon.src = "drizzle.png";
    }else if (data.weather[0].main == "Rainyday"){
      weatherIcon.src = "rainy-day.png";
    }
  
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"; //error mgs is hidden when data is displayed
  }
 
}
searchbtn.addEventListener("click" ,() => {
  checkWeather(searchBox.value);
})


