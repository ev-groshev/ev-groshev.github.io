$(function () {

	$(".mobile__btn").on('click', function () {
		$('.menu').slideToggle();
	});



	const slider = document.querySelector('.swiper-container');
	const clients = document.querySelector('.client-say__slider')
	let mySwiper = new Swiper(slider, {
		slidesPerView: 3,
		spaceBetween: 23,

		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
		breakpoints: {
			900: {
				slidesPerView: 3,
			},
			500: {
				slidesPerView: 2,
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
				},
			},
			320: {
				slidesPerView: 1,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets'
				},
			}
		}
	});

	let clintSlider = new Swiper(clients, {
		slidesPerView: 1,
		spaceBetween: 21,
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 1,
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
				},
			},
			320: {
				slidesPerView: 1,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets'
				},
			}
		}
	});


});