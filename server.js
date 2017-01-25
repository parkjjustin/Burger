var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var path = require("path");
var burgerRoutes = require("./controllers/burgers_controller.js");

var app = express();
var PORT = 8080;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




app.use("/", burgerRoutes);

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});