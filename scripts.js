var input = document.querySelector('.input_text');
var main = document.querySelector('#city-name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var button= document.querySelector('.submit');
var container = document.querySelector('.card')


button.addEventListener('click', function(getWeather){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=1ead17aedc87d3e9e1d77265edf736ed')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp']
  var windValue = data['main']['wind_speed']
  var humidValue = data['main']['humidity']
  var daily = data['main']['daily'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  temp.innerHTML = "Temp - "+tempValue;
  wind.innerHTML = "Wind: "+windValue;
  humidity.innerHTML = "Humidity: "+humidValue + "%";

})
})

