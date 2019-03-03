(function ($) {
    
    // This is for the Nav bar
	$(document).ready(function(){
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('header').outerHeight();
		
		$(window).scroll(function(event){
			didScroll = true;
		});
		
		setInterval(function() {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 250);
		
		function hasScrolled() {
			var st = $(this).scrollTop();
			
			// Make sure they scroll more than delta
			if(Math.abs(lastScrollTop - st) <= delta)
				return;
			
			// If they scrolled down and are past the navbar, add class .nav-up.
			// This is necessary so you never see what is "behind" the navbar.
			if (st > lastScrollTop && st > navbarHeight){
				// Scroll Down
				$('header').removeClass('nav-bar').addClass('nav-up');
				$('.LOGO').hide();
                $('.nav').hide();
			} else {
				// Scroll Up
				if(st + $(window).height() < $(document).height()) {
					$('header').removeClass('nav-up').addClass('nav-bar');
					$('.LOGO').show();
                    $('.nav').show();
				}
			}
			
			lastScrollTop = st;
		}
		
	});
    
    
// This is for the parallax scrolling
    
    $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var imgPos = scrollTop / 8.5 + 'px';
            var bgPos = scrollTop / 10 + 'px';
            $('#cover-img').css('transform', 'translateY(' + imgPos + ')');
    });
    
    
    
 //this is for the portfolio filter   
    $(function() {
          $('#fil li a').click(function() {
            var ourClass = $(this).attr('class');

            $('#fil li').removeClass('tab-on');
            $(this).parent().addClass('tab-on');
              
              
            if(ourClass == 'fil-all') {
              $('#works').children().show();
            }
              
            else {
              $('#works').children('div:not(.' + ourClass + ')').hide();
              $('#works').children('div.' + ourClass).show();
            }
            return false;

          });

    });
    
    
    
// This is for scrolling to show
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);     
            } 
        }); 
    
    });
    
    
//Index interaction
    $(function(){
    $("#change-background").hover(function(){
    $('body').css({"background-color": "black", "color": "white"});
    $('#index-footer ul li a').css('color','white');
    }, function(){
        // change to any color that was previously used.
        $('body').css({"background-color": "#FBFBFB", "color": "black"});
        $('#index-footer ul li a').css('color','black');
    });
});

    
})(jQuery);

