//****************************************
// code to connect Node to MySQL        **
//****************************************

var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '04Hgao05!',
	database: 'burger_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// ***  export connection ***
module.exports = connection;




