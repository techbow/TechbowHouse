var mongoose = require('mongoose');
var config = require('../config');


module.exports = function() {
	mongoose.connect(config.connectionstring);

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function (callback) {
	    console.log('chummy db opened');
	});
};

