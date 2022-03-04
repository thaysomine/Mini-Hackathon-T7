function getUserPosition() {
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&lang=pt_br&APPID=b67a9b270cd29faea4ee61edb7d0b5dc`
      ;
      fetchApi(url);
    });
  }

  
function fetchApi(url) {
    let city = document.querySelector('#city');
    let temp = document.querySelector('span');
    let icon = document.querySelector('#icon');
    let description = document.querySelector('#description');
    fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);

      city.innerText = `${data.name}`;
      description.innerText = `${data.weather[0].description}`;

      icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

      temp.innerText = tempInCelsius;
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
      temp.innerText = `-`;
    })
  }
  
  getUserPosition();

  function getIconUrl() {

  }