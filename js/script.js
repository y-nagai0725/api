const selectedCity = localStorage.getItem("selectedCity");
const mode = localStorage.getItem("mode");
const darkModeButton = document.querySelector(".dark-mode-button");
const selectBox = document.querySelector(".select");
const dayArray = ["日", "月", "火", "水", "木", "金", "土"];
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
      document.querySelector(".reportDateTime").textContent = convertDateFormattedString(reportDateTime, true);
      document.querySelector(".overviewText").textContent = overviewText;
    })
    .catch(error => {
      console.error('データの取得に失敗しちゃった…', error);
    });
}

function convertDateFormattedString(timeDefine, needsTimeString = false) {
  const dateObject = new Date(timeDefine);
  const month = dateObject.getMonth() + 1;
  const date = dateObject.getDate();
  const day = dayArray[dateObject.getDay()];
  const hour = dateObject.getHours();
  const minute = dateObject.getMinutes();
  const formattedString = `${month}/${date}(${day})` + (needsTimeString ? ` ${hour}:${minute}` : "");

  return formattedString;
}


function getDetailWeatherData(cityNumber) {
  fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${cityNumber}.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      //観測気象台、発表時刻
      const publishingOffice = data[1].publishingOffice;
      const reportDatetime = data[1].reportDatetime;

      console.log("発表時刻:" + reportDatetime);

      let reportDatetimeType;
      if (reportDatetime.includes("T05")) {
        reportDatetimeType = 1;
      } else if (reportDatetime.includes("T11")) {
        reportDatetimeType = 2;
      } else {
        reportDatetimeType = 3;
      }

      //今日、明日のデータ
      //今日
      const today = new Date();
      const todayFormattedString = "今日：" + convertDateFormattedString(today);

      //明日
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowFormattedString = "明日：" + convertDateFormattedString(tomorrow);
      //天気
      const todayWeatherCode = data[0].timeSeries[0].areas[0].weatherCodes[0];
      const tomorrowWeatherCode = data[0].timeSeries[0].areas[0].weatherCodes[1];

      //風速
      let todayWave, tomorrowWave;
      if (!data[0].timeSeries[0].areas[0].waves) {
        todayWave = "-";
        tomorrowWave = "-";
      } else {
        todayWave = data[0].timeSeries[0].areas[0].waves[0];
        tomorrowWave = data[0].timeSeries[0].areas[0].waves[1];
      }

      //降水確率
      const popsTimeDefines = data[0].timeSeries[1].timeDefines;
      const pops = data[0].timeSeries[1].areas[0].pops;
      let todayPops, tomorrowPops;
      if (popsTimeDefines[0].includes("T00")) {
        todayPops = `${pops[0]}/${pops[1]}/${pops[2]}/${pops[3]}`;
        tomorrowPops = `${pops[4]}/-/-/-`;
      } else if (popsTimeDefines[0].includes("T06")) {
        todayPops = `-/${pops[0]}/${pops[1]}/${pops[2]}`;
        tomorrowPops = `${pops[3]}/${pops[4]}/-/-`;
      } else if (popsTimeDefines[0].includes("T12")) {
        todayPops = `-/-/${pops[0]}/${pops[1]}`;
        tomorrowPops = `${pops[2]}/${pops[3]}/${pops[4]}/${pops[5]}`;
      } else {
        todayPops = `-/-/-/${pops[0]}`;
        tomorrowPops = `${pops[1]}/${pops[2]}/${pops[3]}/${pops[4]}`;
      }
      console.log("今日の降水確率:" + todayPops);
      console.log("明日の降水確率:" + tomorrowPops);

      //最高気温、最低気温
      const tempsArea = data[0].timeSeries[2].areas[0].area.name;
      let todayTempMax, tomorrowTempMax;
      let todayTempMin, tomorrowTempMin;
      if (reportDatetimeType === 1) {

      } else if (reportDatetimeType === 2) {
        todayTempMax = data[0].timeSeries[2].areas[0].temps[0];
        todayTempMin = "-";
        tomorrowTempMax = data[0].timeSeries[2].areas[0].temps[3];
        tomorrowTempMin = data[0].timeSeries[2].areas[0].temps[2];
      } else {
        todayTempMax = "-";
        todayTempMin = "-";
        tomorrowTempMax = data[0].timeSeries[2].areas[0].temps[1];
        tomorrowTempMin = data[0].timeSeries[2].areas[0].temps[0];
      }

      console.log("今日の最高気温:" + todayTempMax);
      console.log("今日の最低気温:" + todayTempMin);
      console.log("明日の最高気温:" + tomorrowTempMax);
      console.log("明日の最低気温:" + tomorrowTempMin);

      //今日、明日データの設置
      document.querySelectorAll(".recent .prefectural-capital").forEach(name => {
        name.textContent = tempsArea;
      });

      document.querySelectorAll(".recent .date-item").forEach((item, index) => {
        const date = index === 0 ? todayFormattedString : tomorrowFormattedString;
        item.textContent = date;
        if (date.includes("(土)")) {
          item.classList.add("saturday");
        } else if (date.includes("(日)")) {
          item.classList.add("sunday");
        }
      });

      const imageurl = 'https://www.jma.go.jp/bosai/forecast/img/';
      document.querySelectorAll(".recent .weather-image").forEach((image, index) => {
        const src = index === 0 ? imageurl + weatherCodes[todayWeatherCode][0] : imageurl + weatherCodes[tomorrowWeatherCode][0];
        const alt = index === 0 ? weatherCodes[todayWeatherCode][1] : weatherCodes[tomorrowWeatherCode][1];

        image.src = src;
        image.alt = alt;
      });

      document.querySelectorAll(".recent .weather-text").forEach((text, index) => {
        const weatherText = index === 0 ? weatherCodes[todayWeatherCode][1] : weatherCodes[tomorrowWeatherCode][1];
        text.textContent = weatherText;
      });

      document.querySelectorAll(".recent .pops-item").forEach((item, index) => {
        const pop = index === 0 ? todayPops : tomorrowPops;
        item.textContent = pop;
      });

      document.querySelectorAll(".recent .wave-item").forEach((item, index) => {
        const wave = index === 0 ? todayWave : tomorrowWave;
        item.textContent = wave;
      });

      document.querySelectorAll(".recent .temps-max-item").forEach((item, index) => {
        const tempMax = index === 0 ? todayTempMax : tomorrowTempMax;
        item.textContent = tempMax;
      });

      document.querySelectorAll(".recent .temps-min-item").forEach((item, index) => {
        const tempMin = index === 0 ? todayTempMin : tomorrowTempMin;
        item.textContent = tempMin;
      });

      //週間予報予報データ
      const weeklyWeatherArea = data[1].timeSeries[0].areas[0].area.name;
      const weeklyWeatherCodes = data[1].timeSeries[0].areas[0].weatherCodes;
      const weeklyWeatherPops = data[1].timeSeries[0].areas[0].pops;
      const weeklyWeatherReliabilities = data[1].timeSeries[0].areas[0].reliabilities;
      const weeklyTimeDefines = data[1].timeSeries[0].timeDefines;

      //特定地域（県庁所在地？）の名称、週間最高気温、週間最低気温
      const weeklyWeatherTempsArea = data[1].timeSeries[1].areas[0].area.name;
      const weeklyWeatherTempsMax = data[1].timeSeries[1].areas[0].tempsMax;
      const weeklyWeatherTempsMin = data[1].timeSeries[1].areas[0].tempsMin;


      // console.log(publishingOffice);
      // console.log(reportDatetime);

      // console.log(weeklyWeatherArea);
      // console.log(weeklyWeatherCodes);
      // console.log(weeklyWeatherPops);
      // console.log(weeklyWeatherReliabilities);
      // console.log(weeklyTimeDefines);

      // console.log(weeklyWeatherTempsArea);
      // console.log(weeklyWeatherTempsMax);
      // console.log(weeklyWeatherTempsMin);

      document.querySelectorAll(".weekly-weather .date-item").forEach((item, index) => {
        //重複している日付データがひとつあるので1進める
        index++;

        const date = convertDateFormattedString(weeklyTimeDefines[index]);
        item.textContent = date;

        if (date.includes("(土)")) {
          item.classList.add("saturday");
        } else if (date.includes("(日)")) {
          item.classList.add("sunday");
        }
      });

      document.querySelectorAll(".weekly-weather .weather-image").forEach((image, index) => {
        //重複している日付データがひとつあるので1進める
        index++;

        image.src = imageurl + weatherCodes[weeklyWeatherCodes[index]][0];
        image.alt = weatherCodes[weeklyWeatherCodes[index]][1];
      });

      document.querySelectorAll(".weekly-weather .weather-text").forEach((text, index) => {
        //重複している日付データがひとつあるので1進める
        index++;

        text.textContent = weatherCodes[weeklyWeatherCodes[index]][1];
      });

      document.querySelectorAll(".weekly-weather .reliability-item").forEach((item, index) => {
        //重複している日付データがひとつあるので1進める
        index++;

        const reliability = weeklyWeatherReliabilities[index];
        item.textContent = reliability === "" ? "-" : reliability;
      });

      document.querySelectorAll(".weekly-weather .pops-item").forEach((item, index) => {
        //重複している日付データがひとつあるので1進める
        index++;

        const pop = weeklyWeatherPops[index];
        item.textContent = pop === "" ? "-" : pop;
      });

      document.querySelectorAll(".weekly-weather .prefectural-capital").forEach(name => {
        name.textContent = weeklyWeatherTempsArea;
      });

      document.querySelectorAll(".weekly-weather .temps-max-item").forEach((item, index) => {
        //重複している日付データがひとつあるので1進める
        index++;

        const tempMax = weeklyWeatherTempsMax[index];
        item.textContent = tempMax === "" ? "-" : tempMax;
      });

      document.querySelectorAll(".weekly-weather .temps-min-item").forEach((item, index) => {
        //重複している日付データがひとつあるので1進める
        index++;

        const tempMin = weeklyWeatherTempsMin[index];
        item.textContent = tempMin === "" ? "-" : tempMin;
      });


    })
    .catch(error => {
      console.error('データの取得に失敗しちゃった…', error);
    });
}