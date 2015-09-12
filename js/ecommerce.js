$(document).ready(function(){

	/*Controls the Header Background Fade*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50){
			$('header').removeClass().addClass('scrolled')
		} else {
			$('header').removeClass().addClass('normal');
		};
	});
	/*Controls Mobile Dropdown Menu*/
	$('#mobile-menu-button').click(function(){
		$('.upperLink').css('display','block');
	});
	$('#aboutHead').click(function(){
		$('.rent-link').css('top','200px');
	});
	$('.topOverlay').hide()
	$('.bottomOverlay').hide()
	$('.card').mouseover(function(){
		$(this).find('.topOverlay').show();
		$(this).find('.bottomOverlay').show();
		// $(this).find('.topOverlay').animate({'height': '20%'},200);
		// $(this).find('.bottomOverlay').animate({'height': '30%'},100);
	});
	$('.card').mouseout(function(){
		$(this).find('.topOverlay').hide();
		$(this).find('.bottomOverlay').hide();
	});		

});