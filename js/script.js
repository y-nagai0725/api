const selectedCity = localStorage.getItem("selectedCity");

if (selectedCity) {
  console.log("既に選択しているよ");
  document.querySelector(".test2").textContent = selectedCity;
  getWeatherData(selectedCity);
  Array.from(document.querySelector(".select").options).forEach(option => {
    const value = option.value;
    if(selectedCity === value){
      option.selected = true;
    }
  });
} else {
  console.log("まだ選択していないよ");
  document.querySelector(".test2").textContent = "選択してください";
}

document.querySelector(".select").addEventListener("change", () => {
  console.log("change!!");
  const city = document.querySelector(".select").value;
  document.querySelector(".test2").textContent = city;
  localStorage.setItem("selectedCity", city);
  getWeatherData(city);
});

function getWeatherData(cityNumber) {
  fetch(`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${cityNumber}.json`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      document.querySelector(".test").textContent = data.text;
    })
    .catch(error => {
      console.error('データの取得に失敗しちゃった…', error);
    });
}
