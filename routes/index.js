var express = require('express');
var router = express.Router();
const csvtojson = require('csvtojson')

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('getting home page')
  let context = {}
  context.title = 'Express'
  context.name = 'Russell'
  res.render('index', context);
});

router.post('/upload-csv', async (req, res) => {
  console.log('received request to upload')
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded'
      })
    }
    else {
      // use name of input field to get uploaded file
      let csv = req.files.csv
      console.log(csv)
      // move to uploads folder
      csv.mv('./public/uploads/' + csv.name)

      await csvtojson()
        .fromFile('./public/uploads/' + csv.name)
        .then((jsonObj) => {
          console.log('jsonObj:', jsonObj)
          res.send({
            status: true,
            message: 'File is uploaded',
            data: {
              name: csv.name,
              mimetype: csv.mimetype,
              size: csv.size,
              convertedJson: jsonObj
            } // end data
          }) // end send
        })

      // send response
    } // end else
  } // end try
  catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router;
