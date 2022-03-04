
function searchUserPosition() {
    let locationInput = document.querySelector("input").value;
    console.log(locationInput);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=b67a9b270cd29faea4ee61edb7d0b5dc`;
    fetch(url).then((data) => {
        console.log(data);
        return data;
    });
}