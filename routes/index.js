var express = require('express');
var router = express.Router();

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
      let csvFile = req.files.csvFile
      console.log(csvFile)
      csvFile.mv('./public/uploads/' + csvFile.name)
      // send response
      res.send({
        status: true,
        message: 'File is uploaded',
        data: {
          name: csvFile.name,
          mimetype: csvFile.mimetype,
          size: csvFile.size
        }
      })
    } // end else
  } // end try
  catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router;
