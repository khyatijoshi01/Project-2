let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
    });
}

function goNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}


function goPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

updateSlider();