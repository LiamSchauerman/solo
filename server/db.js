var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "password",
  database: "cagematch"
});

dbConnection.connect();
exports.getScore = function(title, cb){
  var queryString = "select score from movies where title = " + title + ';';
  dbConnection.query(queryString, cb)
};


exports.addMovie = function(imdbId, title, score, imgUrl, cb){
  var queryString = 'insert into movies (imdbId, title, score, imgUrl) values ('+imdbId+", '"+title+", '"+score+", '"+imgUrl");";
  dbConnection.query(queryString, function(err, data){
    if (err) {
      throw err;
    }
    else {
      cb();
    }
  });
};
