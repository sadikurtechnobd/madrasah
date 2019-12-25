/*-----------------------------------------------------------------------------------
/* ----------------------------------------------------------------
	TABLE OF CONTENTS
	
	#Sticky Header
	#ScrollTop
	#Mobile Menu
	#Team Carousel
	#Counter Active
	#Client Carousel
	#Scrollt Smooth
	#Magnific PopUp
	#Magnific PopUp Video 
	#Preloader
	#IsoTope
---------------------------------------------------------------- */
// Client Carousel
$('.hero-slider-content').owlCarousel({
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	loop:true,
	autoplayTimeout:5000,
	smartSpeed:6000,
	items:1,
	autoplay:true,
	nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	dots:false,
});
	
$(document).ready(function(){
	// calendar
	$(function() {
		$('.calendar').pignoseCalendar();
	});
	/******** mobile icon **********/
	$('.nav-icon').click(function(){
		$('.mobile-menu-area').slideToggle();
		return false;
	});
	/********** dropdown click menu ********/
	$('.drop-menu').click(function(){
		$('.dropdown1').slideToggle();
		return false;
	});
	
		/*********** popup ************/
		$('.popup').magnificPopup({
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				}
			},
			gallery: {
				enabled: true,
			},
		});
				/********* news trciker ***********/
		  var tickerLength = $('.demo1 ul li').length;
			  var tickerHeight = $('.demo1 ul li').outerHeight();
			  $('.demo1 ul li:last-child').prependTo('.demo1 ul');
			  $('.demo1 ul').css('marginTop',-tickerHeight);
			  function moveTop(){
				$('.demo1 ul').animate({
				  top : -tickerHeight
				},600, function(){
				 $('.demo1 ul li:first-child').appendTo('.demo1 ul');
				  $('.demo1 ul').css('top','');
				});
			   }
			  setInterval( function(){
				moveTop();
			  }, 3000);
	
	
}); 	





