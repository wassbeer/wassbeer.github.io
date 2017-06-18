function randomWisdom(){
	var mantras = ["If you sleep 3 hours two nights in a row, stay calm", 
	"let nature take its course", "life is life"];
	var random = Math.floor(Math.random() * 3);
	return mantras[random];
}

randomWisdom();

$("#mantras").append(randomWisdom());