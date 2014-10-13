  var express = require('express');
  var app = express();

  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(partials());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/client'));



app.listen(4568)


app.get('/', function(){
	res.render('index')
})