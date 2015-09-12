$(document).ready(function(){

	/*Controls the Header Background Fade*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50){
			$('header').removeClass().addClass('scrolled')
		} else {
			$('header').removeClass().addClass('normal');
		};
	});
	$('.textWrapper').delay(500).animate({'left': '0%'},"slower");
	$('hr').delay(2000).animate({'left': '0%'},"slower");
	$('#oval1').delay(800).animate({'right': '0%'},"slower");
	$('#oval2').delay(1400).animate({'right': '0%'},"slower");
	$('#oval3').delay(1000).animate({'right': '0%'},"slower");
});