This is my microservice for CS361.
It will convert a csv file to json.

## to install

npm install

## to run

npm start

This is an Express app scaffolded from the
<a href="https://expressjs.com/en/starter/generator.html">express application generator</a>

The '/upload-csv' route has been configured to accept a csv file and return a json.

### example api code

`axios({ method: "post", url: apiUrl, data: file, headers: { "Content-Type": "multipart/form-data" }, }) .then((response) => { console.log(response) console.log(response.data.data.convertedJson) // document.querySelector("#json-display").textContent = JSON.stringify(response.data.data.convertedJson) document.querySelector("#json-display").value = JSON.stringify(response.data.data.convertedJson) }) .catch((error) => { console.log(error) })`
