// Tema escuro/claro 
const toggleBtn = document.getElementById('theme-toggle'); 
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light'); 
});

// Carrossel 
const track = document.querySelector('.carousel-track'); 
const slides = Array.from(track.children); 
const nextButton = document.querySelector('.carousel-btn.next'); 
const prevButton = document.querySelector('.carousel-btn.prev');
let currentSlide = 0;

function updateCarousel() { 
    const slideWidth = slides[0].getBoundingClientRect().width; 
    track.style.transform = translateX(-${slideWidth * currentSlide}px);
}

nextButton.addEventListener('click', () => { 
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => { 
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();

