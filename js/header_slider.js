// скрипт слайдера 
$(document).ready(function() {
    
    $("#footer__slider_container").owlCarousel({
		items: 4,
		
		loop: true,
		autoplay: true,
		animateOut: 'fadeOut',
		//navigation : true,
		//navigationText : ["",""],
		slideSpeed : 200,
		paginationSpeed: 800,
		rewindSpeed: 1000
	});
    $("#slider_container").owlCarousel({
		items: 1,
		autoplay: 300,
		navigation : true,
    dots: false,
    slideSpeed : 300,
    paginationSpeed : 400,
    
    itemsDesktop : true,
    itemsDesktopSmall : true,
    itemsTablet: true,
    itemsMobile : true,
    navigationText : ["",""],
    responsiveClass:true,
    responsive:{
        768:{
            items: 1
	    }
	  }
	 } );
    })