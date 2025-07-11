fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelector(".test").textContent = data.name;
  })
  .catch(error => {
    console.error('データの取得に失敗しちゃった…', error);
  });