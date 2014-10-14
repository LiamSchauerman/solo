var express = require('express');
var http = require('http');
var url = require('url');
var fs = require('fs');
var bodyParser  = require('body-parser'),
app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + './../client/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + './../client'));
// app.use(express.bodyParser());
app.use(function(req, res, next){


	next()
})
// app.use(app.router)



app.listen(4568)


app.get('/', function(req, res){
	res.render('index')
})
// app.post()