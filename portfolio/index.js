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

// language change 
import i18Obj from './translate.js';

const enLanguage = document.querySelector('.english');
const ruLanguage = document.querySelector('.russian');

function getTranslation(language) {
  const translationElements = document.querySelectorAll('[data-i18]');
  translationElements.forEach((elem) => {
    if (elem.placeholder) {
      elem.placeholder = i18Obj[language][elem.dataset.i18];
      elem.textContent = '';
    } else {
      elem.textContent = i18Obj[language][elem.dataset.i18];
  }
  });  
}

enLanguage.addEventListener('click', () => getTranslation('en'));
ruLanguage.addEventListener('click', () => getTranslation('ru'));

// language active button style
enLanguage.classList.add('active');

function addActiveClassLanguage(event) {
  enLanguage.classList.remove('active');
  ruLanguage.classList.remove('active');
  event.target.classList.add('active');
}

enLanguage.addEventListener('click', addActiveClassLanguage);
ruLanguage.addEventListener('click', addActiveClassLanguage);

// theme change
const themeButton = document.querySelector('.theme-switcher');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const header = document.querySelector('.header-container');
const hero = document.querySelector('.hero-container');
const heroButton = document.querySelector('.hero-button');
const contactsButton = document.querySelector('.message-button');
const contactsContainer = document.querySelector('.contacts-section-container');
const textarea = document.querySelector('textarea');
const githubLink = document.querySelector('.github-link');
const rssLink = document.querySelector('.rss-link');
const instagram = document.querySelector('.instagram');
const facebook = document.querySelector('.facebook');
const twitter = document.querySelector('.twitter');
const pinterest = document.querySelector('.pinterest');
const videoPlayer = document.querySelector('.video-player');

const navLinks = document.querySelectorAll('.navigation-link');
const hamburgerLines = document.querySelectorAll('.hamburger-line');
const header2Text = document.querySelectorAll('h2');
const header3Text = document.querySelectorAll('h3');
const priceSum = document.querySelectorAll('.price-sum');
const inputs = document.querySelectorAll('input');

const themeElements = [body, logo, header, enLanguage, ruLanguage, hero, heroButton, contactsButton, menu, contactsContainer, textarea, githubLink, rssLink, instagram, facebook, twitter, pinterest, videoPlayer];

function toggleTheme() {
  themeElements.forEach((elem) => { elem.classList.toggle('light-theme') });
  navLinks.forEach((elem) => { elem.classList.toggle('light-theme') });
  hamburgerLines.forEach((elem) => { elem.classList.toggle('light-theme') });
  header2Text.forEach((elem) => { elem.classList.toggle('light-theme') });
  portfolioButtonsAll.forEach((elem) => { elem.classList.toggle('light-theme') });
  header3Text.forEach((elem) => { elem.classList.toggle('light-theme') });
  priceSum.forEach((elem) => { elem.classList.toggle('light-theme') });
  inputs.forEach((elem) => { elem.classList.toggle('light-theme') });
  themeButton.classList.toggle('open');
}

themeButton.addEventListener('click', toggleTheme);

//video
const mainPlayButton = document.querySelector('.button-play');
const videoPoster = document.querySelector('.video-player-poster');
const video = document.querySelector('video.video-player-viewer');
const playPauseButton = document.querySelector('.controls-button-play');
const volumeMuteButton = document.querySelector('.controls-button-volume');
const videoProgress = document.querySelector('.play-progress');
const volumeLevel = document.querySelector('.volume-level');

function hidePoster() {
  mainPlayButton.classList.add('hidden');
  videoPoster.classList.add('hidden');
}

mainPlayButton.addEventListener('click', hidePoster);

let isPlay = false;
let progression;

function changeProgress() {
  let progress = video.currentTime / video.duration;
  videoProgress.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${(progress * 1000) / 10}%, #C3C3C3 ${(progress * 1000) / 10}%, #C3C3C3 100%)`;
  videoProgress.value = (progress * 1000) / 10;
};

function changeCurrentProgress() {
  const value = this.value;
  video.currentTime = (video.duration * value) / 100;
  this.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${value}%, #C3C3C3 ${value}%, #C3C3C3 100%)`;
  videoProgress.value = value;
}; 

videoProgress.addEventListener('input', changeCurrentProgress); 

function playVideo() {
  if(!isPlay) {
    video.play();
    isPlay = true;
    playPauseButton.classList.add('pause');
    mainPlayButton.classList.add('hidden');
    changeProgress();
    progression = window.setInterval(changeProgress, 200); 
  } else {
    video.pause();
    isPlay = false;
    playPauseButton.classList.remove('pause');
    mainPlayButton.classList.remove('hidden');
    clearInterval(progression);
  };
};

playPauseButton.addEventListener('click', playVideo);
mainPlayButton.addEventListener('click', playVideo);
video.addEventListener('click', playVideo);

video.volume = 0.4;

function changeVolume(){
  let vol = this.value;
  video.volume = vol / 100;
  volumeLevel.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${vol}%, #C3C3C3 ${vol}%, #C3C3C3 100%)`;
  
  if (vol == 0) { 
    volumeMuteButton.classList.add('muted');
  } else { 
    video.muted = false;
    volumeMuteButton.classList.remove('muted');
  };
};

volumeLevel.addEventListener('input', changeVolume);

function muteVideo() {
  video.muted = !video.muted;
  if (volumeMuteButton.classList.contains('muted') && video.volume == 0) {
    video.volume = 0.4;
    video.muted = false;
    volumeMuteButton.classList.remove('muted');
    volumeLevel.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${video.volume * 100}%, #C3C3C3 ${video.volume * 100}%, #C3C3C3 100%)`;
    volumeLevel.value = video.volume * 100;
  } else if (video.muted) {
    volumeMuteButton.classList.add('muted');
    volumeLevel.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 0%, #C3C3C3 0%, #C3C3C3 100%)`;
    volumeLevel.value = 0;
  } else {
    volumeMuteButton.classList.remove('muted');
    volumeLevel.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${video.volume * 100}%, #C3C3C3 ${video.volume * 100}%, #C3C3C3 100%)`;
    volumeLevel.value = video.volume * 100;
  };
};

volumeMuteButton.addEventListener('click', muteVideo);

function isEnded() {
  isPlay = false;
  playPauseButton.classList.remove('pause');
  mainPlayButton.classList.remove('hidden');
};

video.addEventListener('ended', isEnded);