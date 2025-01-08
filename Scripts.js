function buttonClick(buttonName) {
    alert(`You are about to be redirected to ${buttonName}. Please wait...`);
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

    const keyframes = `
        @keyframes moveParticles {
            0% {
                transform: translate(${startX}px, ${startY}px);
            }
            100% {
                transform: translate(${startX + directionX * 500}px, ${startY + directionY * 500}px);
            }
        }
    `;
    document.styleSheets[0].insertRule(keyframes, document.styleSheets[0].cssRules.length);

    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

setInterval(createParticle, 100);
