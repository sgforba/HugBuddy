$(document).ready(function(){

	/*Controls the Header Background Fade*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50){
			$('header').removeClass().addClass('scrolled')
		} else {
			$('header').removeClass().addClass('normal');
		};
	});
	$('.overlay').hide()
	$('.teamCard').mouseover(function(){
		$(this).find('.overlay').show();
	});
	$('.teamCard').mouseout(function(){

		$(this).find('.overlay').hide();
	});	
});