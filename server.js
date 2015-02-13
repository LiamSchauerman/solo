var express = require('express');
var http = require('http');
var url = require('url');
var fs = require('fs');
var bodyParser  = require('body-parser');
var pg = require('pg')
  , connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres'
  , client
  , query;
// var conString = "postgres://postgres:1234@localhost/postgres";
var port = process.env.PORT || 1337;
client = new pg.Client(connectionString);
client.connect();
// query = client.query('SELECT * FROM mytable');
// query.on('end', function() { client.end(); });

app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('views', __dirname + '/client/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/client"));

// app.use(express.bodyParser());
// app.use(app.router)




// app.get('/', function(req, res){
// 	res.render('index.html')
// })
app.get('/', function(req, res) {
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
