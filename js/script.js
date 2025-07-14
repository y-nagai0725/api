fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/016000.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelector(".test").textContent = data.text;
  })
  .catch(error => {
    console.error('データの取得に失敗しちゃった…', error);
  });