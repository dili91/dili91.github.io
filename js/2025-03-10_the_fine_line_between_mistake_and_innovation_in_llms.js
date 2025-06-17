document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slideContainers = document.querySelectorAll('.carousel-item');
  
  function showSlide(index) {
    if (index >= slideContainers.length) { 
      currentSlide = 0; 
    }
    else if (index < 0) { 
      currentSlide = slideContainers.length - 1; 
    }
    else { 
      currentSlide = index; 
    }
    
    document.querySelector('.carousel-inner').style.transform = 'translateX(-' + currentSlide * 100 + '%)';
  }
  
  window.moveSlide = function(n) {
    showSlide(currentSlide + n);
  }
  
  // Initialize carousel
  showSlide(0);
});