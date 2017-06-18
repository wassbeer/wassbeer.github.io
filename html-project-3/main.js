// page 1: Guru Sam, containing a picture of Sam in Rome and a parapgraph shortly introducing Guru Sam
// Page 2: Philosophy, containing a mantra in huge font, randomly generated by a program containing an array with several wisdom like quotes "If you sleep 3 hours two nights in a row, stay calm", "let nature take its course", "life is life"
// page 3: Method, containing a video of the Taiwan buddhism randomness method and a paragraph explaining this
// children elements li of class nav are selected for event handler hover

/* //1. on hover red colour
$(".nav li").hover(
// function 1 of 2 is declared for when mouse enters
	function() {
	// the color property of .nav li will turn red so its text will
	$(this).css("color", "red");
	// a comma indicated the border between the first and the second function
	}, 
	// a second function is declared
	function(){
	// changing the color back to black when mouse leaves
	$(this).css("color", "black");
	}); */

//2. on hover fade out fade in

 $(".nav li").hover(
// function 1 of 2 is declared for when mouse enters
	function() {
	// the color property of .nav li will turn red so its text will
	$(this).fadeOut(1500);
	// a comma indicated the border between the first and the second function
	}, 
	// a second function is declared
	function(){
	// changing the color back to black when mouse leaves
	$(this).fadeIn(100);
	}); 

// "If you sleep 3 hours two nights in a row, stay calm", "let nature take its course", "life is life"

// $(document).ready(function(){ 
function randomWisdom(){
	var mantras = ["If you sleep 3 hours two nights in a row, stay calm", 
	"let nature take its course", "life is life"];
	var random = Math.floor(Math.random() * 3);
	return "\"" + mantras[random] + "\"";
}

randomWisdom();

$("#wisdoms").append(randomWisdom());

// $("#mantras").append("!" + mantras[Math.floor(Math.random * 3)] + "!");
// };
// });