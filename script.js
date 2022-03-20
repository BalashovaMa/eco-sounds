let isPlay = false;
const playBtn = document.querySelector('.play-btn');
const nav = document.querySelector('.header_nav_ul');
const navLi = document.querySelectorAll('.header_nav_li');
const birdsName = document.querySelectorAll('[data-birds]')
const audio = document.querySelector('audio');
const main = document.querySelector('main');
const logo = document.querySelector('.logo');

function playAudio() {
  if (!isPlay) {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    playBtn.classList.add('pause')
    playBtn.classList.remove('play')
  } else {
    audio.pause();
    isPlay = false;
    playBtn.classList.remove('pause')
    playBtn.classList.add('play')
  }
}
playBtn.addEventListener('click', playAudio);

function getImage(target) {
  main.style.backgroundImage = `url(./assets/img/${target}.jpg)`;
}

function playBirds(event) {
  if (event.target.classList.contains('header_nav_li')) {
    const target = event.target.getAttribute('data-birds');
    audio.src = `./assets/audio/${target}.mp3`;
    navLi.forEach(item => item.classList.remove('active'))
    event.target.classList.add('active')
    isPlay = false;
    playAudio()
    getImage(target);
  }
}

nav.addEventListener('click', playBirds)
logo.addEventListener('click', playBirds)





