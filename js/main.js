 $(document).ready(function() {
	$(window).resize(function(){
		    var w = $(window).width();
		    var topnav = $("#topnav");
		    if(w > 800) { //не забудь поменять условие на правильное
		    	//меняем значение аттрибута class элемента topnav
		        topnav.attr("class","header__menu"); 
		    }
		});
	(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".cmn-toggle-switch");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }
 
})();

	 navigation__button.onclick = function myFunction() {
		var x = document.getElementById("topnav");
		if(x.className === "header__menu") {
			x.className += " responsive";
		}  else{
				x.className = "header__menu";

		}
	}

	$(document).ready(function(){
  $('#owl-top').owlCarousel({
  items: 1,
  loop: true,
  nav: false,
  
    autoplay:true, // автопрокрутка
    smartSpeed: 3000,
    autoplayTimeout:4000, // задержка в мс
  });  
});

});