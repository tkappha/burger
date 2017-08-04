var express = require('express');
var bodyParser = require('body-parser');
var method = require('method-override');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var PORT = process.env.PORT || 8080;

app = express();
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT);

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '04Hgao05!',
	database: 'burger_db'

});

connection.connect(function(err){
	if(err)throw err;
	console.log('Connected as id: ' + connection.threadId);
})