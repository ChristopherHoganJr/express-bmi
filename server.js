const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/', function (req, res) {
  let height = Number(req.body.height)
  let weight = Number(req.body.weight)
  let BMI = (weight * 703) / height ** 2
  res.send('Your BMI is: ' + BMI)
})

app.listen(3000, function () {
  console.log('server is running on port 3000')
})
