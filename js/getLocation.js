function getUserPosition() {
    let APIResponse
    teste = document.querySelector("input").value
    console.log(teste);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let long = position.coords.longitude
            APIResponse = `https://api.openweathermap.org/data/2.5/weather?q=${teste}&units=imperial&lang=pt_br&APPID=b67a9b270cd29faea4ee61edb7d0b5dc`;
            renderWeather(APIResponse)
          });
    }
    // Se recursar a localição 
    else{
      APIResponse = `https://api.openweathermap.org/data/2.5/weather?q=${teste}&units=imperial&lang=pt_br&APPID=b67a9b270cd29faea4ee61edb7d0b5dc`
    }
  }

  
function renderWeather(APIResponse) {
    let city = document.querySelector('.city')
    let temp = document.querySelector('span')
    let weatherDescription = document.querySelector("h3")
    fetch(APIResponse)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      let tempCelsius = ((5/9) * (data.main.temp-32)).toFixed(1)
      city.innerText = `${data.name}`
      console.log(data);
      temp.innerText = tempCelsius
      weatherDescription.innerText = `${data.weather.description}`
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`
      temp.innerText = `-`
    })
  }
  
