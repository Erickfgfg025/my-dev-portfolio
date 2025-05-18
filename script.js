// Tema escuro/claro 
const toggleBtn = document.getElementById('theme-toggle'); 
const body = document.body;

.projetos {
  padding: 2rem;
  background-color: #f0f2f5;
  text-align: center;
}

.projetos h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
}

.projeto-card {
  background: #fff;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.projeto-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.projeto-img {
  width: 100%;
  height: auto;
  display: block;
}

.projeto-conteudo {
  padding: 1.5rem;
}

.projeto-conteudo h3 {
  font-size: 1.5rem;
  color: #222;
}

.projeto-conteudo p {
  margin: 1rem 0;
  color: #555;
}

.btn-projeto {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  position: relative;
}

.btn-projeto:hover {
  background-color: #0056b3;
}

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

