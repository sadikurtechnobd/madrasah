$(document).ready(function(){
	$(".logo span i").click(function(){
		$(".demos ul").fadeToggle();
	});
	
	//Scrollt Smooth 

	 $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',         // the easing function for animation
      scrollTime: 800,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: 0            // offste (in px) for fixed top navigation
    });

    // ScrollTop
      var scrollTop = $(".scrollTop");
      $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos >300) {
          $(scrollTop).css({"opacity": "1" , "visibility" : "visible"});

        } else {
          $(scrollTop).css({"opacity": "0" , "visibility" : "hidden"});
        }

      }); 
      // scroll END

      //Click event to scroll to top
      $(scrollTop).click(function() {
        $('html, body').animate({
          scrollTop: 0
        },600);
        return false;

      });
});