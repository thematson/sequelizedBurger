var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

 app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });