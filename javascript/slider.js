// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    let slideWidth = slides[0].offsetWidth;
    let index = 0;

    function updateSlider() {
        sliderWrapper.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    function nextSlide() {
        index++;
        if (index >= slideCount) {
            index = 0;
            sliderWrapper.style.transition = 'none'; // Disable transition for a moment
            sliderWrapper.style.transform = `translateX(0px)`;
            setTimeout(() => {
                sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
                index++;
                updateSlider();
            }, 20); // Short delay to allow transition reset
        } else {
            updateSlider();
        }
    }

    function prevSlide() {
        index--;
        if (index < 0) {
            index = slideCount - 1;
            sliderWrapper.style.transition = 'none'; // Disable transition for a moment
            sliderWrapper.style.transform = `translateX(${-slideWidth * slideCount}px)`;
            setTimeout(() => {
                sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
                index--;
                updateSlider();
            }, 20); // Short delay to allow transition reset
        } else {
            updateSlider();
        }
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    window.addEventListener('resize', () => {
        slideWidth = slides[0].offsetWidth;
        updateSlider();
    });
});
