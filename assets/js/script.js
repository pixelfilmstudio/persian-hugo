// Preloader js    
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

(function ($) {
	'use strict';


	//  Search Form Open
	$('#searchOpen').on('click', function () {
		$('.search-wrapper').addClass('open');
		setTimeout(function () {
			$('.search-box').focus();
		}, 400);
	});
	$('#searchClose').on('click', function () {
		$('.search-wrapper').removeClass('open');
	});

})(jQuery);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
		.forEach(function (form) {
			form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
})()