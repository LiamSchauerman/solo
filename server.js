var express = require('express');
var http = require('http');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/cagematch');
// var url = require('url');
// var fs = require('fs');
var bodyParser  = require('body-parser'),
app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('views', __dirname + '/client/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/client"));
app.use(function(req,res,next){
    req.db = db;
    next();
});
// app.use(express.bodyParser());
// app.use(app.router)


var port = process.env.PORT || 1337;
app.listen(port);
console.log("Server listening on ", port)


app.get('/', function(req, res){
	res.render('index.html')
})


// get mongo data
app.get('/title', function(req, res){
	var db = req.db;
	var collection = db.get("generalInfo");
	collection.find({},{}, function(e,docs){
		if(e) console.log(e);
		res.status(200).json({
			"docresults" : docs
		});
	});
});
app.post('/post', function(req,res){
	var db = req.db;
	var collection = db.get('generalInfo');
	collection.insert({
		"testKey" : "TestValue",
		"TestObject" : {
			"nested" : true
		}
	}, function(err, doc){
		if( err ){
			res.send("Error in post")
		} else {
			res.location('title');
			res.redirect('title');
		}
	})
})
// app.post()