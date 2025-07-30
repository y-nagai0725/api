const selectedCity = localStorage.getItem("selectedCity");

if (selectedCity) {
  console.log("既に選択しているよ");
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

document.querySelector(".select").addEventListener("change", () => {
  console.log("change!!");
  const city = document.querySelector(".select").value;
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
      console.log(data);
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
    })
    .catch(error => {
      console.error('データの取得に失敗しちゃった…', error);
    });
}