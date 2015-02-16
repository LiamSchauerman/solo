var express = require('express');
var http = require('http');
var request = require('request');
var url = require('url');
var fs = require('fs');
var bodyParser  = require('body-parser');
var pg = require('pg')
  , connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres'
  , client
  , query;
var port = process.env.PORT || 1337;
client = new pg.Client(connectionString);
client.connect();

app = express();
// var corsHeaders = {
//   "Access-Control-Allow-Origin" : "*",
//   "Access-Control-Allow-Headers" : "*",
//   "Access-Control-Allow-Methods" : "*"
// }
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('views', __dirname + '/client/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/client"));
    
app.use(function(req, res, next) {
  console.log('setting headers')
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers",  'Content-Type, X-Requested-With');
    next();
});

app.get('/scrape', function(req, res){
  console.log('inside /scrape route');
  request('http://www.imdb.com/name/nm0002071', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })


});
app.get('/', function(req, res){
  res.render('index.html')
})
app.get('/postgres', function(req, res) {
  var date = new Date();

  client.query('INSERT INTO mytable(date) VALUES($1)', [date]);

  query = client.query('SELECT COUNT(date) AS count FROM mytable WHERE date = $1', [date]);
  query.on('row', function(result) {
    console.log(result);

    if (!result) {
      return res.send('No data found');
    } else {
      res.send('Visits today: ' + result.count);
    }
  });
});

app.listen(port, function(){
	console.log("Server listening on ", port)
});
