import mariadb from "mariadb";

fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/016000.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelector(".test").textContent = data.text;
  })
  .catch(error => {
    console.error('データの取得に失敗しちゃった…', error);
  });

//const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',              //データーベースを操作するユーザー名を記述する
    password: '',          //操作するユーザーのパスワードを記述する
    database: 'hotel',          //操作するデーターベース名を記述
    // 同時接続数の制限（任意）をかけるために記述
    //connectionLimit: 5
});

pool.getConnection()
  .then(conn => {
    conn.query('select * from wp_users')
      .then(results => {   //データーベースからデーターを取得できた場合の処理
        console.log(results)
      })
      .catch(error => {   //データーベースの接続を失敗したときの処理
        console.log(error);
      })
      .finally(() => { //最後に必ず行う処理
        //接続を終了する
        if (conn) conn.end();
      });

  }).catch((error) => {
    console.log(error);
  });