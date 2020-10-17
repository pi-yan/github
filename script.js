$(function() {

  $(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
  
  $(function(){
    $('.hamburger-menu').on('click', function() {
      $(this).toggleClass('hamburger-menu-active')
    })
  })
});