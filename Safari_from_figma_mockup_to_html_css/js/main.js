$(function(){
  $('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	$('.photogallery__slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/slide_left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/slide_right.svg" alt=""></button>',
	});
	$('.photogallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});
	$('.menu__btn').on('click', function(){
		$('.header__menu-list').toggleClass('header__menu-list--active');
	});
});
