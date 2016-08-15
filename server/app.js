var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var math = require('./routes/adding');

var numbers = 0;

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/number/one', function (req, res) {
  var nums = req.body;
  console.log(nums);
  numbers = math.addThem(nums);
  console.log(numbers);
  res.sendStatus(201);
});

app.post('/number/two', function (req, res) {
  var nums = req.body;
  console.log(nums);
  numbers = math.subThem(nums);
  console.log(numbers);
  res.sendStatus(201);
});

app.post('/number/three', function (req, res) {
  var nums = req.body;
  console.log(nums);
  numbers = math.multThem(nums);
  console.log(numbers);
  res.sendStatus(201);
});

app.post('/number/four', function (req, res) {
  var nums = req.body;
  console.log(nums);
  numbers = math.divThem(nums);
  console.log(numbers);
  res.sendStatus(201);
});

app.get('/number', function (req, res) {
  console.log("I want to send you some numbers");
  console.log(numbers);
  answer = numbers.toString();
  res.send(answer);
});

app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';

  console.log('What is in req.params[0]?', req.params[0]);

  //console.log('dirname: ', __dirname);
  //console.log('path', path.join(__dirname, '../public', file));
  res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function () {
  console.log('Server now running at port ', app.get('port'));
});
