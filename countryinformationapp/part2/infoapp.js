var fs = require('fs')
var fileReader = require("./json-file-reader")

var countryname = process.argv[2];

fileReader.readJson("countries.json", function(a){

var obj = a; 

for(var i = 0; i < obj.length; i++){
	if(obj[i].name === countryname){
	console.log("Country: " + obj[i].name + '\n' + "Borders: " + obj[i].borders);
	}
}
});