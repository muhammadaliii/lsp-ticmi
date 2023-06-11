/**
 * Main
 * Custom Scripts
 */

$(function() {
	// Disable Context Menu (Right Click)
	// $("html, body").on("contextmenu", function(e) {
	// 	return false;
	// });

	jcf.setOptions('Select', {
		wrapNative: true
	});

	jcf.replaceAll();
	
	// Document Ready
	$(document).ready(function(){
		$(this).scrollTop(0);
	});

	setTimeout(function(){
	// 	$('.progressive-image').progressiveImage();

		progressively.init({
			delay: 50,
			throttle: 300,
			smBreakpoint: 600,
			onLoad: function(elem) {
				// console.log(elem);
			},
			onLoadComplete: function() {
				// console.log('All images have finished loading!');
			}
		});

	}, 400);

	setTimeout(function(){
		AOS.init({
			offset: 60,
			duration: 600,
			easing: 'linear'
		});
	}, 800);

	// if ($('.certification-list').length > 0) {
	// 	$('.certification-list button[data-toggle="pill"]').on('shown.bs.tab', function (event) {
	// 		console.log(event.target);
	// 	})
	// }

	$(window).on('resize', function(){
		// $('.progressive-image').progressiveImage();
		AOS.refresh();
	});
})

$(window).smartresize(function() {
	// Debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
});