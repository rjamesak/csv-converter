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

```javascript
axios({
  method: "post",
  url: apiUrl,
  data: file,
  headers: { "Content-Type": "multipart/form-data" },
})
  .then((response) => {
    // log response
    console.log(response.data.data.convertedJson);
    // add response to html text or textarea tag
    document.querySelector("#json-display").value = JSON.stringify(
      response.data.data.convertedJson
    );
  })
  .catch((error) => {
    console.log(error);
  });
```

## GUI

When launched, a gui is available at the home route '/'
![gui screen](/public/images/guiScreenShot.jpg "app gui interface")

Here you can choose a csv, upload it, and the returned JSON will be displayed in the text area.
