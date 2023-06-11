(function($){

	$('#main').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		download: false,
	});

	// $('.swiper-slide.swiper-slide-active [data-aos]').removeClass('aos-animate');

	var swiper = new Swiper('.banner .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		centeredSlides: false,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 10,
		autoHeight: true,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			// dynamicBullets: true,
		},
		breakpoints: {
			768: {
				spaceBetween: 20,
			}
		}
	});

	var swiper = new Swiper('.certification-list .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		centeredSlides: false,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 10,
		autoHeight: true,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: false,
		autoplay: false,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				spaceBetween: 10,
				slidesPerView: 3,
				// pagination: false
			},
			1100: {
				spaceBetween: 20,
				slidesPerView: 4,
				pagination: false
			}
		}
	});

	var swiper = new Swiper('.review .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 10,
		autoHeight: true,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: false,
		autoplay: false,
		observer: true,
		observeParents: true,
		navigation: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
			1100: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			1400: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
			1900: {
				spaceBetween: 20,
				slidesPerView: 4,
			}
		}
	});

	// var swiper = new Swiper('.gallery.two .swiper-container', {
	// 	keyboard: {
	// 		enabled: true,
	// 	},
	// 	grabCursor: true,
	// 	centeredSlides: true,
	// 	slidesPerView: 1,
	// 	slidesPerGroup: 1,
	// 	spaceBetween: 10,
	// 	autoHeight: true,
	// 	loop: true,
	// 	loopFillGroupWithBlank: true,
	// 	navigation: {
	// 		nextEl: ".swiper-button-next",
	// 		prevEl: ".swiper-button-prev",
	// 	},
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 		dynamicBullets: true,
	// 	},
	// 	breakpoints: {
	// 		768: {
	// 			spaceBetween: 20,
	// 		}
	// 	}
	// });

})(jQuery);