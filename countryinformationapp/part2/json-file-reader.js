var fs = require('fs');

function readJson(filename, callback){
	fs.readFile(filename, function(err, data){
		if(err){
		throw err;
	}

var obj = JSON.parse(data);
	
	callback(obj);

	})

}

// NOT exports.module
module.exports = {
	readJson: readJson
}