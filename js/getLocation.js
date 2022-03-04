function getUserPosition() {
    let APIResponse
    teste = document.querySelector("input").value
    console.log(teste);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(renderWeather, showError)
    }
    else{
      console.log("teste");
    }
  }

function showError(){
  let locationInput = document.querySelector("input").value;
  console.log(locationInput);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=b67a9b270cd29faea4ee61edb7d0b5dc`;
  fetch(url).then((data) => {
    return data.json()
}).then((data) => {
  let tempCelsius = ((5/9) * (data.main.temp-32)).toFixed(1)
  city.innerText = `${data.name}`
  temp.innerText = tempCelsius
  description.innerText = `${data.weather[0].description}`;
  icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
})
}

function renderWeather(position) {
    let lat = position.coords.latitude
    let long = position.coords.longitude
    APIResponse = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&lang=pt_br&APPID=b67a9b270cd29faea4ee61edb7d0b5dc`;
    let city = document.querySelector('#city');
    let temp = document.querySelector('span');
    let icon = document.querySelector('#icon');
    let description = document.querySelector('#description');
    let celsius = document.querySelector('#wrapper b');
    fetch(APIResponse)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      let tempCelsius = ((5/9) * (data.main.temp-32)).toFixed(1)
      city.innerText = `${data.name}`;
      temp.innerText = tempCelsius;
      celsius.innerHTML = 'ºC';
      description.innerText = `${data.weather[0].description}`;
      icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`
      temp.innerText = `-`
    })
  }

  function nextPage() {
      const button = document.querySelector("#wrapper button");
      const icon = document.querySelector("#icon");
      icon.classList.remove('hidden');
      button.classList.add('hidden');

  }
  
