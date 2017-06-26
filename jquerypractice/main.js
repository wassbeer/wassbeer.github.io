  // when the document is ready an anonymous function is called
  $(document).ready(function(){

//1
$('#jid_ten').hide();

//2
$("#jid_one").on('click', function(){
	$('#jid_nine').fadeOut("fast")
	});

//3
$('#jid_two').on('click', function(){
		$('#jid_nine').fadeIn("fast")
	});

//4
 $('#jid_three').hover(
	function() {
	$('#jid_nine').hide();
	}, 
	function(){
	$('#jid_nine').show();
	}); 

//5  
 $('#jid_four').on("click", function(){
	$('#jid_ten').slideToggle(),
	$('#jid_nine').slideToggle();
	});

//6

$("#jid_five")
  .on( "mouseenter", function() {$("h1").append("#$% Tractatus #$%")});

//7

$("#jid_six")
  .on( "mouseenter", function() {$("h1").prepend("*&^ Eternal Recurrence *&^")});
});






