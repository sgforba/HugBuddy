$(document).ready(function(){
	$('.findButton').hide();
	$('#fade1').hide();
	$('#fade2').hide();
	$('header').hide();
	$('body').mouseenter(function(){
		$('header').delay(1000).slideDown();
		$('#fade1').delay(1500).fadeIn();
		$('#fade2').delay(2000).fadeIn();
		$('.findButton').delay(2500).fadeIn()


	});
});