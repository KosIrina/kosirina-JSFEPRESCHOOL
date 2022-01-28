// hamburger + menu (<768px)
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation-list');
const nav = document.querySelector('.navigation');

function toggleMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);

function closeMenu(event) {
  if (event.target.classList.contains('navigation-link')) {
  hamburger.classList.remove('open');
  menu.classList.remove('open');
  }
}

nav.addEventListener('click', closeMenu);

// portfolio images change
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioButtons = document.querySelector('.portfolio-buttons');

function changeImages(event) {
  if (event.target.classList.contains('portfolio-button')) {
    let season = event.target.dataset.season;
    portfolioImages.forEach((img, index) => img.src = `./assets/jpeg/portfolio-examples/${season}/${index + 1}.jpg`);    
  }
}

portfolioButtons.addEventListener('click', changeImages);

// portfolio active button style
const portfolioButtonsAll = document.querySelectorAll('.portfolio-button');
const autumnButton = document.querySelector('.button-autumn');

autumnButton.classList.add('active');

function addActiveClassPortfolio(event) {
  portfolioButtonsAll.forEach((button) => { button.classList.remove('active') });
  event.target.classList.add('active');
}

portfolioButtonsAll.forEach((elem) => { elem.addEventListener('click', addActiveClassPortfolio) });

// portfolio images caching
function preloadImages(season) {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/jpeg/portfolio-examples/${season}/${i}.jpg`;   
  }
} 
const seasons = ['winter', 'spring', 'summer', 'autumn'];
seasons.forEach((elem) => preloadImages(elem));
