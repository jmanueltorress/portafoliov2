document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-item');
  
    let currentIndex = 0;
    const slideWidth = sliderItems[0].clientWidth;
  
    function nextSlide() {
      currentIndex = (currentIndex + 2) % sliderItems.length;
      updateSlider();
    }
  
    function updateSlider() {
      const translateX = -currentIndex * slideWidth;
      sliderContainer.style.transform = `translateX(${translateX}px)`;
    }
  
    function autoSlide() {
      setInterval(() => {
        nextSlide();
      }, 700); // Cambia la duración de cambio de imagen en milisegundos
    }
  
    autoSlide();
  });
  