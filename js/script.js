const selectedCity = localStorage.getItem("selectedCity");
const mode = localStorage.getItem("mode");
const darkModeButton = document.querySelector(".dark-mode-button");
const selectBox = document.querySelector(".select");
const weatherCodes = {
  100: ['100.svg', '晴'],
  101: ['101.svg', '晴時々曇'],
  102: ['102.svg', '晴一時雨'],
  103: ['102.svg', '晴時々雨'],
  104: ['104.svg', '晴一時雪'],
  105: ['104.svg', '晴時々雪'],
  106: ['102.svg', '晴一時雨か雪'],
  107: ['102.svg', '晴時々雨か雪'],
  108: ['102.svg', '晴一時雨か雷雨'],
  110: ['110.svg', '晴後時々曇'],
  111: ['110.svg', '晴後曇'],
  112: ['112.svg', '晴後一時雨'],
  113: ['112.svg', '晴後時々雨'],
  114: ['112.svg', '晴後雨'],
  115: ['115.svg', '晴後一時雪'],
  116: ['115.svg', '晴後時々雪'],
  117: ['115.svg', '晴後雪'],
  118: ['112.svg', '晴後雨か雪'],
  119: ['112.svg', '晴後雨か雷雨'],
  120: ['102.svg', '晴朝夕一時雨'],
  121: ['102.svg', '晴朝の内一時雨'],
  122: ['112.svg', '晴夕方一時雨'],
  123: ['100.svg', '晴山沿い雷雨'],
  124: ['100.svg', '晴山沿い雪'],
  125: ['112.svg', '晴午後は雷雨'],
  126: ['112.svg', '晴昼頃から雨'],
  127: ['112.svg', '晴夕方から雨'],
  128: ['112.svg', '晴夜は雨'],
  130: ['100.svg', '朝の内霧後晴'],
  131: ['100.svg', '晴明け方霧'],
  132: ['101.svg', '晴朝夕曇'],
  140: ['102.svg', '晴時々雨で雷を伴う'],
  160: ['104.svg', '晴一時雪か雨'],
  170: ['104.svg', '晴時々雪か雨'],
  181: ['115.svg', '晴後雪か雨'],
  200: ['200.svg', '曇'],
  201: ['201.svg', '曇時々晴'],
  202: ['202.svg', '曇一時雨'],
  203: ['202.svg', '曇時々雨'],
  204: ['204.svg', '曇一時雪'],
  205: ['204.svg', '曇時々雪'],
  206: ['202.svg', '曇一時雨か雪'],
  207: ['202.svg', '曇時々雨か雪'],
  208: ['202.svg', '曇一時雨か雷雨'],
  209: ['200.svg', '霧'],
  210: ['210.svg', '曇後時々晴'],
  211: ['210.svg', '曇後晴'],
  212: ['212.svg', '曇後一時雨'],
  213: ['212.svg', '曇後時々雨'],
  214: ['212.svg', '曇後雨'],
  215: ['215.svg', '曇後一時雪'],
  216: ['215.svg', '曇後時々雪'],
  217: ['215.svg', '曇後雪'],
  218: ['212.svg', '曇後雨か雪'],
  219: ['212.svg', '曇後雨か雷雨'],
  220: ['202.svg', '曇朝夕一時雨'],
  221: ['202.svg', '曇朝の内一時雨'],
  222: ['212.svg', '曇夕方一時雨'],
  223: ['201.svg', '曇日中時々晴'],
  224: ['212.svg', '曇昼頃から雨'],
  225: ['212.svg', '曇夕方から雨'],
  226: ['212.svg', '曇夜は雨'],
  228: ['215.svg', '曇昼頃から雪'],
  229: ['215.svg', '曇夕方から雪'],
  230: ['215.svg', '曇夜は雪'],
  231: ['200.svg', '曇海上海岸は霧か霧雨'],
  240: ['202.svg', '曇時々雨で雷を伴う'],
  250: ['204.svg', '曇時々雪で雷を伴う'],
  260: ['204.svg', '曇一時雪か雨'],
  270: ['204.svg', '曇時々雪か雨'],
  281: ['215.svg', '曇後雪か雨'],
  300: ['300.svg', '雨'],
  301: ['301.svg', '雨時々晴'],
  302: ['302.svg', '雨時々止む'],
  303: ['303.svg', '雨時々雪'],
  304: ['300.svg', '雨か雪'],
  306: ['300.svg', '大雨'],
  308: ['308.svg', '雨で暴風を伴う'],
  309: ['303.svg', '雨一時雪'],
  311: ['311.svg', '雨後晴'],
  313: ['313.svg', '雨後曇'],
  314: ['314.svg', '雨後時々雪'],
  315: ['314.svg', '雨後雪'],
  316: ['311.svg', '雨か雪後晴'],
  317: ['313.svg', '雨か雪後曇'],
  320: ['311.svg', '朝の内雨後晴'],
  321: ['313.svg', '朝の内雨後曇'],
  322: ['303.svg', '雨朝晩一時雪'],
  323: ['311.svg', '雨昼頃から晴'],
  324: ['311.svg', '雨夕方から晴'],
  325: ['311.svg', '雨夜は晴'],
  326: ['314.svg', '雨夕方から雪'],
  327: ['314.svg', '雨夜は雪'],
  328: ['300.svg', '雨一時強く降る'],
  329: ['300.svg', '雨一時みぞれ'],
  340: ['400.svg', '雪か雨'],
  350: ['300.svg', '雨で雷を伴う'],
  361: ['411.svg', '雪か雨後晴'],
  371: ['413.svg', '雪か雨後曇'],
  400: ['400.svg', '雪'],
  401: ['401.svg', '雪時々晴'],
  402: ['402.svg', '雪時々止む'],
  403: ['403.svg', '雪時々雨'],
  405: ['400.svg', '大雪'],
  406: ['406.svg', '風雪強い'],
  407: ['406.svg', '暴風雪'],
  409: ['403.svg', '雪一時雨'],
  411: ['411.svg', '雪後晴'],
  413: ['413.svg', '雪後曇'],
  414: ['414.svg', '雪後雨'],
  420: ['411.svg', '朝の内雪後晴'],
  421: ['413.svg', '朝の内雪後曇'],
  422: ['414.svg', '雪昼頃から雨'],
  423: ['414.svg', '雪夕方から雨'],
  425: ['400.svg', '雪一時強く降る'],
  426: ['400.svg', '雪後みぞれ'],
  427: ['400.svg', '雪一時みぞれ'],
  450: ['400.svg', '雪で雷を伴う'],
};

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

if (mode) {
  console.log("既にmode選択しているよ");
  if (mode === "dark") {
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

      //観測気象台、発表時刻
      const publishingOffice = data[1].publishingOffice;
      const reportDatetime = data[1].reportDatetime;

      //週間予報データ
      const weeklyWeatherArea = data[1].timeSeries[0].areas[0].area.name;
      const weeklyWeatherCodes = data[1].timeSeries[0].areas[0].weatherCodes;
      const weeklyWeatherPops = data[1].timeSeries[0].areas[0].pops;
      const weeklyWeatherReliabilities = data[1].timeSeries[0].areas[0].reliabilities;
      const weeklyTimeDefines = data[1].timeSeries[0].timeDefines;

      //特定地域（県庁所在地？）の名称、週間最高気温、週間最低気温
      const weeklyWeatherTempsArea = data[1].timeSeries[1].areas[0].area.name;
      const weeklyWeatherTempsMax = data[1].timeSeries[1].areas[0].tempsMax;
      const weeklyWeatherTempsMin = data[1].timeSeries[1].areas[0].tempsMax;


      console.log(publishingOffice);
      console.log(reportDatetime);

      console.log(weeklyWeatherArea);
      console.log(weeklyWeatherCodes);
      console.log(weeklyWeatherPops);
      console.log(weeklyWeatherReliabilities);
      console.log(weeklyTimeDefines);

      console.log(weeklyWeatherTempsArea);
      console.log(weeklyWeatherTempsMax);
      console.log(weeklyWeatherTempsMin);
    })
    .catch(error => {
      console.error('データの取得に失敗しちゃった…', error);
    });
}