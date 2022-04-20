document.addEventListener('DOMContentLoaded', function(){
	function equalSlideHeight(slider){
		$(slider).on('setPosition', function () {
			$(this).find('.slick-slide').height('auto');
			var slickTrack = $(this).find('.slick-track');
			var slickTrackHeight = $(slickTrack).height();
			$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
		});
	}

	let arrowsButtons = {
		prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><path d="M117 47 68 96l49 49" stroke="#00AEEF" stroke-width="21" stroke-linecap="round"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next" aria-label="Next"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><path d="m75 47 49 49-49 49" stroke="#00AEEF" stroke-width="21" stroke-linecap="round"/></svg></button>'
	}


	$('.products-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: 0,
		arrows: true,
		...arrowsButtons,
		dots: true,
		swipeToSlide: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
					arrows: false
				}
			}
		]
	});

	equalSlideHeight('.products-slider');

	// Scroll to anchor
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		if ($.attr(this, 'href') === '#') {
			return false;
		}

		let topNavHeight = 0;

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - topNavHeight
		}, 500);
	});

});