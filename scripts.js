var input = document.querySelector('.input_text');
var main = document.querySelector('#city-name');
var temp = document.querySelector('.temp');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=1ead17aedc87d3e9e1d77265edf736ed')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp']
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})
})