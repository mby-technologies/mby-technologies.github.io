
 const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let index = 0;
  const totalSlides = carousel.children.length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  // Auto défilement toutes les 5s
  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  }, 5000);


  //Mobile btn

  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });


