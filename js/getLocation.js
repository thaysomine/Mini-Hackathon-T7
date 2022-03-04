function getUserPosition() {
    let responseAPI
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let long = position.coords.longitude
            responseAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&lang=pt_br&APPID=b67a9b270cd29faea4ee61edb7d0b5dc`;
            (responseAPI)
            console.log(responseAPI);
          });
    }
    // Se recursar a localição 
  }

  
function renderWeather(responseAPI) {
    let city = document.querySelector('.city')
    let temp = document.querySelector('span')
    fetch(responseAPI)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1)
      city.innerText = `Hoje a temperatura em ${data.name} é:`
      temp.innerText = tempInCelsius
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`
      temp.innerText = `-`
    })
  }
  
