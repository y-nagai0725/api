/**
 * html要素
 */
const html = document.querySelector("html");

/**
 * header要素
 */
const header = document.querySelector(".header");

/**
 * footer要素
 */
const footer = document.querySelector(".footer");

/**
 * ダークモード切り替えボタン
 */
const darkModeButton = document.querySelector(".top__dark-mode-button");

/**
 * 都道府県選択ボックス
 */
const prefecturesSelectBox = document.querySelector(".prefectures__select");

/**
 * 天気詳細データ取得APIのURL
 */
const detailWeatherDataApiUrl = "https://www.jma.go.jp/bosai/forecast/data/forecast";

/**
 * 天気概要データ取得APIのURL
 */
const overviewWeatherDataApiUrl = "https://www.jma.go.jp/bosai/forecast/data/overview_forecast";

/**
 * 天気アイコン画像のURL
 */
const externalImageUrl = 'https://www.jma.go.jp/bosai/forecast/img/';

/**
 * 曜日配列
 */
const dayArray = ["日", "月", "火", "水", "木", "金", "土"];

/**
 * 天気コード対応データ
 */
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

/**
 * ダークモードボタンイベント
 */
darkModeButton.addEventListener("change", () => {
  if (darkModeButton.checked) {
    //ダークモードへ切り替え
    html.classList.add("dark");
    header.classList.add("dark");
    footer.classList.add("dark");
    localStorage.setItem("mode", "dark");
  } else {
    //通常モードへ切り替え
    html.classList.remove("dark");
    header.classList.remove("dark");
    footer.classList.remove("dark");
    localStorage.setItem("mode", "light");
  }
});

/**
 * 都道府県セレクトボックス選択イベント
 */
prefecturesSelectBox.addEventListener("change", () => {
  const city = prefecturesSelectBox.value;
  if (city === "") {
    localStorage.removeItem("selectedCity");
    clearInputOverviewWeatherData();
    clearInputDetailWeatherData();
  } else {
    getOverviewWeatherData(city);
    getDetailWeatherData(city);
  }
});

/**
 * 天気詳細データをクリア
 */
function clearInputDetailWeatherData() {
  //recent部分
  document.querySelectorAll(".recent__prefectural-capital").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".recent__date-item").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".recent__weather-image").forEach(element => {
    element.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    element.alt = "";
  });
  document.querySelectorAll(".recent__weather-text").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".recent__wave").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".recent__pops").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".recent__temps-max").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".recent__temps-min").forEach(element => {
    element.textContent = "";
  });
  disableRecentTableStyle(false);

  //weekly部分
  document.querySelectorAll(".weekly__prefectural-capital").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".weekly__date").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".weekly__weather-image").forEach(element => {
    element.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    element.alt = "";
  });
  document.querySelectorAll(".weekly__weather-text").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".weekly__reliability").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".weekly__pops").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".weekly__temps-max").forEach(element => {
    element.textContent = "";
  });
  document.querySelectorAll(".weekly__temps-min").forEach(element => {
    element.textContent = "";
  });
}

/**
 * 天気概要データをクリア
 */
function clearInputOverviewWeatherData() {
  //overview部分
  document.querySelector(".overview__publisher").textContent = "";
  document.querySelector(".overview__report-date-time").textContent = "";
  document.querySelector(".overview__text").textContent = "";
}

/**
 * 日付文字列へ変換
 * @param {String} timeDefine 時間情報
 * @param {boolean} needsTimeString 時刻の必要の有無
 * @returns 日付文字列
 */
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

/**
 * 直近の天気予報表のスタイル設定
 * @param {boolean} disabled 非表示設定するかどうか
 */
function disableRecentTableStyle(disabled = true) {
  if (disabled) {
    document.querySelector(".recent__date").classList.add("disabled");
    document.querySelector(".recent__weather").classList.add("disabled");
    document.querySelector(".recent__wave").classList.add("disabled");
    document.querySelector(".recent__pops").classList.add("disabled");
    document.querySelector(".recent__temps-max").classList.add("disabled");
    document.querySelector(".recent__temps-min").classList.add("disabled");
  } else {
    document.querySelector(".recent__date").classList.remove("disabled");
    document.querySelector(".recent__weather").classList.remove("disabled");
    document.querySelector(".recent__wave").classList.remove("disabled");
    document.querySelector(".recent__pops").classList.remove("disabled");
    document.querySelector(".recent__temps-max").classList.remove("disabled");
    document.querySelector(".recent__temps-min").classList.remove("disabled");
  }
}

/**
 * 指定セレクターの要素に、配列のテキストを順番にセットする
 * @param {string} selector CSSセレクター
 * @param {Array<string>} textValues セットしたいテキストの配列
 */
function setTextValues(selector, textValues) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    //値が空の場合は'-'で表示
    element.textContent = textValues[index] === "" ? "-" : textValues[index];
  });
}

/**
 * 指定セレクターの要素に、配列の日付値を順番にセットする
 * @param {string} selector CSSセレクター
 * @param {Array<string>} dateValues セットしたい日付値の配列
 */
function setDateValues(selector, dateValues) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    const date = convertDateFormattedString(dateValues[index]);
    element.textContent = date;

    //土曜or日曜の場合はクラス付与
    if (date.includes("(土)")) {
      element.classList.add("saturday");
    } else if (date.includes("(日)")) {
      element.classList.add("sunday");
    }
  });
}

/**
 * 天気画像とテキストをセットする
 * @param {string} areaPrefix "recent"か"weekly"
 * @param {Array<string>} weatherCodesArray 天気コードの配列
 */
function setWeatherInfo(areaPrefix, weatherCodesArray) {
  const images = document.querySelectorAll(`.${areaPrefix}__weather-image`);
  const texts = document.querySelectorAll(`.${areaPrefix}__weather-text`);

  //天気画像のセット
  images.forEach((image, index) => {
    const weatherCode = weatherCodesArray[index];
    image.src = externalImageUrl + weatherCodes[weatherCode][0];
    image.alt = weatherCodes[weatherCode][1];
  });

  //テキストのセット
  texts.forEach((text, index) => {
    const weatherCode = weatherCodesArray[index];
    text.textContent = weatherCodes[weatherCode][1];
  });
}

/**
 * 表示用データを作成
 * @param {*} data 天気詳細APIで取得したデータ
 * @returns 表示用の直近の天気予報データと週間天気予報データ
 */
function parseDetailWeatherData(data) {
  //観測発表時刻
  const reportDatetime = data[0].reportDatetime;
  let reportDatetimeType;
  if (reportDatetime.includes("T05")) {
    reportDatetimeType = 1;
  } else if (reportDatetime.includes("T11") || reportDatetime.includes("T12")) {
    reportDatetimeType = 2;
  } else {
    //T17,T21,T22
    reportDatetimeType = 3;
  }

  //今日
  const today = data[0].timeSeries[0].timeDefines[0];

  //明日
  const tomorrow = data[0].timeSeries[0].timeDefines[1];

  //直近データ：天気
  const todayWeatherCode = data[0].timeSeries[0].areas[0].weatherCodes[0];
  const tomorrowWeatherCode = data[0].timeSeries[0].areas[0].weatherCodes[1];

  //直近データ：風速
  let todayWave = "-", tomorrowWave = "-";
  if (data[0].timeSeries[0].areas[0].waves) {
    todayWave = data[0].timeSeries[0].areas[0].waves[0];
    tomorrowWave = data[0].timeSeries[0].areas[0].waves[1];
  }

  //直近データ：降水確率
  const popsTimeDefines = data[0].timeSeries[1].timeDefines;
  const pops = data[0].timeSeries[1].areas[0].pops;
  let todayPops, tomorrowPops;
  if (popsTimeDefines[0].includes("T00")) {
    todayPops = `${pops[0]} / ${pops[1]} / ${pops[2]} / ${pops[3]}`;
    tomorrowPops = `${pops[4]} / - / - / -`;
  } else if (popsTimeDefines[0].includes("T06")) {
    todayPops = `- / ${pops[0]} / ${pops[1]} / ${pops[2]}`;
    tomorrowPops = `${pops[3]} / ${pops[4]} / ${pops[5]} / ${pops[6]}`;
  } else if (popsTimeDefines[0].includes("T12")) {
    todayPops = `- / - / ${pops[0]} / ${pops[1]}`;
    tomorrowPops = `${pops[2]} / ${pops[3]} / ${pops[4]} / ${pops[5]}`;
  } else {
    todayPops = `- / - / - / ${pops[0]}`;
    tomorrowPops = `${pops[1]} / ${pops[2]} / ${pops[3]} / ${pops[4]}`;
  }

  //直近データ：最高気温、最低気温
  let todayTempMax, tomorrowTempMax;
  let todayTempMin, tomorrowTempMin;
  if (reportDatetimeType === 1) {
    todayTempMax = data[0].timeSeries[2].areas[0].temps[0];
    todayTempMin = "-";
    tomorrowTempMax = data[0].timeSeries[2].areas[0].temps[3];
    tomorrowTempMin = data[0].timeSeries[2].areas[0].temps[2];
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

  return {
    recent: { //直近の天気予報データ
      dates: [today, tomorrow],
      weatherCodes: [todayWeatherCode, tomorrowWeatherCode],
      waves: [todayWave, tomorrowWave],
      pops: [todayPops, tomorrowPops],
      tempsArea: data[0].timeSeries[2].areas[0].area.name,
      tempsMax: [todayTempMax, tomorrowTempMax],
      tempsMin: [todayTempMin, tomorrowTempMin],
    },
    weekly: { //週間天気予報データ
      dates: data[1].timeSeries[0].timeDefines.slice(1),
      weatherCodes: data[1].timeSeries[0].areas[0].weatherCodes.slice(1),
      reliabilities: data[1].timeSeries[0].areas[0].reliabilities.slice(1),
      pops: data[1].timeSeries[0].areas[0].pops.slice(1),
      tempsArea: data[1].timeSeries[1].areas[0].area.name,
      tempsMax: data[1].timeSeries[1].areas[0].tempsMax.slice(1),
      tempsMin: data[1].timeSeries[1].areas[0].tempsMin.slice(1),
    }
  };
}

/**
 * 直近と週間天気予報データを表示する
 * @param {*} weatherData 表示用天気予報データ
 */
function displayDetailWeatherData(weatherData) {
  //---直近の天気予報を表示----
  //直近データ：日付表示
  setDateValues(".recent__date-item", weatherData.recent.dates);

  //直近データ：日付ラベル（今日or明日）表示
  document.querySelectorAll(".recent__date-label").forEach((label, index) => {
    if (index === 0) {
      const today = weatherData.recent.dates[0];
      if (convertDateFormattedString(today) === convertDateFormattedString(new Date())) {
        label.textContent = "今日";
        disableRecentTableStyle(false);
      } else {
        label.textContent = "昨日";
        disableRecentTableStyle();
      }
    } else if (index === 1) {
      const tomorrow = weatherData.recent.dates[1];
      const tomorrowDate = new Date();
      tomorrowDate.setDate(tomorrowDate.getDate() + 1);
      if (convertDateFormattedString(tomorrow) === convertDateFormattedString(new Date())) {
        label.textContent = "今日";
      } else if (convertDateFormattedString(tomorrow) === convertDateFormattedString(tomorrowDate)) {
        label.textContent = "明日";
      }
    }
  });

  //直近データ：天気画像、天気テキスト表示
  setWeatherInfo("recent", weatherData.recent.weatherCodes);

  //直近データ：風速表示
  setTextValues(".recent__wave", weatherData.recent.waves);

  //直近データ：降水確率表示
  setTextValues(".recent__pops", weatherData.recent.pops);

  //直近データ：県庁所在地を表示
  setTextValues(".recent__prefectural-capital", [weatherData.recent.tempsArea, weatherData.recent.tempsArea]);

  //直近データ：最高気温表示
  setTextValues(".recent__temps-max", weatherData.recent.tempsMax);

  //直近データ：最低気温表示
  setTextValues(".recent__temps-min", weatherData.recent.tempsMin);

  //---週間天気予報を表示---
  //週間予報データ：日付表示
  setDateValues(".weekly__date", weatherData.weekly.dates);

  //週間予報データ：天気画像、天気テキスト表示
  setWeatherInfo("weekly", weatherData.weekly.weatherCodes);

  //週間予報データ：信頼度表示
  setTextValues(".weekly__reliability", weatherData.weekly.reliabilities);

  //週間予報データ：降水確率表示
  setTextValues(".weekly__pops", weatherData.weekly.pops);

  //週間予報データ：県庁所在地を表示
  setTextValues(".weekly__prefectural-capital", [weatherData.weekly.tempsArea, weatherData.weekly.tempsArea]);

  //週間予報データ：最高気温表示
  setTextValues(".weekly__temps-max", weatherData.weekly.tempsMax);

  //週間予報データ：最低気温表示
  setTextValues(".weekly__temps-min", weatherData.weekly.tempsMin);
}

/**
 * 天気詳細を取得、表示
 * @param {String} cityNumber 都道府県コード
 */
function getDetailWeatherData(cityNumber) {
  fetch(`${detailWeatherDataApiUrl}/${cityNumber}.json`)
    .then(response => response.json())
    .then(data => {
      //表示用天気予報データ
      const weatherData = parseDetailWeatherData(data);

      //直近と週間天気予報データを表示
      displayDetailWeatherData(weatherData);
    })
    .catch(error => {
      console.error("地域コード:" + cityNumber + "の天気詳細データ取得にてエラーが発生しています。", error);
      clearInputDetailWeatherData();
    });
}

/**
 * 天気概要を取得、表示
 * @param {String} cityNumber 都道府県コード
 */
function getOverviewWeatherData(cityNumber) {
  fetch(`${overviewWeatherDataApiUrl}/${cityNumber}.json`)
    .then(response => response.json())
    .then(data => {
      //観測気象台
      const publisher = data.publishingOffice;
      document.querySelector(".overview__publisher").textContent = publisher;

      //観測時間
      const reportDateTime = data.reportDatetime;
      document.querySelector(".overview__report-date-time").textContent = convertDateFormattedString(reportDateTime, true);

      //概要
      const overviewText = data.text.replace(/\r\n|\n|\r/g, "<br>").replace(/\s/g, "");
      document.querySelector(".overview__text").innerHTML = overviewText;

      //選択した都道府県コードを保存
      localStorage.setItem("selectedCity", cityNumber);
    })
    .catch(error => {
      console.error("地域コード:" + cityNumber + "の天気概要データ取得にてエラーが発生しています。", error);
      clearInputOverviewWeatherData();
    });
}

/**
 * 初期処理
 */
function init() {
  //localStorageの設定値でダークモード切り替え
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    html.classList.add("dark");
    header.classList.add("dark");
    footer.classList.add("dark");
    darkModeButton.checked = true;
  }

  //localStorageの設定値で都道府県を初期選択
  const selectedCity = localStorage.getItem("selectedCity");
  if (selectedCity) {
    getOverviewWeatherData(selectedCity);
    getDetailWeatherData(selectedCity);

    for (const option of prefecturesSelectBox.options) {
      if (selectedCity === option.value) {
        option.selected = true;
        break;
      }
    }
  }

  //週間天気予報表にスクロールヒントを設定
  new ScrollHint(".js-scroll-hint", {
    i18n: {
      scrollable: "横スクロール",//表示文字列
    },
    scrollHintIconAppendClass: 'custom-scroll-hint-icon',//追加クラス名
  });
}

init();
