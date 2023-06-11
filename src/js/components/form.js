(function($){

	$('.multidate').datepicker({
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		autoclose: true,
		disableTouchKeyboard: 'true',
		zIndexOffset: 2,
		multidate: true,
		multidateSeparator: " - ",
		templates: {
			leftArrow: '<i class="fa fa-angle-left"></i>',
			rightArrow: '<i class="fa fa-angle-right"></i>'
		}
	});

	$('.datepicker-form').datepicker({
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		autoclose: true,
		disableTouchKeyboard: 'true',
		zIndexOffset: 2,
		templates: {
			leftArrow: '<i class="fa fa-angle-left"></i>',
			rightArrow: '<i class="fa fa-angle-right"></i>'
		}
    });

})(jQuery);