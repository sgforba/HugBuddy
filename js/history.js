$(document).ready(function(){

	/*Controls the Header Background Fade*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50){
			$('header').removeClass().addClass('scrolled')
		} else {
			$('header').removeClass().addClass('normal');
		};
	});
	$('.storyOverlay').hide()
	$('.quotePic').mouseover(function(){
		// $(this).filter(':not(:animated)').animate({'marginTop':'-3px'});
		$(this).find('.picOverlay').show();
	});
	$('.quotePic').mouseout(function(){
		// $(this).animate({
		// 	'marginTop': '0px'
		// });
		$(this).find('.picOverlay').hide();
	});	
});