let currentIndex = 0;

function moveSlide(direction) {
  const wrapper = document.getElementById('cardsWrapper');
  const totalCards = document.querySelectorAll('.card').length;
  
  currentIndex = (currentIndex + direction + totalCards) % totalCards;
  
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}
