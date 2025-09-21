# 天気予報APIを使ったアプリ<!-- omit in toc -->
<img width="1920" height="1945" alt="Image" src="https://github.com/user-attachments/assets/4d07a60d-8d3c-47f7-a83c-036dc37bf43f" />

## 目次<!-- omit in toc -->
- [概要](#概要)
- [公開URL](#公開url)
- [目的](#目的)
- [使用技術](#使用技術)
- [使用フォント](#使用フォント)
- [デザインカンプ](#デザインカンプ)
- [全体画像](#全体画像)
- [機能説明](#機能説明)
  - [都道府県選択](#都道府県選択)
  - [直近の天気予報](#直近の天気予報)
  - [週間天気予報](#週間天気予報)
  - [天気概要](#天気概要)
  - [ダークモード切り替え](#ダークモード切り替え)

## 概要
* Javascriptのfetch機能によるapi連携の練習。
* localStorage機能を使用したユーザーの選択状態の保存、ダークモード切り替えの実装練習。
* 気象庁の天気予報apiを使用しています。
* 天気詳細：https://www.jma.go.jp/bosai/forecast/data/forecast/都道府県コード.json
* 天気概要：https://www.jma.go.jp/bosai/forecast/data/overview_forecast/都道府県コード.json

## 公開URL
[https://weather.mikanbako.jp/](https://weather.mikanbako.jp/)

## 目的
* 天気予報apiを使用してデータを取得、適切に加工して表示する。
* localStorage機能を使用して、ユーザーの選択情報の保持、ダークモード切り替え情報の保持。

## 使用技術
* HTML
* CSS
* JavaScript
* [ScrollHint(JavaScriptライブラリ)](https://github.com/appleple/scroll-hint)

## 使用フォント
* [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)

## デザインカンプ
* デザインデータはありません。

## 全体画像
* 通常モード

<img width="1920" height="1945" alt="Image" src="https://github.com/user-attachments/assets/4d07a60d-8d3c-47f7-a83c-036dc37bf43f" />

* ダークモード

<img width="1920" height="1945" alt="Image" src="https://github.com/user-attachments/assets/6610a3a0-681d-4294-8640-2ff2046dc3f8" />

## 機能説明
このアプリケーションの各機能を紹介、説明します。

### 都道府県選択
![Image](https://github.com/user-attachments/assets/9e4a6ded-52a9-4502-8a98-10dd3373903c)

* 天気予報を表示する対象の都道府県（北海道は各地域）を選択します。
* 初期表示は「選択してください」となっています。
* 一度選択すると、localStorageに選択情報が保存され、以降は再度ページにアクセスすると以前選択した都道府県が選択された状態となります。

### 直近の天気予報
<img width="860" height="401" alt="Image" src="https://github.com/user-attachments/assets/0e64dde3-1836-4376-9635-cbc5eb29514b" />

（上の画像は「東京都」の直近の天気予報を表示しています。）

* 「天気」、「風速」、「降水確率」、「最高気温」、「最低気温」を表示します。
* 「風速」はデータが提供されていない地域もあり、その場合は「-」で表示されます。
* 「降水確率」は0～6時/6～12時/12～18時/18～24時/の4つの時間帯の降水確率をそれぞれ表示しています。既に過ぎた時間帯の降水確率は「-」で表示されます。
* 「最高気温」、「最低気温」は、その都道府県の県庁所在地での「最高気温」、「最低気温」の予報データとなります。
* 0~5時までは次の日の予報が取得できないので（5時に情報が更新される為）、この時間帯の表示は次の画像のようになります。その時点での昨日の情報が取得、表示されるので、その部分を二重線で消しています。

<img width="863" height="408" alt="Image" src="https://github.com/user-attachments/assets/38df4c69-7725-4b0d-b526-310c155c1afd" />

### 週間天気予報
<img width="864" height="330" alt="Image" src="https://github.com/user-attachments/assets/7037b77b-344e-4049-922c-89c2e5c28663" />

（上の画像は「東京都」の週間天気予報を表示しています。）

* 「天気」、「信頼度」、「降水確率」、「最高気温」、「最低気温」を表示します。
* 直近の天気予報にて、明日の天気予報を表示しているので、ここでは明日を除いた6日間分の予報を表示しています。
* sp表示の時は横スクロールで週間予報表を見ることが出来ます。[ScrollHint](https://github.com/appleple/scroll-hint)を使用して横スクロール可能であることを表示しています。

![Image](https://github.com/user-attachments/assets/37bbbfb8-7f30-4b78-96fb-eeedbdb00833)

### 天気概要
<img width="852" height="399" alt="Image" src="https://github.com/user-attachments/assets/37920416-6db4-4266-8e07-9fb573d17c19" />

（上の画像は「東京都」の天気概要を表示しています。）

* 天気予報の概要を表示します。
* 「観測気象台」、「観測時間」、「概要」の三項目を表示します。

### ダークモード切り替え
![Image](https://github.com/user-attachments/assets/56713ad7-1d02-4bea-8443-2a754e726639)

* ボタンをクリックするとダークモードの切り替えが出来ます。
* 一度クリックすると、localStorageに情報が保存され、以降は再度ページにアクセスすると以前選択した状態となります。