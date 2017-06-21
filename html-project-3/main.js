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
$(document).ready(function(){ 

 $(".nav li").hover(
// function 1 of 2 is declared for when mouse enters
	function() {
	// the color property of .nav li will turn red so its text will
	//$(this).fadeOut(100);
	$(this).css( "color", "red" );
	// a comma indicated the border between the first and the second function
	}, 
	// a second function is declared
	function(){
	// changing the color back to black when mouse leaves
	// $(this).fadeIn(5000);
	$(this).css( "color", "black" );
	}); 

// "If you sleep 3 hours two nights in a row, stay calm", "let nature take its course", "life is life"

// function "randomWisdom" is declared
function randomWisdom(){
	// variable mantras contains Sam's wisdoms stored in an array
	var mantras = ["If you sleep 3 hours two nights in a row, stay calm", 
	"let nature take its course", "life is life"];
	// random outputs a random number between 0 and 2
	var random = Math.floor(Math.random() * 3);
	// one of the quotes is returned surrounded by quotation marks
	return "\"" + mantras[random] + "\"";
}

// randomWisdom is called
randomWisdom();

//the randomly generated wisdom is appended to the paragraph marked with the #wisdoms id
$("#wisdoms").append(randomWisdom());

 })