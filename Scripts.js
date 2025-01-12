document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
  
    function openFullscreen() {
      if (body.requestFullscreen) {
        body.requestFullscreen();
      } else if (body.mozRequestFullScreen) {
        body.mozRequestFullScreen();
      } else if (body.webkitRequestFullscreen) {
        body.webkitRequestFullscreen();
      } else if (body.msRequestFullscreen) {
        body.msRequestFullscreen();
      }
    }
  
    openFullscreen();
  
    const firstButton = document.querySelector('button');
    if (firstButton) {
      firstButton.focus();
    }
  
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.2;
  });
  
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  document.querySelectorAll('.button-container button').forEach(button => {
    button.addEventListener('mouseenter', function () {
      button.classList.add('button-hover');
    });
  
    button.addEventListener('mouseleave', function () {
      button.classList.remove('button-hover');
    });
  });
  
