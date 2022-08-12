$(document).ready(function () {
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:4,
		autoplay:true,
		speed:500,
		autoplaySpeed:4000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

let pbtn = document.querySelector('.preview-button');
let cel = document.querySelector('.contact__conteiner');

pbtn.addEventListener('click', function () {
    cel.scrollIntoView(true);
});

let fbtn = document.querySelector('.footer__button');
let hel = document.querySelector('header');

fbtn.addEventListener('click', function () {
    hel.scrollIntoView(true);
});
