 $(document).ready(function() {
 	

	$(window).resize(function(){
		    var w = $(window).width();
		    var topnav = $("#topnav");
		    if(w > 800) { //не забудь поменять условие на правильное
		    	//меняем значение аттрибута class элемента topnav
		        topnav.attr("class","header__menu"); 
		    }
		});
	//бургер
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
// коне
	$("#navigation__button").click(myFunction); 

	function myFunction() {
		var x = document.getElementById("topnav");
		;
		if(x.className === "header__menu") {
			x.className += " responsive";
			console.log("click")
		}  else{
			console.log("clock")
				x.className = "header__menu";

		}
	}

	//открываем поп 
$('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку 
    var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id 
    $(popup_id).show(); // Открываем окно
    $('.overlay_popup').show(); // Открываем блок заднего фона
}) 
$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
});
//открываем поп 

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