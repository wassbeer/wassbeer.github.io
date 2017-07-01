var fs = require('fs')

var countryname = process.argv[2];

fs.readFile("countries.json", function(err, data){

if (err) {
	throw err;
	}

var obj = JSON.parse(data);
for(var i = 0; i<obj.length; i++){
	if(obj[i].name === countryname){
	console.log("Country: " + obj[i].name + '\n' + 
	"Top level domain: " + obj[i].topLevelDomain 
	);
}
}
});
