// The ORM, where the functions that take inputs and conditions 

var connection = require('./connection.js');

//selectAll()
var orm = {
	all: function(tableInput, cb){
		connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
			if(err) throw err;
			cb(result);
		})
	}
},

//updateOne()

	update: function(tableInput, condition, cb){
		connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id='+condition+';',
			function(err,result){
				if(err) throw err;
				cb(result);
			})
	},

//insertOne()

	create: function(tableInput, val, cb){
		connection.query('INSERT INTO ' + tableInput+ " (burger_name) VALUES ('"+val+"'');",
			function(err,result){
				if(err)throw err;
				cb(result);
			})
	}
}

module.exports = orm;