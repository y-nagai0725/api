const selectedCity = localStorage.getItem("selectedCity");
const mode = localStorage.getItem("mode");
const darkModeButton = document.querySelector(".dark-mode-button");
const selectBox = document.querySelector(".select");

if (selectedCity) {
  getOverviewWeatherData(selectedCity);
  getDetailWeatherData(selectedCity);
  Array.from(document.querySelector(".select").options).forEach(option => {
    const value = option.value;
    if (selectedCity === value) {
      option.selected = true;
    }
  });
} else {
  console.log("まだ選択していないよ");
}

if(mode){
  console.log("既にmode選択しているよ");
  if(mode === "dark"){
    document.querySelector("html").classList.add("dark-mode");
    darkModeButton.checked = true;
  }
}

darkModeButton.addEventListener("change", () => {
  console.log("mode:change!!");
  if (darkModeButton.checked) {
    document.querySelector("html").classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
  } else {
    document.querySelector("html").classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
  }
});

selectBox.addEventListener("change", () => {
  console.log("select:change!!");
  const city = selectBox.value;
  if (city === "") {
    localStorage.removeItem("selectedCity");
  } else {
    localStorage.setItem("selectedCity", city);
    getOverviewWeatherData(city);
    getDetailWeatherData(city);
  }
});

function getOverviewWeatherData(cityNumber) {
  fetch(`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${cityNumber}.json`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      const publisher = data.publishingOffice;
      const reportDateTime = data.reportDatetime;
      //const area = data.targetArea;
      const overviewText = data.text;

      document.querySelector(".publisher").textContent = publisher;
      document.querySelector(".reportDateTime").textContent = reportDateTime;
      document.querySelector(".overviewText").textContent = overviewText;
    })
    .catch(error => {
      console.error('データの取得に失敗しちゃった…', error);
    });
}


function getDetailWeatherData(cityNumber) {
  fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${cityNumber}.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const weatherInformation = data[0].timeSeries[0].areas;
      const weatherTimeDefines = data[0].timeSeries[0].timeDefines

      console.log(`日付：${weatherTimeDefines[0]},${weatherTimeDefines[1]},${weatherTimeDefines[2]}`);

      weatherInformation.forEach(information => {
        const areaName = information.area.name;
        const weathers = information.weathers;

        console.log(`場所：${areaName}`);
        console.log(`天気：${weathers[0]},${weathers[1]},${weathers[2]}`);

      });
    })
    .catch(error => {
      console.error('データの取得に失敗しちゃった…', error);
    });
}