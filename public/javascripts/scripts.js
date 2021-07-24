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
        formData.append('csv', csv)
        // postFile(csv)
        postFile(formData)
    }
    else {
        console.log('no csv')
    }
}))

function postFile(file) {
    console.log('posting file:', file)
    axios({
        method: "post",
        url: apiUrl,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
}