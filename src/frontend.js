document.addEventListener('DOMContentLoaded', () => {
	const sliders = document.querySelectorAll('.wp-block-image-slider');

	sliders.forEach((slider) => {
		const images = slider.querySelectorAll('img');
		const duration = slider.getAttribute('data-transition-duration');
		let currentIndex = 0;

		const showNextImage = () => {
			images[currentIndex].classList.remove('visible');
			currentIndex = (currentIndex + 1) % image.length;
			images[currentIndex].classList.add('visible');
		};

		images[currentIndex].classList.add('visible');
		setInterval(showNextImage, duration);
	});
});
