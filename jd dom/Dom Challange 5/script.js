// let's declare variables first 
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// what is current index let's declare that as well 
let currentIndex = 0;

// let's make function to show current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// move to next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// move to previous slide
function prevSlide() { // Fixed comment typo
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Button functionalities
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-play the carousel every 5 seconds
setInterval(nextSlide, 5000);

// Initial slide display
showSlide(currentIndex);