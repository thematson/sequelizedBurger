// var express = require("express");
// var bodyParser = require("body-parser");

// var app = express();
// var port = 3000;

// // Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b82292e3e8d550",
  password: "826ef24f",
  database: "heroku_ed2b7c7680e21d2"
});

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
