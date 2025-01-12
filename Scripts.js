// Function to open the page in full screen automatically
document.addEventListener("DOMContentLoaded", () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }

  // Lower the volume of the background music
  const backgroundMusic = document.getElementById('background-music');
  backgroundMusic.volume = 0.2; // Volume set to 20%
});

function buttonClick(buttonName) {
  alert(`Click OK to be redirected to ${buttonName}.`);
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const firstButton = document.querySelector('button');
  if (firstButton) {
    firstButton.focus();
  }
});

document.querySelectorAll('.button-container button').forEach(button => {
  button.addEventListener('mouseenter', function () {
    button.classList.add('button-hover');
  });

  button.addEventListener('mouseleave', function () {
    button.classList.remove('button-hover');
  });
});

// Particle effect
function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  document.getElementById('particles').appendChild(particle);

  const size = Math.random() * 5 + 3;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  particle.style.left = `${startX}px`;
  particle.style.top = `${startY}px`;

  const duration = Math.random() * 10 + 5;
  const directionX = Math.random() * 2 - 1;
  const directionY = Math.random() * 2 - 1;

  const keyframes =
    `@keyframes moveParticles {
            0% {
                transform: translate(${startX}px, ${startY}px);
            }
            100% {
                transform: translate(${startX + directionX * 500}px, ${startY + directionY * 500}px);
            }
        }`;
  document.styleSheets[0].insertRule(keyframes, document.styleSheets[0].cssRules.length);

  setTimeout(() => {
    particle.remove();
  }, duration * 1000);
}

setInterval(createParticle, 100);  // Slower particle generation

// Background transition on button click for dynamic effect
const body = document.querySelector('body');
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    body.style.background = `linear-gradient(135deg, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.85), rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.85))`;
  });
});
