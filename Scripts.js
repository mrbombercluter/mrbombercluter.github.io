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
  
