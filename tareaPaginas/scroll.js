(function ($) {



	$(".navbar-nav").on("click", "li", function () {
		$(".navbar-nav li").removeClass("active");
		$(this).addClass("active");
	});

	$('.scrl-down').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000, 'linear');
	});


	//On scroll menu fixed to top
	var menu = $("nav");
	$(window).scroll(function () {
		//more then or equals to
		if ($(window).scrollTop() < 800) {
			menu.removeClass('fixed-top animated slideInDown');

			//less then 100px from top
		} else {
			menu.addClass('fixed-top animated slideInDown');

		}
	});



}(jQuery));