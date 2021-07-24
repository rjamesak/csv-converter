// import * as axios from "axios"

const apiUrl = "https://intense-castle-91628.herokuapp.com/upload-csv"
const localApiUrl = "localhost:5000/upload-csv"
// EVENT LISTENERS
document.querySelector("#btn").addEventListener("click", ((e) => {
    // get the csv file
    let csv = document.querySelector("#csv-upload").files[0]
    console.log('csv:', csv)
    console.log('clicked!', e)
    // send the file
    if (csv) {
        let formData = new FormData()
        formData.append('csv', csv, csv.name)
        // postFile(csv)
        console.log('formData:', formData)
        postFile(formData)
    }
    else {
        console.log('no csv')
    }
}))

document.querySelector("#copy-btn").addEventListener("click", () => {
    // get text from json-display div
    let jsonText = document.getElementById("json-display").select()
    // copy to clipboard https://www.codegrepper.com/code-examples/html/how+to+give+auto+copy+by+click+with+html
    // jsonText.select()
    document.execCommand("copy")
    console.log('copied json text')

})

// SUBMIT csv file to converter
function postFile(file) {
    console.log('posting file:', file)
    axios({
        method: "post",
        url: apiUrl,
        data: file,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then((response) => {
            console.log(response)
            console.log(response.data.data.convertedJson)
            // document.querySelector("#json-display").textContent = JSON.stringify(response.data.data.convertedJson)
            document.querySelector("#json-display").value = JSON.stringify(response.data.data.convertedJson)
        })
        .catch((error) => {
            console.log(error)
        })
}