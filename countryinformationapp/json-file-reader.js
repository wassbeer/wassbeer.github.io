var fs = require('fs');

function readJson(filename, callback){
	fs.readFile(filename, function(err, data){
		if(err){
		throw err;
	}

var obj = JSON.parse(data);
	
	callback(obj);
	// That "aha" moment about callback functions.
	})

}

// NOT exports.module
module.exports = {
	readJson: readJson
}